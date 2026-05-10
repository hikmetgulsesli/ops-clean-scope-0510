// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Details
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useEffect, useMemo } from "react";
import { useAppContext } from "../contexts/AppContext";

interface RecordDetailsProps {}

export function RecordDetails(props: RecordDetailsProps) {
  const { records, selectedRecordId, navigate, selectRecord, deleteRecord, updateRecord } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState('');
  const [editNotes, setEditNotes] = useState('');

  const record = useMemo(() => {
    return records.find((r) => r.id === selectedRecordId) || null;
  }, [records, selectedRecordId]);

  useEffect(() => {
    if (!record) {
      selectRecord(null);
      navigate('dashboard');
    }
  }, [record, navigate, selectRecord]);

  useEffect(() => {
    if (record) {
      setEditDescription(record.description || '');
      setEditNotes(record.notes || '');
    }
  }, [record, isEditing]);

  const handleBack = () => {
    selectRecord(null);
    navigate('dashboard');
  };

  const handleDelete = () => {
    if (record && window.confirm('Are you sure you want to delete this record?')) {
      deleteRecord(record.id);
    }
  };

  const handleEdit = () => {
    if (record) {
      setEditDescription(record.description || '');
      setEditNotes(record.notes || '');
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    if (record) {
      updateRecord(record.id, {
        description: editDescription,
        notes: editNotes,
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    if (record) {
      setEditDescription(record.description || '');
      setEditNotes(record.notes || '');
    }
    setIsEditing(false);
  };

  const handleExport = () => {
    if (record) {
      const blob = new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${record.id}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  if (!record) return null;

  const statusColor =
    record.status === 'active'
      ? 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20'
      : record.status === 'pending'
      ? 'bg-tertiary-container/20 text-tertiary border-tertiary/20'
      : record.status === 'completed'
      ? 'bg-outline-variant/30 text-on-surface-variant border-outline-variant/50'
      : 'bg-error-container/20 text-error border-error/20';

  const auditLog = [
    { icon: 'check_circle', color: 'text-primary', text: `Status updated to '${record.status.charAt(0).toUpperCase() + record.status.slice(1)}'`, by: 'System Automated Process', time: record.lastUpdated },
    ...(record.notes
      ? [{ icon: 'edit_note', color: 'text-secondary', text: 'Execution Summary Notes modified', by: record.assignedTo || 'System', time: record.lastUpdated }]
      : []),
    ...(record.assignedTo
      ? [{ icon: 'person_add', color: 'text-secondary', text: `Assigned to ${record.assignedTo}`, by: 'Sarah Jenkins', time: record.createdAt || record.lastUpdated }]
      : []),
  ];

  return (
    <>
      {/* Nav Shell Suppressed due to Detail View context -> Task-Focused sub-page with implicit back action */}
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* Contextual Header for Detail View */}
      <header className="bg-surface-container dark:bg-surface-container border-b border-outline-variant dark:border-outline-variant flex justify-between items-center h-14 w-full px-gutter z-40">
      <div className="flex items-center gap-md">
      <button className="flex items-center gap-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer select-none" onClick={handleBack}>
      <span className="material-symbols-outlined" data-icon="arrow_back" data-weight="regular">arrow_back</span>
      <span className="text-label-md font-label-md">Back to Dashboard</span>
      </button>
      <div className="h-4 w-px bg-outline-variant"></div>
      <div className="text-headline-sm font-headline-sm text-primary dark:text-primary">
                          Record ID: {record.id}
                      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="flex items-center gap-sm px-md h-9 border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-bright hover:border-primary transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none" onClick={handleExport}>
      <span className="material-symbols-outlined text-[18px]" data-icon="download" data-weight="regular">download</span>
      <span className="text-label-md font-label-md">Export</span>
      </button>
      <button className="flex items-center gap-sm px-md h-9 bg-primary-container text-on-primary-container rounded-DEFAULT hover:opacity-90 transition-opacity focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface focus:outline-none" aria-label="Edit record" onClick={handleEdit}>
      <span className="material-symbols-outlined text-[18px]" data-icon="edit" data-weight="regular">edit</span>
      <span className="text-label-md font-label-md">Edit Record</span>
      </button>
      <button className="flex items-center gap-sm px-md h-9 border border-error text-error rounded-DEFAULT hover:bg-error-container hover:text-on-error-container transition-colors focus:ring-2 focus:ring-error focus:outline-none" aria-label="Delete record" onClick={handleDelete}>
      <span className="material-symbols-outlined text-[18px]" data-icon="delete" data-weight="regular">delete</span>
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
      <span className={`flex items-center justify-center h-8 px-3 rounded-full ${statusColor}`}>
      <span className={`w-2 h-2 rounded-full mr-2 ${record.status === 'active' ? 'bg-[#10b981]' : record.status === 'pending' ? 'bg-tertiary' : record.status === 'completed' ? 'bg-on-surface-variant' : 'bg-error'}`}></span>
      <span className="text-label-md font-label-md">{record.status.charAt(0).toUpperCase() + record.status.slice(1)}</span>
      </span>
      </div>
      </div>
      {/* Assigned To */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col justify-between h-32">
      <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Assigned Owner</span>
      <div className="flex items-center gap-md">
      <img alt="Avatar" className="w-10 h-10 rounded-full border border-outline-variant" data-alt="A professional headshot of a person with short hair, wearing a dark collared shirt against a blurred neutral background. Soft, even lighting highlights the subject's face. The mood is corporate, approachable, and modern. The overall aesthetic fits a high-end enterprise software application interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIdptm_2RtlaR5QwPGZyrtxDAtNDY8lUFb4iRkkq2hp3LdVgLQ6Kc7wK9BodxAXp9_jB0JHtqRwfIXgMaLTE4dBlX9z-HGuvZ1zBfiw3fBaePdUQYtQfL7Cvif05SXD2N-nh5EikYcBA6lfv6Fj5ZnJCk5DDHKfMXcs8ywD6w38Ck2fehb3ZiYZ12vsE5Ks_3X3GyUcWzK7pngWRLhK3nT5eJ2-N01PlEMGiwGCwmZcipMxttfLQAE1D09dJ9T94DmK20Esy42_eY" />
      <div>
      <div className="text-body-md font-headline-sm text-on-surface">{record.assignedTo || 'Unassigned'}</div>
      <div className="text-body-sm font-body-sm text-on-surface-variant">{record.assignedRole || 'Operations'}</div>
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
      <span className="material-symbols-outlined text-[16px] text-outline" data-icon="calendar_today">calendar_today</span>
                                          {record.createdAt || record.lastUpdated}
                                      </div>
      </div>
      <div>
      <div className="text-label-sm font-label-sm text-on-surface-variant mb-1">Last Updated</div>
      <div className="text-body-md font-body-md text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-outline" data-icon="update">update</span>
                                          {record.lastUpdated}
                                      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Detailed Fields Section */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-lg">
      <h2 className="text-headline-md font-headline-md text-on-surface mb-lg pb-sm border-b border-outline-variant">Payload Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-lg gap-x-xl">
      {/* Field Group 1 */}
      <div className="space-y-sm">
      <label className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">Client Organization</label>
      <div className="text-body-lg font-body-lg text-on-surface bg-surface-dim p-sm rounded border border-surface-variant">
                                      {record.clientOrg || 'N/A'}
                                  </div>
      </div>
      {/* Field Group 2 */}
      <div className="space-y-sm">
      <label className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">Project Category</label>
      <div className="text-body-lg font-body-lg text-on-surface bg-surface-dim p-sm rounded border border-surface-variant">
                                      {record.projectCategory || 'General'}
                                  </div>
      </div>
      {/* Field Group 3 */}
      <div className="space-y-sm">
      <label className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">Primary Region</label>
      <div className="text-body-lg font-body-lg text-on-surface bg-surface-dim p-sm rounded border border-surface-variant flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px] text-outline" data-icon="public">public</span>
                                      {record.region || 'Global'}
                                  </div>
      </div>
      {/* Field Group 4 */}
      <div className="space-y-sm">
      <label className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">Priority Level</label>
      <div className="text-body-lg font-body-lg text-on-surface bg-surface-dim p-sm rounded border border-surface-variant">
                                      {record.priority.charAt(0).toUpperCase() + record.priority.slice(1)} {record.priority === 'critical' ? '(Tier 0)' : record.priority === 'high' ? '(Tier 1)' : record.priority === 'medium' ? '(Tier 2)' : '(Tier 3)'}
                                  </div>
      </div>
      {/* Full Width Description */}
      <div className="space-y-sm md:col-span-2">
      <label className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">Execution Summary Notes</label>
      {isEditing ? (
        <div className="flex flex-col gap-sm">
          <textarea
            className="text-body-md font-body-md text-on-surface bg-surface-dim p-md rounded border border-surface-variant min-h-[120px] resize-y focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Add description..."
            rows={4}
          />
          <textarea
            className="text-body-md font-body-md text-on-surface bg-surface-dim p-md rounded border border-surface-variant min-h-[80px] resize-y focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            value={editNotes}
            onChange={(e) => setEditNotes(e.target.value)}
            placeholder="Add internal notes..."
            rows={2}
          />
          <div className="flex gap-sm">
            <button className="px-md h-9 bg-primary-container text-on-primary-container rounded-DEFAULT hover:opacity-90 transition-opacity text-label-md font-label-md" onClick={handleSave}>Save Changes</button>
            <button className="px-md h-9 border border-outline-variant text-on-surface rounded-DEFAULT hover:bg-surface-bright transition-colors text-label-md font-label-md" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="space-y-sm">
          <div className="text-body-md font-body-md text-on-surface bg-surface-dim p-md rounded border border-surface-variant min-h-[120px]">
            {record.description || 'No description provided.'}
          </div>
          {record.notes && (
            <div className="text-body-md font-body-md text-on-surface bg-surface-dim p-md rounded border border-surface-variant min-h-[80px]">
              {record.notes}
            </div>
          )}
        </div>
      )}
      </div>
      </div>
      </div>
      {/* Audit Log / Secondary Data */}
      <div className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden">
      <div className="p-md border-b border-outline-variant bg-surface-container-high">
      <h3 className="text-headline-sm font-headline-sm text-on-surface">Recent System Audit</h3>
      </div>
      <div className="divide-y divide-outline-variant">
      {auditLog.map((log, idx) => (
        <div key={idx} className="p-md flex items-start gap-md hover:bg-surface-variant transition-colors">
        <div className={`mt-1 ${log.color}`}>
        <span className="material-symbols-outlined text-[20px]" data-icon={log.icon}>{log.icon}</span>
        </div>
        <div>
        <div className="text-body-md font-body-md text-on-surface">{log.text}</div>
        <div className="text-label-sm font-label-sm text-on-surface-variant mt-1">by {log.by} — {log.time}</div>
        </div>
        </div>
      ))}
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
