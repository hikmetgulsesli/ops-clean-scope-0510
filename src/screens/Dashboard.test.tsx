import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dashboard } from './Dashboard';
import { useAppContext } from '../contexts/AppContext';
import { makeMockContext } from '../test/utils';

vi.mock('../contexts/AppContext', () => ({
  useAppContext: vi.fn(),
}));

const mockRecords = [
  { id: 'OP-7829', entityName: 'Alpha Server Migration', type: 'Infrastructure', status: 'active', lastUpdated: '10 mins ago', priority: 'high', description: '' },
  { id: 'OP-7828', entityName: 'Q3 Financial Data Sync', type: 'Data Pipeline', status: 'pending', lastUpdated: '2 hrs ago', priority: 'medium', description: '' },
  { id: 'OP-7825', entityName: 'Security Patch Deployment', type: 'Maintenance', status: 'completed', lastUpdated: 'Yesterday', priority: 'high', description: '' },
  { id: 'OP-7822', entityName: 'User Authentication API Update', type: 'Development', status: 'failed', lastUpdated: 'Yesterday', priority: 'critical', description: '' },
  { id: 'OP-7819', entityName: 'Legacy Database Cleanup', type: 'Infrastructure', status: 'active', lastUpdated: '2 days ago', priority: 'medium', description: '' },
];

function setup(partial: Parameters<typeof makeMockContext>[0]) {
  vi.mocked(useAppContext).mockReturnValue(makeMockContext({ records: mockRecords, ...partial }));
  return render(<Dashboard />);
}

describe('Dashboard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders overview dashboard title', () => {
    setup({});
    expect(screen.getByText('Overview Dashboard')).toBeInTheDocument();
  });

  it('renders all records in table', () => {
    setup({});
    expect(screen.getByText('Alpha Server Migration')).toBeInTheDocument();
    expect(screen.getByText('Q3 Financial Data Sync')).toBeInTheDocument();
    expect(screen.getByText('Security Patch Deployment')).toBeInTheDocument();
  });

  it('calls selectRecord when a table row is clicked', () => {
    const selectRecord = vi.fn();
    setup({ selectRecord });
    fireEvent.click(screen.getByText('Alpha Server Migration'));
    expect(selectRecord).toHaveBeenCalledWith('OP-7829');
  });

  it('calls selectRecord when more_vert button is clicked', () => {
    const selectRecord = vi.fn();
    setup({ selectRecord });
    const buttons = screen.getAllByLabelText(/Actions for/);
    fireEvent.click(buttons[0]);
    expect(selectRecord).toHaveBeenCalledWith('OP-7829');
  });

  it('filters records by search query', () => {
    const setSearchQuery = vi.fn();
    setup({ setSearchQuery });
    const input = screen.getByPlaceholderText('Filter records by ID, Name, or tag...');
    fireEvent.change(input, { target: { value: 'Alpha' } });
    expect(setSearchQuery).toHaveBeenCalledWith('Alpha');
  });

  it('filters records by status select', () => {
    const setFilterStatus = vi.fn();
    setup({ setFilterStatus });
    const select = screen.getByDisplayValue('All Statuses');
    fireEvent.change(select, { target: { value: 'active' } });
    expect(setFilterStatus).toHaveBeenCalledWith('active');
  });

  it('navigates to create-record when New Entry is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('New Entry'));
    expect(navigate).toHaveBeenCalledWith('create-record');
  });

  it('navigates to create-record when New Task is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('New Task'));
    expect(navigate).toHaveBeenCalledWith('create-record');
  });

  it('navigates to insights when Insights link is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Insights'));
    expect(navigate).toHaveBeenCalledWith('insights');
  });

  it('navigates to settings when Settings link is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Settings'));
    expect(navigate).toHaveBeenCalledWith('settings');
  });

  it('navigates to settings when Support link is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Support'));
    expect(navigate).toHaveBeenCalledWith('settings');
  });

  it('navigates to dashboard when Sign Out is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Sign Out'));
    expect(navigate).toHaveBeenCalledWith('dashboard');
  });

  it('toggles row selection when checkbox is clicked', () => {
    setup({});
    const checkboxes = screen.getAllByRole('checkbox');
    // First checkbox is select-all, rest are row checkboxes
    fireEvent.click(checkboxes[1]);
    expect(checkboxes[1]).toBeChecked();
    fireEvent.click(checkboxes[1]);
    expect(checkboxes[1]).not.toBeChecked();
  });

  it('toggles all rows when select-all checkbox is clicked', () => {
    setup({});
    const selectAll = screen.getAllByRole('checkbox')[0];
    fireEvent.click(selectAll);
    const rowChecks = screen.getAllByRole('checkbox').slice(1);
    expect(rowChecks.every((cb) => (cb as HTMLInputElement).checked)).toBe(true);
  });

  it('shows pagination with correct total', () => {
    setup({ records: mockRecords });
    expect(screen.getByText(/Showing 1-5 of 5/)).toBeInTheDocument();
  });

  it('shows empty state when no records match filters', () => {
    setup({ records: [] });
    expect(screen.getByText('No records match your filters.')).toBeInTheDocument();
  });

  it('displays correct active and pending counts', () => {
    setup({ records: mockRecords });
    expect(screen.getByText('2')).toBeInTheDocument(); // active count
    expect(screen.getByText('1')).toBeInTheDocument(); // pending count
  });

  it('navigates to profile when user profile image is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getAllByLabelText('User Profile')[0]);
    expect(navigate).toHaveBeenCalledWith('profile');
  });

  it('navigates to profile when notifications button is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getAllByLabelText('Notifications')[0]);
    expect(navigate).toHaveBeenCalledWith('profile');
  });

  it('navigates to settings when help button is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getAllByLabelText('Help')[0]);
    expect(navigate).toHaveBeenCalledWith('settings');
  });
});
