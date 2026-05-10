import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { UserProfilePanel } from './UserProfilePanel';
import { useAppContext } from '../contexts/AppContext';
import { makeMockContext } from '../test/utils';

vi.mock('../contexts/AppContext', () => ({
  useAppContext: vi.fn(),
}));

function setup(partial: Parameters<typeof makeMockContext>[0] = {}) {
  vi.mocked(useAppContext).mockReturnValue(makeMockContext(partial));
  return render(<UserProfilePanel />);
}

describe('UserProfilePanel', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders profile title', () => {
    setup();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('renders user name and role', () => {
    setup();
    expect(screen.getByText('Alex Mercer')).toBeInTheDocument();
    expect(screen.getByText('Logistics Lead')).toBeInTheDocument();
  });

  it('calls navigate to dashboard when close button is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByLabelText('Close Profile'));
    expect(navigate).toHaveBeenCalledWith('dashboard');
  });

  it('calls navigate to settings when Personal Information is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Personal Information'));
    expect(navigate).toHaveBeenCalledWith('settings');
  });

  it('calls navigate to settings when Security & Privacy is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Security & Privacy'));
    expect(navigate).toHaveBeenCalledWith('settings');
  });

  it('calls navigate to settings when Notifications is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Notifications'));
    expect(navigate).toHaveBeenCalledWith('settings');
  });

  it('toggles dark theme when dark theme row is clicked', () => {
    const updateSettings = vi.fn();
    setup({ updateSettings, settings: { systemAlerts: true, dailyDigest: false, weeklyReport: true, darkTheme: false } });
    fireEvent.click(screen.getByText('Dark Theme'));
    expect(updateSettings).toHaveBeenCalledWith({ darkTheme: true });
  });

  it('toggles dark theme off when already on', () => {
    const updateSettings = vi.fn();
    setup({ updateSettings, settings: { systemAlerts: true, dailyDigest: false, weeklyReport: true, darkTheme: true } });
    fireEvent.click(screen.getByText('Dark Theme'));
    expect(updateSettings).toHaveBeenCalledWith({ darkTheme: false });
  });

  it('calls resetAll when sign out is clicked', () => {
    const resetAll = vi.fn();
    setup({ resetAll });
    fireEvent.click(screen.getByText('Sign Out'));
    expect(resetAll).toHaveBeenCalled();
  });

  it('shows checking state when check for updates is clicked', () => {
    setup();
    const btn = screen.getByText('Check for Updates');
    fireEvent.click(btn);
    expect(screen.getByText('Checking…')).toBeInTheDocument();
  });

  it('navigates to settings when privacy policy link is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Privacy Policy'));
    expect(navigate).toHaveBeenCalledWith('settings');
  });

  it('navigates to settings when terms of service link is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Terms of Service'));
    expect(navigate).toHaveBeenCalledWith('settings');
  });
});
