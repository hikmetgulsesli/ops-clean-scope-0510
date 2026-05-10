import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SettingsPreferences } from './SettingsPreferences';
import { useAppContext } from '../contexts/AppContext';
import { makeMockContext } from '../test/utils';

vi.mock('../contexts/AppContext', () => ({
  useAppContext: vi.fn(),
}));

function setup(partial: Parameters<typeof makeMockContext>[0] = {}) {
  vi.mocked(useAppContext).mockReturnValue(makeMockContext(partial));
  return render(<SettingsPreferences />);
}

describe('SettingsPreferences', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders application preferences title', () => {
    setup();
    expect(screen.getByText('Application Preferences')).toBeInTheDocument();
  });

  it('renders notification preferences section', () => {
    setup();
    expect(screen.getByText('Notification Preferences')).toBeInTheDocument();
    expect(screen.getByText('System Alerts')).toBeInTheDocument();
    expect(screen.getByText('Daily Digest')).toBeInTheDocument();
    expect(screen.getByText('Weekly Report Generation')).toBeInTheDocument();
  });

  it('calls navigate to dashboard when dashboard nav is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Dashboard'));
    expect(navigate).toHaveBeenCalledWith('dashboard');
  });

  it('calls navigate to insights when insights nav is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Insights'));
    expect(navigate).toHaveBeenCalledWith('insights');
  });

  it('calls navigate to create-record when new entry button is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('New Entry'));
    expect(navigate).toHaveBeenCalledWith('create-record');
  });

  it('calls resetAll when sign out is clicked', () => {
    const resetAll = vi.fn();
    setup({ resetAll });
    fireEvent.click(screen.getByText('Sign Out'));
    expect(resetAll).toHaveBeenCalled();
  });

  it('toggles system alerts via updateSettings', () => {
    const updateSettings = vi.fn();
    setup({ updateSettings, settings: { systemAlerts: true, dailyDigest: false, weeklyReport: true, darkTheme: true } });
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    expect(updateSettings).toHaveBeenCalledWith({ systemAlerts: false });
  });

  it('toggles daily digest via updateSettings', () => {
    const updateSettings = vi.fn();
    setup({ updateSettings, settings: { systemAlerts: true, dailyDigest: false, weeklyReport: true, darkTheme: true } });
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]);
    expect(updateSettings).toHaveBeenCalledWith({ dailyDigest: true });
  });

  it('toggles weekly report via updateSettings', () => {
    const updateSettings = vi.fn();
    setup({ updateSettings, settings: { systemAlerts: true, dailyDigest: false, weeklyReport: true, darkTheme: true } });
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[2]);
    expect(updateSettings).toHaveBeenCalledWith({ weeklyReport: false });
  });

  it('shows checking state when check for updates is clicked', () => {
    setup();
    const btn = screen.getByText('Check for Updates');
    fireEvent.click(btn);
    expect(screen.getByText('Checking…')).toBeInTheDocument();
  });

  it('requires confirmation before clearing data', () => {
    const resetAll = vi.fn();
    setup({ resetAll });
    const btn = screen.getByText('Clear All Data');
    fireEvent.click(btn);
    expect(screen.getByText('Confirm Clear')).toBeInTheDocument();
    expect(resetAll).not.toHaveBeenCalled();
  });

  it('calls resetAll after confirmation on clear data', () => {
    const resetAll = vi.fn();
    setup({ resetAll });
    fireEvent.click(screen.getByText('Clear All Data'));
    fireEvent.click(screen.getByText('Confirm Clear'));
    expect(resetAll).toHaveBeenCalled();
  });

  it('calls navigate to settings when support link is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Support'));
    expect(navigate).toHaveBeenCalledWith('settings');
  });

  it('calls navigate to profile when mobile profile image is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByLabelText('Open profile'));
    expect(navigate).toHaveBeenCalledWith('profile');
  });
});
