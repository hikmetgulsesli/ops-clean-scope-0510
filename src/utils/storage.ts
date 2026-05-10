const STORAGE_KEY = 'ops-clean-scope-0510';

export interface StorageData {
  records: {
    id: string;
    entityName: string;
    type: string;
    status: string;
    lastUpdated: string;
    priority: string;
    description: string;
    assignedTo?: string;
    assignedRole?: string;
    createdAt?: string;
    clientOrg?: string;
    projectCategory?: string;
    region?: string;
    notes?: string;
  }[];
  settings: {
    systemAlerts: boolean;
    dailyDigest: boolean;
    weeklyReport: boolean;
    darkTheme: boolean;
  };
  version: number;
}

const CURRENT_VERSION = 1;

export function loadFromStorage(): StorageData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object') return null;
    const data = parsed as Record<string, unknown>;
    if (typeof data.version !== 'number' || data.version !== CURRENT_VERSION) return null;
    if (!Array.isArray(data.records)) return null;
    if (!data.settings || typeof data.settings !== 'object') return null;
    const settings = data.settings as Record<string, unknown>;
    if (typeof settings.systemAlerts !== 'boolean') return null;
    if (typeof settings.dailyDigest !== 'boolean') return null;
    if (typeof settings.weeklyReport !== 'boolean') return null;
    if (typeof settings.darkTheme !== 'boolean') return null;
    return {
      records: data.records as StorageData['records'],
      settings: {
        systemAlerts: settings.systemAlerts,
        dailyDigest: settings.dailyDigest,
        weeklyReport: settings.weeklyReport,
        darkTheme: settings.darkTheme,
      },
      version: CURRENT_VERSION,
    };
  } catch {
    return null;
  }
}

export function saveToStorage(data: Omit<StorageData, 'version'>): void {
  try {
    const payload: StorageData = { ...data, version: CURRENT_VERSION };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // localStorage may be full or unavailable — silently fail
  }
}

export function clearStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // silently fail
  }
}

export function getStorageError(): string | null {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return null;
  } catch (e) {
    return e instanceof Error ? e.message : 'localStorage unavailable';
  }
}
