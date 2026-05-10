import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NoRecordsFound } from './NoRecordsFound';
import { useAppContext } from '../contexts/AppContext';
import { makeMockContext } from '../test/utils';

vi.mock('../contexts/AppContext', () => ({
  useAppContext: vi.fn(),
}));

function setup(partial: Parameters<typeof makeMockContext>[0]) {
  vi.mocked(useAppContext).mockReturnValue(makeMockContext(partial));
  return render(<NoRecordsFound />);
}

describe('NoRecordsFound', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders empty state message and illustration', () => {
    setup({ records: [] });
    expect(screen.getByText('No Records Found')).toBeInTheDocument();
    expect(screen.getByText(/Your database is currently empty/)).toBeInTheDocument();
  });

  it('navigates to dashboard when dashboard link is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Dashboard'));
    expect(navigate).toHaveBeenCalledWith('dashboard');
  });

  it('navigates to insights when insights link is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Insights'));
    expect(navigate).toHaveBeenCalledWith('insights');
  });

  it('navigates to settings when settings link is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Settings'));
    expect(navigate).toHaveBeenCalledWith('settings');
  });

  it('navigates to settings when support link is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Support'));
    expect(navigate).toHaveBeenCalledWith('settings');
  });

  it('navigates to dashboard when sign out link is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Sign Out'));
    expect(navigate).toHaveBeenCalledWith('dashboard');
  });

  it('Create First Entry button clears selection and navigates to create-record', () => {
    const navigate = vi.fn();
    const selectRecord = vi.fn();
    setup({ navigate, selectRecord });
    fireEvent.click(screen.getByText('Create First Entry'));
    expect(selectRecord).toHaveBeenCalledWith(null);
    expect(navigate).toHaveBeenCalledWith('create-record');
  });

  it('New Entry sidebar button clears selection and navigates to create-record', () => {
    const navigate = vi.fn();
    const selectRecord = vi.fn();
    setup({ navigate, selectRecord });
    fireEvent.click(screen.getByText('New Entry'));
    expect(selectRecord).toHaveBeenCalledWith(null);
    expect(navigate).toHaveBeenCalledWith('create-record');
  });

  it('mobile notifications button navigates to profile', () => {
    const navigate = vi.fn();
    setup({ navigate });
    const notificationsBtn = screen.getByLabelText('Notifications');
    fireEvent.click(notificationsBtn);
    expect(navigate).toHaveBeenCalledWith('profile');
  });

  it('mobile help button navigates to settings', () => {
    const navigate = vi.fn();
    setup({ navigate });
    const helpBtn = screen.getByLabelText('Help');
    fireEvent.click(helpBtn);
    expect(navigate).toHaveBeenCalledWith('settings');
  });
});
