import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CreateEditRecord } from './CreateEditRecord';
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
  notes: 'Some notes',
};

function setup(partial: Parameters<typeof makeMockContext>[0]) {
  vi.mocked(useAppContext).mockReturnValue(makeMockContext(partial));
  return render(<CreateEditRecord />);
}

describe('CreateEditRecord', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows New Entry form when no record is selected', () => {
    setup({ selectedRecordId: null });
    expect(screen.getByText('New Entry')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter record title')).toHaveValue('');
  });

  it('shows Edit Record form when a record is selected', () => {
    setup({ selectedRecordId: 'OP-7829', records: [mockRecord] });
    expect(screen.getByText('Edit Record')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter record title')).toHaveValue('Alpha Server Migration');
  });

  it('validates title is required before saving new record', () => {
    setup({ selectedRecordId: null });
    fireEvent.click(screen.getByText('Save Entry'));
    expect(screen.getByText('Title is required and must be unique.')).toBeInTheDocument();
  });

  it('clears title error when user starts typing', () => {
    setup({ selectedRecordId: null });
    fireEvent.click(screen.getByText('Save Entry'));
    expect(screen.getByText('Title is required and must be unique.')).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText('Enter record title'), { target: { value: 'A' } });
    expect(screen.queryByText('Title is required and must be unique.')).not.toBeInTheDocument();
  });

  it('calls addRecord and navigates to dashboard when saving new record', () => {
    const addRecord = vi.fn();
    const navigate = vi.fn();
    const selectRecord = vi.fn();
    setup({ selectedRecordId: null, addRecord, navigate, selectRecord });

    fireEvent.change(screen.getByPlaceholderText('Enter record title'), { target: { value: 'New Test Record' } });
    fireEvent.change(screen.getByPlaceholderText('Provide detailed context for this entry...'), { target: { value: 'Description here' } });
    fireEvent.click(screen.getByText('Save Entry'));

    expect(addRecord).toHaveBeenCalledWith({
      entityName: 'New Test Record',
      type: 'General',
      status: 'active',
      priority: 'medium',
      description: 'Description here',
    });
  });

  it('calls updateRecord and navigates to dashboard when saving edited record', () => {
    const updateRecord = vi.fn();
    const navigate = vi.fn();
    const selectRecord = vi.fn();
    setup({ selectedRecordId: 'OP-7829', records: [mockRecord], updateRecord, navigate, selectRecord });

    fireEvent.change(screen.getByPlaceholderText('Enter record title'), { target: { value: 'Updated Title' } });
    fireEvent.click(screen.getByText('Save Changes'));

    expect(updateRecord).toHaveBeenCalledWith('OP-7829', {
      entityName: 'Updated Title',
      description: 'Server migration for Alpha cluster',
      status: 'active',
      priority: 'high',
    });
    expect(navigate).toHaveBeenCalledWith('dashboard');
    expect(selectRecord).toHaveBeenCalledWith(null);
  });

  it('cancel button navigates to dashboard and clears selection', () => {
    const navigate = vi.fn();
    const selectRecord = vi.fn();
    setup({ selectedRecordId: 'OP-7829', records: [mockRecord], navigate, selectRecord });

    fireEvent.click(screen.getByText('Cancel'));
    expect(selectRecord).toHaveBeenCalledWith(null);
    expect(navigate).toHaveBeenCalledWith('dashboard');
  });

  it('close button navigates to dashboard and clears selection', () => {
    const navigate = vi.fn();
    const selectRecord = vi.fn();
    setup({ selectedRecordId: 'OP-7829', records: [mockRecord], navigate, selectRecord });

    fireEvent.click(screen.getByLabelText('Close'));
    expect(selectRecord).toHaveBeenCalledWith(null);
    expect(navigate).toHaveBeenCalledWith('dashboard');
  });

  it('preserves status and priority selections', () => {
    setup({ selectedRecordId: null });
    const statusSelect = screen.getByLabelText('Status') as HTMLSelectElement;
    const prioritySelect = screen.getByLabelText('Priority') as HTMLSelectElement;

    fireEvent.change(statusSelect, { target: { value: 'archived' } });
    fireEvent.change(prioritySelect, { target: { value: 'critical' } });

    expect(statusSelect.value).toBe('archived');
    expect(prioritySelect.value).toBe('critical');
  });
});
