import { AppProvider, useAppContext } from './contexts/AppContext';
import { Dashboard } from './screens/Dashboard';
import { InsightsMetrics } from './screens/InsightsMetrics';
import { SettingsPreferences } from './screens/SettingsPreferences';
import { RecordDetails } from './screens/RecordDetails';
import { CreateEditRecord } from './screens/CreateEditRecord';
import { NoRecordsFound } from './screens/NoRecordsFound';
import { SystemErrorState } from './screens/SystemErrorState';
import { UserProfilePanel } from './screens/UserProfilePanel';

function AppShell() {
  const { currentView, records, navigate, selectRecord, selectedRecordId } = useAppContext();

  // If no records and not on a specific sub-page, show no-records
  const effectiveView =
    records.length === 0 && currentView === 'dashboard'
      ? 'no-records'
      : currentView;

  const selectedRecord = records.find((r) => r.id === selectedRecordId) || null;

  return (
    <div className="min-h-screen bg-background text-on-surface flex">
      {effectiveView === 'dashboard' && <Dashboard />}
      {effectiveView === 'insights' && <InsightsMetrics />}
      {effectiveView === 'settings' && <SettingsPreferences />}
      {effectiveView === 'record-details' && selectedRecord && (
        <RecordDetails />
      )}
      {effectiveView === 'create-record' && <CreateEditRecord />}
      {effectiveView === 'no-records' && <NoRecordsFound />}
      {effectiveView === 'system-error' && <SystemErrorState />}
      {effectiveView === 'profile' && <UserProfilePanel />}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
