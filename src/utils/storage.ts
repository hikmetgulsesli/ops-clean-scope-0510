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
    const parsed = JSON.parse(raw) as StorageData;
    if (parsed.version !== CURRENT_VERSION) {
      // Migrate or reset on version mismatch
      return null;
    }
    return parsed;
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
