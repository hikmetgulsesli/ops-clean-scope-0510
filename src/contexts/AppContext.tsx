import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import {
  type View,
  type OpsRecord,
  type AppSettings,
  type AppState,
  DEFAULT_SETTINGS,
  INITIAL_RECORDS,
} from '../types/domain';
import { loadFromStorage, saveToStorage, clearStorage, getStorageError } from '../utils/storage';

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

const AppContext = createContext<AppContextValue | null>(null);

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
}

function buildInitialState(): AppState {
  const storageError = getStorageError();
  if (storageError) {
    return {
      currentView: 'system-error',
      records: INITIAL_RECORDS,
      selectedRecordId: null,
      settings: { ...DEFAULT_SETTINGS },
      searchQuery: '',
      filterStatus: '',
      mobileMenuOpen: false,
      profileOpen: false,
      error: storageError,
      loading: false,
    };
  }

  const stored = loadFromStorage();
  if (stored) {
    return {
      currentView: 'dashboard',
      records: stored.records,
      selectedRecordId: null,
      settings: stored.settings,
      searchQuery: '',
      filterStatus: '',
      mobileMenuOpen: false,
      profileOpen: false,
      error: null,
      loading: false,
    };
  }

  return {
    currentView: 'dashboard',
    records: INITIAL_RECORDS,
    selectedRecordId: null,
    settings: { ...DEFAULT_SETTINGS },
    searchQuery: '',
    filterStatus: '',
    mobileMenuOpen: false,
    profileOpen: false,
    error: null,
    loading: false,
  };
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(buildInitialState);

  // Persist to localStorage whenever records or settings change
  useEffect(() => {
    saveToStorage({ records: state.records, settings: state.settings });
  }, [state.records, state.settings]);

  const navigate = useCallback((view: View) => {
    setState((prev) => ({
      ...prev,
      currentView: view,
      mobileMenuOpen: false,
      error: null,
    }));
  }, []);

  const setSearchQuery = useCallback((q: string) => {
    setState((prev) => ({ ...prev, searchQuery: q }));
  }, []);

  const setFilterStatus = useCallback((s: string) => {
    setState((prev) => ({ ...prev, filterStatus: s }));
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setState((prev) => ({ ...prev, mobileMenuOpen: !prev.mobileMenuOpen }));
  }, []);

  const toggleProfile = useCallback(() => {
    setState((prev) => ({ ...prev, profileOpen: !prev.profileOpen }));
  }, []);

  const updateSettings = useCallback((partial: Partial<AppSettings>) => {
    setState((prev) => ({
      ...prev,
      settings: { ...prev.settings, ...partial },
    }));
  }, []);

  const addRecord = useCallback((record: Omit<OpsRecord, 'id' | 'lastUpdated'>) => {
    const id = `OP-${Math.floor(7000 + Math.random() * 1000)}`;
    const newRecord: OpsRecord = {
      ...record,
      id,
      lastUpdated: 'Just now',
    };
    setState((prev) => ({
      ...prev,
      records: [newRecord, ...prev.records],
      currentView: 'dashboard',
    }));
  }, []);

  const updateRecord = useCallback((id: string, partial: Partial<OpsRecord>) => {
    setState((prev) => ({
      ...prev,
      records: prev.records.map((r) =>
        r.id === id ? { ...r, ...partial, lastUpdated: 'Just now' } : r
      ),
    }));
  }, []);

  const deleteRecord = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      records: prev.records.filter((r) => r.id !== id),
      selectedRecordId: prev.selectedRecordId === id ? null : prev.selectedRecordId,
      currentView: 'dashboard',
    }));
  }, []);

  const selectRecord = useCallback((id: string | null) => {
    setState((prev) => ({
      ...prev,
      selectedRecordId: id,
      currentView: id ? 'record-details' : 'dashboard',
    }));
  }, []);

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  const retryLoad = useCallback(() => {
    const err = getStorageError();
    if (err) {
      setState((prev) => ({ ...prev, error: err }));
    } else {
      const stored = loadFromStorage();
      if (stored) {
        setState((prev) => ({
          ...prev,
          records: stored.records,
          settings: stored.settings,
          currentView: 'dashboard',
          error: null,
        }));
      } else {
        setState((prev) => ({
          ...prev,
          records: INITIAL_RECORDS,
          settings: { ...DEFAULT_SETTINGS },
          currentView: 'dashboard',
          error: null,
        }));
      }
    }
  }, []);

  const resetAll = useCallback(() => {
    clearStorage();
    setState({
      currentView: 'dashboard',
      records: INITIAL_RECORDS,
      selectedRecordId: null,
      settings: { ...DEFAULT_SETTINGS },
      searchQuery: '',
      filterStatus: '',
      mobileMenuOpen: false,
      profileOpen: false,
      error: null,
      loading: false,
    });
  }, []);

  const value: AppContextValue = {
    ...state,
    navigate,
    setSearchQuery,
    setFilterStatus,
    toggleMobileMenu,
    toggleProfile,
    updateSettings,
    addRecord,
    updateRecord,
    deleteRecord,
    selectRecord,
    clearError,
    retryLoad,
    resetAll,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
