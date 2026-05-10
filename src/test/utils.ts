import { vi } from 'vitest';
import type { OpsRecord, AppSettings, View } from '../types/domain';

interface AppContextValue extends AppState {
  navigate: (view: View) => void;
  setSearchQuery: (q: string) => void;
  setFilterStatus: (s: string) => void;
  toggleMobileMenu: () => void;
  toggleProfile: () => void;
  updateSettings: (partial: Partial<AppSettings>) => void;
  addRecord: (record: Omit<OpsRecord, 'id' | 'lastUpdated'>) => void;
  updateRecord: (id: string, partial: Partial<OpsRecord>) => void;
  deleteRecord: (id: string) => void;
  selectRecord: (id: string | null) => void;
  clearError: () => void;
  retryLoad: () => void;
  resetAll: () => void;
}

interface AppState {
  currentView: View;
  records: OpsRecord[];
  selectedRecordId: string | null;
  settings: AppSettings;
  searchQuery: string;
  filterStatus: string;
  mobileMenuOpen: boolean;
  profileOpen: boolean;
  error: string | null;
  loading: boolean;
}

export function makeMockContext(partial: Partial<AppContextValue> = {}): AppContextValue {
  return {
    currentView: 'dashboard',
    records: [],
    selectedRecordId: null,
    settings: { systemAlerts: true, dailyDigest: false, weeklyReport: true, darkTheme: true },
    searchQuery: '',
    filterStatus: '',
    mobileMenuOpen: false,
    profileOpen: false,
    error: null,
    loading: false,
    navigate: vi.fn(),
    setSearchQuery: vi.fn(),
    setFilterStatus: vi.fn(),
    toggleMobileMenu: vi.fn(),
    toggleProfile: vi.fn(),
    updateSettings: vi.fn(),
    addRecord: vi.fn(),
    updateRecord: vi.fn(),
    deleteRecord: vi.fn(),
    selectRecord: vi.fn(),
    clearError: vi.fn(),
    retryLoad: vi.fn(),
    resetAll: vi.fn(),
    ...partial,
  };
}
