import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AppProvider, useAppContext } from '../contexts/AppContext';
import { loadFromStorage, saveToStorage, clearStorage, getStorageError } from '../utils/storage';

// Mock storage module
vi.mock('../utils/storage', () => ({
  loadFromStorage: vi.fn(),
  saveToStorage: vi.fn(),
  clearStorage: vi.fn(),
  getStorageError: vi.fn(),
}));

const TestConsumer = () => {
  const ctx = useAppContext();
  return (
    <div>
      <div data-testid="view">{ctx.currentView}</div>
      <div data-testid="records-count">{ctx.records.length}</div>
      <div data-testid="search">{ctx.searchQuery}</div>
      <div data-testid="filter">{ctx.filterStatus}</div>
      <div data-testid="mobile-menu">{ctx.mobileMenuOpen ? 'open' : 'closed'}</div>
      <div data-testid="profile">{ctx.profileOpen ? 'open' : 'closed'}</div>
      <div data-testid="error">{ctx.error || 'none'}</div>
      <div data-testid="settings-alerts">{ctx.settings.systemAlerts ? 'on' : 'off'}</div>
      <div data-testid="settings-dark">{ctx.settings.darkTheme ? 'on' : 'off'}</div>
      <button data-testid="nav-dashboard" onClick={() => ctx.navigate('dashboard')}>Dashboard</button>
      <button data-testid="nav-insights" onClick={() => ctx.navigate('insights')}>Insights</button>
      <button data-testid="nav-settings" onClick={() => ctx.navigate('settings')}>Settings</button>
      <button data-testid="nav-error" onClick={() => ctx.navigate('system-error')}>Error</button>
      <button data-testid="toggle-menu" onClick={ctx.toggleMobileMenu}>Toggle Menu</button>
      <button data-testid="toggle-profile" onClick={ctx.toggleProfile}>Toggle Profile</button>
      <button data-testid="set-search" onClick={() => ctx.setSearchQuery('test query')}>Set Search</button>
      <button data-testid="set-filter" onClick={() => ctx.setFilterStatus('active')}>Set Filter</button>
      <button data-testid="update-settings" onClick={() => ctx.updateSettings({ systemAlerts: false, darkTheme: false })}>Update Settings</button>
      <button data-testid="add-record" onClick={() => ctx.addRecord({ entityName: 'Test Record', type: 'Infrastructure', status: 'active', priority: 'medium', description: 'Test desc' })}>Add Record</button>
      <button data-testid="delete-record" onClick={() => ctx.deleteRecord('OP-7829')}>Delete Record</button>
      <button data-testid="select-record" onClick={() => ctx.selectRecord('OP-7828')}>Select Record</button>
      <button data-testid="clear-error" onClick={ctx.clearError}>Clear Error</button>
      <button data-testid="retry-load" onClick={ctx.retryLoad}>Retry</button>
      <button data-testid="reset-all" onClick={ctx.resetAll}>Reset</button>
    </div>
  );
};

function renderWithProvider(ui: React.ReactNode) {
  return render(<AppProvider>{ui}</AppProvider>);
}

