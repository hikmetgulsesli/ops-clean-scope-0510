// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Create / Edit Record
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useEffect, useMemo } from "react";
import { useAppContext } from "../contexts/AppContext";

interface CreateEditRecordProps {}

export function CreateEditRecord(props: CreateEditRecordProps) {
  const { selectedRecordId, records, navigate, selectRecord, addRecord, updateRecord } = useAppContext();
  const isEditMode = !!selectedRecordId;
  const existingRecord = useMemo(() => records.find((r) => r.id === selectedRecordId) || null, [records, selectedRecordId]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('active');
  const [priority, setPriority] = useState('medium');
  const [titleError, setTitleError] = useState(false);

  useEffect(() => {
    if (existingRecord) {
      setTitle(existingRecord.entityName);
      setDescription(existingRecord.description || '');
      setStatus(existingRecord.status);
      setPriority(existingRecord.priority);
      setTitleError(false);
    } else {
      setTitle('');
      setDescription('');
      setStatus('active');
      setPriority('medium');
      setTitleError(false);
    }
  }, [existingRecord, selectedRecordId]);

  const handleClose = () => {
    selectRecord(null);
    navigate('dashboard');
  };

  const handleSave = () => {
    if (!title.trim()) {
      setTitleError(true);
      return;
    }
    if (existingRecord) {
      updateRecord(existingRecord.id, {
        entityName: title.trim(),
        description: description.trim(),
        status,
        priority,
      });
    } else {
      addRecord({
        entityName: title.trim(),
        type: 'General',
        status,
        priority,
        description: description.trim(),
      });
    }
    selectRecord(null);
    navigate('dashboard');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (titleError && e.target.value.trim()) {
      setTitleError(false);
    }
  };

  return (
    <>
      {/* Canvas (Main Content) - Suppressed Navigation because it's a task-focused sub-page */}
      <main className="flex-1 flex flex-col items-center justify-center p-margin w-full max-w-4xl mx-auto h-screen">
      {/* Form Card Level 1 Surface */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-lg w-full max-w-2xl overflow-hidden flex flex-col shadow-none">
      {/* Header */}
      <div className="px-lg py-md border-b border-[#334155] flex justify-between items-center bg-[#1E293B]">
      <div>
      <h1 className="text-headline-md font-headline-md text-on-surface">{isEditMode ? 'Edit Record' : 'New Entry'}</h1>
      <p className="text-body-sm font-body-sm text-on-surface-variant mt-xs">{isEditMode ? 'Update operational record details.' : 'Create a new operational record.'}</p>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface h-touch-target w-touch-target flex items-center justify-center rounded-full hover:bg-[#334155] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#1E293B]" aria-label="Close" onClick={handleClose}>
      <span className="material-symbols-outlined" data-icon="close">close</span>
      </button>
      </div>
      {/* Form Content */}
      <form className="p-lg flex flex-col gap-lg bg-[#1E293B]" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
      {/* Title Field (Error State Example) */}
      <div className="flex flex-col gap-xs relative">
      <label className="text-label-md font-label-md text-on-surface" htmlFor="title">Title <span className="text-error">*</span></label>
      <input aria-describedby={titleError ? "title-error" : undefined} aria-invalid={titleError} className={`bg-[#1E293B] border ${titleError ? 'border-error' : 'border-[#334155]'} text-on-surface rounded-DEFAULT px-md py-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 h-[36px] md:h-[36px] h-touch-target transition-all text-body-md font-body-md`} id="title" name="title" placeholder="Enter record title" type="text" value={title} onChange={handleTitleChange} />
      {titleError && (
      <div className="flex items-center gap-xs text-error mt-xs" id="title-error">
      <span className="material-symbols-outlined text-[14px]" data-icon="error">error</span>
      <span className="text-label-sm font-label-sm">Title is required and must be unique.</span>
      </div>
      )}
      </div>
      {/* Description Field */}
      <div className="flex flex-col gap-xs">
      <label className="text-label-md font-label-md text-on-surface" htmlFor="description">Description</label>
      <textarea className="bg-[#1E293B] border border-[#334155] text-on-surface rounded-DEFAULT px-md py-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 transition-all text-body-md font-body-md resize-y min-h-[100px]" id="description" name="description" placeholder="Provide detailed context for this entry..." rows={4} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      {/* Status & Priority Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Status Field */}
      <div className="flex flex-col gap-xs">
      <label className="text-label-md font-label-md text-on-surface" htmlFor="status">Status</label>
      <div className="relative">
      <select className="bg-[#1E293B] border border-[#334155] text-on-surface rounded-DEFAULT px-md py-sm appearance-none w-full focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 h-[36px] md:h-[36px] h-touch-target transition-all text-body-md font-body-md pr-xl" id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Status">
      <option value="draft">Draft</option>
      <option value="active">Active</option>
      <option value="archived">Archived</option>
      </select>
      <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" data-icon="expand_more">expand_more</span>
      </div>
      </div>
      {/* Priority Field */}
      <div className="flex flex-col gap-xs">
      <label className="text-label-md font-label-md text-on-surface" htmlFor="priority">Priority</label>
      <div className="relative">
      <select className="bg-[#1E293B] border border-[#334155] text-on-surface rounded-DEFAULT px-md py-sm appearance-none w-full focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 h-[36px] md:h-[36px] h-touch-target transition-all text-body-md font-body-md pr-xl" id="priority" name="priority" value={priority} onChange={(e) => setPriority(e.target.value)} aria-label="Priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
      <option value="critical">Critical</option>
      </select>
      <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" data-icon="expand_more">expand_more</span>
      </div>
      </div>
      </div>
      </form>
      {/* Footer Actions Level 1 Surface */}
      <div className="px-lg py-md border-t border-[#334155] flex justify-end gap-md bg-[#1E293B]">
      <button className="h-[36px] md:h-[36px] h-touch-target px-md rounded-DEFAULT border border-[#334155] text-on-surface bg-transparent hover:bg-[#334155] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#1E293B] text-label-md font-label-md flex items-center justify-center" type="button" onClick={handleClose}>
                          Cancel
                      </button>
      <button className="h-[36px] md:h-[36px] h-touch-target px-md rounded-DEFAULT border-none text-white bg-[#2563EB] hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#1E293B] text-label-md font-label-md flex items-center justify-center" type="button" onClick={handleSave}>
                          {isEditMode ? 'Save Changes' : 'Save Entry'}
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
