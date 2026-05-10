import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SystemErrorState } from './SystemErrorState';
import { useAppContext } from '../contexts/AppContext';
import { makeMockContext } from '../test/utils';

vi.mock('../contexts/AppContext', () => ({
  useAppContext: vi.fn(),
}));

function setup(partial: Parameters<typeof makeMockContext>[0]) {
  vi.mocked(useAppContext).mockReturnValue(makeMockContext(partial));
  return render(<SystemErrorState />);
}

describe('SystemErrorState', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders error messaging', () => {
    setup({ error: 'Storage corrupted' });
    expect(screen.getByText('Failed to load operational data')).toBeInTheDocument();
    expect(screen.getByText(/There was a problem retrieving/)).toBeInTheDocument();
  });

  it('calls retryLoad when Retry Connection is clicked', () => {
    const retryLoad = vi.fn();
    setup({ error: 'Connection failed', retryLoad });
    fireEvent.click(screen.getByText('Retry Connection'));
    expect(retryLoad).toHaveBeenCalled();
  });

  it('calls resetAll when Clear Storage & Reset is clicked', () => {
    const resetAll = vi.fn();
    setup({ error: 'Connection failed', resetAll });
    fireEvent.click(screen.getByText('Clear Storage & Reset'));
    expect(resetAll).toHaveBeenCalled();
  });

  it('toggles technical details accordion', () => {
    setup({ error: 'ERR_TEST' });
    const detailsBtn = screen.getByLabelText('View Technical Details');
    expect(screen.queryByText(/ERR_TEST/)).not.toBeInTheDocument();

    fireEvent.click(detailsBtn);
    expect(screen.getByText(/ERR_TEST/)).toBeInTheDocument();
    expect(screen.getByLabelText('Hide Technical Details')).toBeInTheDocument();

    fireEvent.click(detailsBtn);
    expect(screen.queryByText(/ERR_TEST/)).not.toBeInTheDocument();
  });

  it('shows dynamic timestamp in technical details', () => {
    setup({ error: 'ERR_TEST' });
    fireEvent.click(screen.getByLabelText('View Technical Details'));
    expect(screen.getByText(/Timestamp:/)).toBeInTheDocument();
    expect(screen.getByText(/Endpoint:/)).toBeInTheDocument();
  });
});
