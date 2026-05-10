import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { RecordDetails } from './RecordDetails';
import { useAppContext } from '../contexts/AppContext';
import { makeMockContext } from '../test/utils';

vi.mock('../contexts/AppContext', () => ({
  useAppContext: vi.fn(),
}));

const mockRecord = {
  id: 'OP-7829',
  entityName: 'Alpha Server Migration',
  type: 'Infrastructure',
  status: 'active',
  lastUpdated: '10 mins ago',
  priority: 'high',
  description: 'Server migration for Alpha cluster',
  assignedTo: 'Alex Mercer',
  assignedRole: 'Logistics Lead',
  createdAt: 'Oct 24, 2023 09:41 AM',
  clientOrg: 'Acme Corporation Logistics',
  projectCategory: 'Infrastructure Deployment',
  region: 'North America (US-East-1)',
  notes: 'Internal note here',
};

function setup(partial: Parameters<typeof makeMockContext>[0]) {
  vi.mocked(useAppContext).mockReturnValue(makeMockContext(partial));
  return render(<RecordDetails />);
}

describe('RecordDetails', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders record data correctly', () => {
    setup({ selectedRecordId: 'OP-7829', records: [mockRecord] });
    expect(screen.getByText('Record ID: OP-7829')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Alex Mercer')).toBeInTheDocument();
    expect(screen.getByText('Logistics Lead')).toBeInTheDocument();
    expect(screen.getByText('Acme Corporation Logistics')).toBeInTheDocument();
    expect(screen.getByText('Server migration for Alpha cluster')).toBeInTheDocument();
  });

  it('shows fallback values for optional fields when missing', () => {
    const minimalRecord = {
      id: 'OP-0001',
      entityName: 'Minimal',
      type: 'General',
      status: 'pending',
      lastUpdated: '1 hr ago',
      priority: 'medium',
      description: '',
    };
    setup({ selectedRecordId: 'OP-0001', records: [minimalRecord] });
    expect(screen.getByText('Unassigned')).toBeInTheDocument();
    expect(screen.getByText('Operations')).toBeInTheDocument();
    expect(screen.getByText('Global')).toBeInTheDocument();
    expect(screen.getByText('No description provided.')).toBeInTheDocument();
    expect(screen.queryByText('Internal Notes')).not.toBeInTheDocument();
  });

  it('navigates to dashboard when back button is clicked', () => {
    const navigate = vi.fn();
    const selectRecord = vi.fn();
    setup({ selectedRecordId: 'OP-7829', records: [mockRecord], navigate, selectRecord });
    fireEvent.click(screen.getByText('Back to Dashboard'));
    expect(selectRecord).toHaveBeenCalledWith(null);
    expect(navigate).toHaveBeenCalledWith('dashboard');
  });

  it('calls deleteRecord with confirmation when delete is clicked', () => {
    const deleteRecord = vi.fn();
    vi.stubGlobal('confirm', vi.fn(() => true));
    setup({ selectedRecordId: 'OP-7829', records: [mockRecord], deleteRecord });
    fireEvent.click(screen.getByLabelText('Delete record'));
    expect(deleteRecord).toHaveBeenCalledWith('OP-7829');
    vi.unstubAllGlobals();
  });

  it('does not delete when user cancels confirmation', () => {
    const deleteRecord = vi.fn();
    vi.stubGlobal('confirm', vi.fn(() => false));
    setup({ selectedRecordId: 'OP-7829', records: [mockRecord], deleteRecord });
    fireEvent.click(screen.getByLabelText('Delete record'));
    expect(deleteRecord).not.toHaveBeenCalled();
    vi.unstubAllGlobals();
  });

  it('enters edit mode when Edit Record is clicked', () => {
    setup({ selectedRecordId: 'OP-7829', records: [mockRecord] });
    fireEvent.click(screen.getByLabelText('Edit record'));
    expect(screen.getByText('Save Changes')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('saves inline edits and exits edit mode', async () => {
    const updateRecord = vi.fn();
    setup({ selectedRecordId: 'OP-7829', records: [mockRecord], updateRecord });
    fireEvent.click(screen.getByLabelText('Edit record'));

    const notesArea = screen.getByPlaceholderText('Add internal notes...');
    fireEvent.change(notesArea, { target: { value: 'Updated notes' } });

    fireEvent.click(screen.getByText('Save Changes'));
    await waitFor(() => {
      expect(updateRecord).toHaveBeenCalledWith('OP-7829', {
        description: 'Server migration for Alpha cluster',
        notes: 'Updated notes',
      });
    });
    expect(screen.queryByText('Save Changes')).not.toBeInTheDocument();
  });

  it('cancels inline edits and restores original values', () => {
    setup({ selectedRecordId: 'OP-7829', records: [mockRecord] });
    fireEvent.click(screen.getByLabelText('Edit record'));

    const notesArea = screen.getByPlaceholderText('Add internal notes...');
    fireEvent.change(notesArea, { target: { value: 'Changed' } });

    fireEvent.click(screen.getByText('Cancel'));
    expect(screen.queryByText('Save Changes')).not.toBeInTheDocument();
    expect(screen.getByText('Internal note here')).toBeInTheDocument();
  });

  it('navigates to dashboard if record is not found', async () => {
    const navigate = vi.fn();
    setup({ selectedRecordId: 'OP-9999', records: [mockRecord], navigate });
    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith('dashboard');
    });
  });
});
