import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { InsightsMetrics } from './InsightsMetrics';
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
  return render(<InsightsMetrics />);
}

describe('InsightsMetrics', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders insights overview title', () => {
    setup({});
    expect(screen.getAllByText('Insights Overview').length).toBeGreaterThanOrEqual(1);
  });

  it('navigates to dashboard when dashboard link is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getAllByText('Dashboard')[0]);
    expect(navigate).toHaveBeenCalledWith('dashboard');
  });

  it('navigates to settings when settings link is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getAllByText('Settings')[0]);
    expect(navigate).toHaveBeenCalledWith('settings');
  });

  it('navigates to create-record when New Entry is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('New Entry'));
    expect(navigate).toHaveBeenCalledWith('create-record');
  });

  it('navigates to dashboard when Sign Out is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Sign Out'));
    expect(navigate).toHaveBeenCalledWith('dashboard');
  });

  it('navigates to profile when notifications button is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getAllByLabelText('Notifications')[0]);
    expect(navigate).toHaveBeenCalledWith('profile');
  });

  it('updates search query when typing in search input', () => {
    const setSearchQuery = vi.fn();
    setup({ setSearchQuery });
    const input = screen.getByPlaceholderText('Search metrics...');
    fireEvent.change(input, { target: { value: 'speed' } });
    expect(setSearchQuery).toHaveBeenCalledWith('speed');
  });

  it('displays correct record counts from context', () => {
    setup({});
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('20.00%')).toBeInTheDocument();
  });

  it('displays zero counts when no records', () => {
    setup({ records: [] });
    const zeroElements = screen.getAllByText('0');
    expect(zeroElements.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('0.00%')).toBeInTheDocument();
  });

  it('navigates to dashboard when View All is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('View All'));
    expect(navigate).toHaveBeenCalledWith('dashboard');
  });

  it('navigates to settings when support link is clicked', () => {
    const navigate = vi.fn();
    setup({ navigate });
    fireEvent.click(screen.getByText('Support'));
    expect(navigate).toHaveBeenCalledWith('settings');
  });
});
