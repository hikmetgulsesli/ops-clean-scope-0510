import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  loadFromStorage,
  saveToStorage,
  clearStorage,
  getStorageError,
  type StorageData,
} from './storage';

const STORAGE_KEY = 'ops-clean-scope-0510';

function setStorage(value: unknown) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('returns null when nothing is stored', () => {
    expect(loadFromStorage()).toBeNull();
  });

  it('loads valid storage data', () => {
    const data: StorageData = {
      records: [
        {
          id: 'OP-1111',
          entityName: 'Valid Record',
          type: 'Infrastructure',
          status: 'active',
          lastUpdated: '1 hr ago',
          priority: 'high',
          description: 'A valid record',
        },
      ],
      settings: {
        systemAlerts: true,
        dailyDigest: false,
        weeklyReport: true,
        darkTheme: false,
      },
      version: 1,
    };
    setStorage(data);
    const result = loadFromStorage();
    expect(result).not.toBeNull();
    expect(result!.records).toHaveLength(1);
    expect(result!.records[0].id).toBe('OP-1111');
    expect(result!.settings.systemAlerts).toBe(true);
  });

  it('returns null when version mismatches', () => {
    setStorage({
      records: [],
      settings: { systemAlerts: true, dailyDigest: false, weeklyReport: true, darkTheme: false },
      version: 999,
    });
    expect(loadFromStorage()).toBeNull();
  });

  it('returns null when records is not an array', () => {
    setStorage({
      records: 'not-an-array',
      settings: { systemAlerts: true, dailyDigest: false, weeklyReport: true, darkTheme: false },
      version: 1,
    });
    expect(loadFromStorage()).toBeNull();
  });

  it('returns null when settings is missing a boolean field', () => {
    setStorage({
      records: [],
      settings: { systemAlerts: true },
      version: 1,
    });
    expect(loadFromStorage()).toBeNull();
  });

  it('returns null when a record is missing required string fields', () => {
    setStorage({
      records: [
        {
          id: 'OP-2222',
          // missing entityName, type, status, lastUpdated, priority, description
        },
      ],
      settings: {
        systemAlerts: true,
        dailyDigest: false,
        weeklyReport: true,
        darkTheme: false,
      },
      version: 1,
    });
    expect(loadFromStorage()).toBeNull();
  });

  it('filters out corrupted records and keeps valid ones', () => {
    setStorage({
      records: [
        {
          id: 'OP-VALID',
          entityName: 'Good Record',
          type: 'Infrastructure',
          status: 'active',
          lastUpdated: 'now',
          priority: 'high',
          description: 'Valid',
        },
        {
          id: 'OP-BAD',
          // missing required fields
        },
      ],
      settings: {
        systemAlerts: true,
        dailyDigest: false,
        weeklyReport: true,
        darkTheme: false,
      },
      version: 1,
    });
    const result = loadFromStorage();
    expect(result).not.toBeNull();
    expect(result!.records).toHaveLength(1);
    expect(result!.records[0].id).toBe('OP-VALID');
  });

  it('saves and reloads data correctly', () => {
    const data = {
      records: [
        {
          id: 'OP-3333',
          entityName: 'Save Test',
          type: 'Maintenance',
          status: 'pending',
          lastUpdated: 'Just now',
          priority: 'medium',
          description: 'Testing save',
        },
      ],
      settings: {
        systemAlerts: false,
        dailyDigest: true,
        weeklyReport: false,
        darkTheme: true,
      },
    };
    saveToStorage(data);
    const loaded = loadFromStorage();
    expect(loaded).not.toBeNull();
    expect(loaded!.records[0].entityName).toBe('Save Test');
    expect(loaded!.settings.dailyDigest).toBe(true);
  });

  it('clears storage', () => {
    setStorage({
      records: [],
      settings: { systemAlerts: true, dailyDigest: false, weeklyReport: true, darkTheme: false },
      version: 1,
    });
    clearStorage();
    expect(loadFromStorage()).toBeNull();
  });

  it('getStorageError returns null when localStorage works', () => {
    expect(getStorageError()).toBeNull();
  });
});
