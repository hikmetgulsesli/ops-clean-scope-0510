// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Details
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useEffect, useState } from 'react';
import { useAppContext } from '../contexts/AppContext';

interface RecordDetailsProps {}

export function RecordDetails(props: RecordDetailsProps) {
  const { records, selectedRecordId, navigate, selectRecord, deleteRecord, updateRecord } = useAppContext();
  const record = records.find((r) => r.id === selectedRecordId) || null;

  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState('');
  const [editNotes, setEditNotes] = useState('');

  useEffect(() => {
    if (!record) {
      navigate('dashboard');
    } else {
      setEditDescription(record.description);
      setEditNotes(record.notes || '');
      setIsEditing(false);
    }
  }, [record, navigate]);

  const handleBack = () => {
    selectRecord(null);
    navigate('dashboard');
  };

  const handleExport = () => {
    if (!record) return;
    const blob = new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${record.id}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDelete = () => {
    if (!record) return;
    if (window.confirm('Are you sure you want to delete this record?')) {
      deleteRecord(record.id);
    }
  };

  const handleEditToggle = () => {
    if (!record) return;
    if (isEditing) {
      // cancel editing
      setEditDescription(record.description);
      setEditNotes(record.notes || '');
    }
    setIsEditing((prev) => !prev);
  };

  const handleSaveInline = () => {
    if (!record) return;
    updateRecord(record.id, {
      description: editDescription.trim(),
      notes: editNotes.trim(),
    });
    setIsEditing(false);
  };

  if (!record) {
    return null;
  }

  const statusLabel = record.status.charAt(0).toUpperCase() + record.status.slice(1);
  const priorityLabel = record.priority.charAt(0).toUpperCase() + record.priority.slice(1);

  return (
    <>
      {/* Nav Shell Suppressed due to Detail View context -> Task-Focused sub-page with implicit back action */}
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Contextual Header for Detail View */}
        <header className="bg-surface-container dark:bg-surface-container border-b border-outline-variant dark:border-outline-variant flex justify-between items-center h-14 w-full px-gutter z-40">
          <div className="flex items-center gap-md">
            <button
              className="flex items-center gap-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer select-none"
              onClick={handleBack}
            >
              <span className="material-symbols-outlined" data-icon="arrow_back" data-weight="regular">
                arrow_back
              </span>
              <span className="text-label-md font-label-md">Back to Dashboard</span>
            </button>
            <div className="h-4 w-px bg-outline-variant"></div>
            <div className="text-headline-sm font-headline-sm text-primary dark:text-primary">
              Record ID: {record.id}
            </div>
          </div>
          <div className="flex items-center gap-md">
            <button
              aria-label="Export record"
              className="flex items-center gap-sm px-md h-9 border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-bright hover:border-primary transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none"
              onClick={handleExport}
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="download" data-weight="regular">
                download
              </span>
              <span className="text-label-md font-label-md">Export</span>
            </button>
            <button
              aria-label={isEditing ? 'Cancel editing' : 'Edit record'}
              className="flex items-center gap-sm px-md h-9 bg-primary-container text-on-primary-container rounded-DEFAULT hover:opacity-90 transition-opacity focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface focus:outline-none"
              onClick={handleEditToggle}
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="edit" data-weight="regular">
                {isEditing ? 'close' : 'edit'}
              </span>
              <span className="text-label-md font-label-md">{isEditing ? 'Cancel' : 'Edit Record'}</span>
            </button>
            <button
              aria-label="Delete record"
              className="flex items-center gap-sm px-md h-9 border border-error text-error rounded-DEFAULT hover:bg-error-container hover:text-on-error-container transition-colors focus:ring-2 focus:ring-error focus:outline-none"
              onClick={handleDelete}
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="delete" data-weight="regular">
                delete
              </span>
              <span className="text-label-md font-label-md">Delete</span>
            </button>
          </div>
        </header>
        {/* Scrollable Canvas */}
        <main className="flex-1 overflow-y-auto p-margin">
          <div className="max-w-5xl mx-auto space-y-lg">
            {/* Meta Summary Bento */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
              {/* Status Card */}
              <div className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col justify-between h-32">
                <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Current Status</span>
                <div className="flex items-center gap-sm">
                  <span className="flex items-center justify-center h-8 px-3 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
                    <span className="w-2 h-2 rounded-full bg-[#10b981] mr-2"></span>
                    <span className="text-label-md font-label-md">{statusLabel}</span>
                  </span>
                </div>
              </div>
              {/* Assigned To */}
              <div className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col justify-between h-32">
                <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Assigned Owner</span>
                <div className="flex items-center gap-md">
                  <img
                    alt="Avatar"
                    className="w-10 h-10 rounded-full border border-outline-variant"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIdptm_2RtlaR5QwPGZyrtxDAtNDY8lUFb4iRkkq2hp3LdVgLQ6Kc7wK9BodxAXp9_jB0JHtqRwfIXgMaLTE4dBlX9z-HGuvZ1zBfiw3fBaePdUQYtQfL7Cvif05SXD2N-nh5EikYcBA6lfv6Fj5ZnJCk5DDHKfMXcs8ywD6w38Ck2fehb3ZiYZ12vsE5Ks_3X3GyUcWzK7pngWRLhK3nT5eJ2-N01PlEMGiwGCwmZcipMxttfLQAE1D09dJ9T94DmK20Esy42_eY"
                  />
                  <div>
                    <div className="text-body-md font-headline-sm text-on-surface">
                      {record.assignedTo || 'Unassigned'}
                    </div>
                    <div className="text-body-sm font-body-sm text-on-surface-variant">
                      {record.assignedRole || 'Operations'}
                    </div>
                  </div>
                </div>
              </div>
              {/* Timestamps */}
              <div className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col justify-between h-32 md:col-span-2">
                <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Lifecycle Tracking</span>
                <div className="grid grid-cols-2 gap-md">
                  <div>
                    <div className="text-label-sm font-label-sm text-on-surface-variant mb-1">Created At</div>
                    <div className="text-body-md font-body-md text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-outline" data-icon="calendar_today">
                        calendar_today
                      </span>
                      {record.createdAt || record.lastUpdated}
                    </div>
                  </div>
                  <div>
                    <div className="text-label-sm font-label-sm text-on-surface-variant mb-1">Last Updated</div>
                    <div className="text-body-md font-body-md text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-outline" data-icon="update">
                        update
                      </span>
                      {record.lastUpdated}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Detailed Fields Section */}
            <div className="bg-surface-container border border-outline-variant rounded-lg p-lg">
              <div className="flex items-center justify-between mb-lg pb-sm border-b border-outline-variant">
                <h2 className="text-headline-md font-headline-md text-on-surface">Payload Details</h2>
                {isEditing && (
                  <button
                    className="flex items-center gap-sm px-md h-9 bg-primary-container text-on-primary-container rounded-DEFAULT hover:opacity-90 transition-opacity focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface focus:outline-none"
                    onClick={handleSaveInline}
                  >
                    <span className="material-symbols-outlined text-[18px]">save</span>
                    <span className="text-label-md font-label-md">Save Changes</span>
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-lg gap-x-xl">
                {/* Field Group 1 */}
                <div className="space-y-sm">
                  <label className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">
                    Client Organization
                  </label>
                  <div className="text-body-lg font-body-lg text-on-surface bg-surface-dim p-sm rounded border border-surface-variant">
                    {record.clientOrg || '—'}
                  </div>
                </div>
                {/* Field Group 2 */}
                <div className="space-y-sm">
                  <label className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">
                    Project Category
                  </label>
                  <div className="text-body-lg font-body-lg text-on-surface bg-surface-dim p-sm rounded border border-surface-variant">
                    {record.projectCategory || record.type}
                  </div>
                </div>
                {/* Field Group 3 */}
                <div className="space-y-sm">
                  <label className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">
                    Primary Region
                  </label>
                  <div className="text-body-lg font-body-lg text-on-surface bg-surface-dim p-sm rounded border border-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-outline" data-icon="public">
                      public
                    </span>
                    {record.region || 'Global'}
                  </div>
                </div>
                {/* Field Group 4 */}
                <div className="space-y-sm">
                  <label className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">
                    Priority Level
                  </label>
                  <div className="text-body-lg font-body-lg text-on-surface bg-surface-dim p-sm rounded border border-surface-variant">
                    {priorityLabel} {record.priority === 'critical' || record.priority === 'high' ? '(Tier 1)' : '(Tier 2)'}
                  </div>
                </div>
                {/* Full Width Description */}
                <div className="space-y-sm md:col-span-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">
                    Execution Summary Notes
                  </label>
                  {isEditing ? (
                    <textarea
                      className="w-full text-body-md font-body-md text-on-surface bg-surface-dim p-md rounded border border-surface-variant min-h-[120px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      onChange={(e) => setEditDescription(e.target.value)}
                      value={editDescription}
                    />
                  ) : (
                    <div className="text-body-md font-body-md text-on-surface bg-surface-dim p-md rounded border border-surface-variant min-h-[120px]">
                      {record.description || 'No description provided.'}
                    </div>
                  )}
                </div>
                {/* Full Width Notes (optional) */}
                {isEditing ? (
                  <div className="space-y-sm md:col-span-2">
                    <label className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">
                      Internal Notes
                    </label>
                    <textarea
                      className="w-full text-body-md font-body-md text-on-surface bg-surface-dim p-md rounded border border-surface-variant min-h-[80px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      onChange={(e) => setEditNotes(e.target.value)}
                      placeholder="Add internal notes..."
                      value={editNotes}
                    />
                  </div>
                ) : record.notes ? (
                  <div className="space-y-sm md:col-span-2">
                    <label className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">
                      Internal Notes
                    </label>
                    <div className="text-body-md font-body-md text-on-surface bg-surface-dim p-md rounded border border-surface-variant min-h-[80px]">
                      {record.notes}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            {/* Audit Log / Secondary Data */}
            <div className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden">
              <div className="p-md border-b border-outline-variant bg-surface-container-high">
                <h3 className="text-headline-sm font-headline-sm text-on-surface">Recent System Audit</h3>
              </div>
              <div className="divide-y divide-outline-variant">
                {/* Log Entry */}
                <div className="p-md flex items-start gap-md hover:bg-surface-variant transition-colors">
                  <div className="mt-1 text-primary">
                    <span className="material-symbols-outlined text-[20px]" data-icon="check_circle">
                      check_circle
                    </span>
                  </div>
                  <div>
                    <div className="text-body-md font-body-md text-on-surface">Status set to '{statusLabel}'</div>
                    <div className="text-label-sm font-label-sm text-on-surface-variant mt-1">
                      by System Automated Process — {record.lastUpdated}
                    </div>
                  </div>
                </div>
                {/* Log Entry */}
                <div className="p-md flex items-start gap-md hover:bg-surface-variant transition-colors">
                  <div className="mt-1 text-secondary">
                    <span className="material-symbols-outlined text-[20px]" data-icon="edit_note">
                      edit_note
                    </span>
                  </div>
                  <div>
                    <div className="text-body-md font-body-md text-on-surface">Execution Summary Notes modified</div>
                    <div className="text-label-sm font-label-sm text-on-surface-variant mt-1">
                      by {record.assignedTo || 'System'} — {record.lastUpdated}
                    </div>
                  </div>
                </div>
                {/* Log Entry */}
                <div className="p-md flex items-start gap-md hover:bg-surface-variant transition-colors">
                  <div className="mt-1 text-secondary">
                    <span className="material-symbols-outlined text-[20px]" data-icon="person_add">
                      person_add
                    </span>
                  </div>
                  <div>
                    <div className="text-body-md font-body-md text-on-surface">
                      {record.assignedTo ? `Assigned to ${record.assignedTo}` : 'Record created'}
                    </div>
                    <div className="text-label-sm font-label-sm text-on-surface-variant mt-1">
                      by {record.assignedTo || 'System Automated Process'} — {record.createdAt || record.lastUpdated}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
