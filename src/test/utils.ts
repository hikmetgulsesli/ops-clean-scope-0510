import { vi } from 'vitest';
import type { AppContextValue } from '../contexts/AppContext';

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