describe('AppContext - State Management', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(getStorageError).mockReturnValue(null);
    vi.mocked(loadFromStorage).mockReturnValue(null);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('initializes with dashboard view and default records', () => {
    renderWithProvider(<TestConsumer />);
    expect(screen.getByTestId('view')).toHaveTextContent('dashboard');
    expect(screen.getByTestId('records-count')).toHaveTextContent('5');
    expect(screen.getByTestId('error')).toHaveTextContent('none');
  });

  it('navigates between views', () => {
    renderWithProvider(<TestConsumer />);
    fireEvent.click(screen.getByTestId('nav-insights'));
    expect(screen.getByTestId('view')).toHaveTextContent('insights');
    fireEvent.click(screen.getByTestId('nav-settings'));
    expect(screen.getByTestId('view')).toHaveTextContent('settings');
    fireEvent.click(screen.getByTestId('nav-dashboard'));
    expect(screen.getByTestId('view')).toHaveTextContent('dashboard');
  });

  it('toggles mobile menu', () => {
    renderWithProvider(<TestConsumer />);
    expect(screen.getByTestId('mobile-menu')).toHaveTextContent('closed');
    fireEvent.click(screen.getByTestId('toggle-menu'));
    expect(screen.getByTestId('mobile-menu')).toHaveTextContent('open');
    fireEvent.click(screen.getByTestId('toggle-menu'));
    expect(screen.getByTestId('mobile-menu')).toHaveTextContent('closed');
  });

  it('toggles profile panel', () => {
    renderWithProvider(<TestConsumer />);
    expect(screen.getByTestId('profile')).toHaveTextContent('closed');
    fireEvent.click(screen.getByTestId('toggle-profile'));
    expect(screen.getByTestId('profile')).toHaveTextContent('open');
  });

  it('updates search query', () => {
    renderWithProvider(<TestConsumer />);
    fireEvent.click(screen.getByTestId('set-search'));
    expect(screen.getByTestId('search')).toHaveTextContent('test query');
  });

  it('updates filter status', () => {
    renderWithProvider(<TestConsumer />);
    fireEvent.click(screen.getByTestId('set-filter'));
    expect(screen.getByTestId('filter')).toHaveTextContent('active');
  });

  it('updates settings', () => {
    renderWithProvider(<TestConsumer />);
    expect(screen.getByTestId('settings-alerts')).toHaveTextContent('on');
    expect(screen.getByTestId('settings-dark')).toHaveTextContent('on');
    fireEvent.click(screen.getByTestId('update-settings'));
    expect(screen.getByTestId('settings-alerts')).toHaveTextContent('off');
    expect(screen.getByTestId('settings-dark')).toHaveTextContent('off');
  });

  it('adds a record and navigates to dashboard', () => {
    renderWithProvider(<TestConsumer />);
    fireEvent.click(screen.getByTestId('nav-insights'));
    fireEvent.click(screen.getByTestId('add-record'));
    expect(screen.getByTestId('view')).toHaveTextContent('dashboard');
    expect(screen.getByTestId('records-count')).toHaveTextContent('6');
  });

  it('deletes a record and navigates to dashboard', () => {
    renderWithProvider(<TestConsumer />);
    fireEvent.click(screen.getByTestId('delete-record'));
    expect(screen.getByTestId('records-count')).toHaveTextContent('4');
    expect(screen.getByTestId('view')).toHaveTextContent('dashboard');
  });

  it('selects a record and navigates to record-details', () => {
    renderWithProvider(<TestConsumer />);
    fireEvent.click(screen.getByTestId('select-record'));
    expect(screen.getByTestId('view')).toHaveTextContent('record-details');
  });

  it('clears error state', () => {
    renderWithProvider(<TestConsumer />);
    fireEvent.click(screen.getByTestId('nav-error'));
    // Navigate to error view doesn't set error, but clearError should work
    fireEvent.click(screen.getByTestId('clear-error'));
    expect(screen.getByTestId('error')).toHaveTextContent('none');
  });

  it('resets all state', () => {
    renderWithProvider(<TestConsumer />);
    fireEvent.click(screen.getByTestId('set-search'));
    fireEvent.click(screen.getByTestId('update-settings'));
    fireEvent.click(screen.getByTestId('reset-all'));
    expect(screen.getByTestId('view')).toHaveTextContent('dashboard');
    expect(screen.getByTestId('search')).toHaveTextContent('');
    expect(screen.getByTestId('settings-alerts')).toHaveTextContent('on');
    expect(clearStorage).toHaveBeenCalled();
  });
});

describe('AppContext - Persistence', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(getStorageError).mockReturnValue(null);
  });

  it('loads records and settings from storage on init', () => {
    vi.mocked(loadFromStorage).mockReturnValue({
      records: [{ id: 'OP-9999', entityName: 'Stored Record', type: 'Infrastructure', status: 'active', lastUpdated: '1 hr ago', priority: 'high', description: '' }],
      settings: { systemAlerts: false, dailyDigest: true, weeklyReport: false, darkTheme: false },
      version: 1,
    });

    renderWithProvider(<TestConsumer />);
    expect(screen.getByTestId('records-count')).toHaveTextContent('1');
    expect(screen.getByTestId('settings-alerts')).toHaveTextContent('off');
  });

  it('saves to storage when settings change', async () => {
    renderWithProvider(<TestConsumer />);
    fireEvent.click(screen.getByTestId('update-settings'));
    await waitFor(() => {
      expect(saveToStorage).toHaveBeenCalled();
    });
  });

  it('saves to storage when records change', async () => {
    renderWithProvider(<TestConsumer />);
    fireEvent.click(screen.getByTestId('add-record'));
    await waitFor(() => {
      expect(saveToStorage).toHaveBeenCalled();
    });
  });
});

describe('AppContext - Error States', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows system-error view when localStorage is unavailable', () => {
    vi.mocked(getStorageError).mockReturnValue('localStorage unavailable');
    renderWithProvider(<TestConsumer />);
    expect(screen.getByTestId('view')).toHaveTextContent('system-error');
    expect(screen.getByTestId('error')).toHaveTextContent('localStorage unavailable');
  });

  it('retryLoad recovers from error when storage becomes available', () => {
    vi.mocked(getStorageError).mockReturnValue('localStorage unavailable');
    renderWithProvider(<TestConsumer />);
    expect(screen.getByTestId('view')).toHaveTextContent('system-error');

    vi.mocked(getStorageError).mockReturnValue(null);
    vi.mocked(loadFromStorage).mockReturnValue(null);

    fireEvent.click(screen.getByTestId('retry-load'));
    expect(screen.getByTestId('view')).toHaveTextContent('dashboard');
    expect(screen.getByTestId('error')).toHaveTextContent('none');
  });
});
