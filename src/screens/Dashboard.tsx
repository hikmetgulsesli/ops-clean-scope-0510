// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useMemo, useCallback } from "react";
import { useAppContext } from "../contexts/AppContext";

interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  const {
    records,
    navigate,
    selectRecord,
    setSearchQuery,
    setFilterStatus,
    searchQuery,
    filterStatus,
  } = useAppContext();

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredRecords = useMemo(() => {
    let result = records;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.id.toLowerCase().includes(q) ||
          r.entityName.toLowerCase().includes(q) ||
          r.type.toLowerCase().includes(q)
      );
    }
    if (filterStatus) {
      result = result.filter((r) => r.status === filterStatus);
    }
    return result;
  }, [records, searchQuery, filterStatus]);

  const paginatedRecords = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredRecords.slice(start, start + pageSize);
  }, [filteredRecords, currentPage]);

  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / pageSize));

  const activeCount = records.filter((r) => r.status === 'active').length;
  const pendingCount = records.filter((r) => r.status === 'pending').length;

  const toggleRow = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleAll = useCallback(() => {
    const currentIds = paginatedRecords.map((r) => r.id);
    const allSelected = currentIds.every((id) => selectedIds.has(id));
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allSelected) {
        currentIds.forEach((id) => next.delete(id));
      } else {
        currentIds.forEach((id) => next.add(id));
      }
      return next;
    });
  }, [paginatedRecords, selectedIds]);

  const handleExport = useCallback(() => {
    const data = selectedIds.size > 0
      ? records.filter((r) => selectedIds.has(r.id))
      : filteredRecords;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'records-export.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [records, filteredRecords, selectedIds]);

  const startIdx = filteredRecords.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endIdx = Math.min(currentPage * pageSize, filteredRecords.length);

  return (
    <>
      {/* SideNavBar */}
      <nav className="docked h-screen w-64 left-0 top-0 border-r border-outline-variant dark:border-outline-variant flat no shadows flex flex-col p-md gap-base bg-surface-container-low dark:bg-surface-container-low hidden md:flex shrink-0 z-50">
      <div className="mb-lg">
      <div className="flex items-center gap-sm mb-xs">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-primary" style={{fontVariationSettings: "'FILL' 1"}}>dataset</span>
      </div>
      <div>
      <h1 className="text-headline-sm font-headline-sm font-black text-on-surface">Productivity Ops</h1>
      <p className="text-label-sm font-label-sm text-on-surface-variant">Enterprise Console</p>
      </div>
      </div>
      </div>
      <button className="w-full h-touch-target bg-primary-container text-on-primary-container rounded-DEFAULT flex items-center justify-center gap-sm mb-md hover:bg-inverse-primary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-low" onClick={() => { selectRecord(null); navigate('create-record'); }}>
      <span className="material-symbols-outlined text-[18px]">add</span>
      <span className="text-label-md font-label-md">New Entry</span>
      </button>
      <div className="flex flex-col gap-xs flex-grow">
      {/* Active Nav Item */}
      <a className="bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container rounded-lg flex items-center gap-sm px-sm py-sm cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('dashboard'); }}>
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
      <span className="text-label-md font-label-md">Dashboard</span>
      </a>
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 rounded-lg flex items-center gap-sm px-sm py-sm cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('insights'); }}>
      <span className="material-symbols-outlined">analytics</span>
      <span className="text-label-md font-label-md">Insights</span>
      </a>
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 rounded-lg flex items-center gap-sm px-sm py-sm cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('settings'); }}>
      <span className="material-symbols-outlined">settings</span>
      <span className="text-label-md font-label-md">Settings</span>
      </a>
      </div>
      <div className="mt-auto flex flex-col gap-xs pt-md border-t border-outline-variant">
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 rounded-lg flex items-center gap-sm px-sm py-sm cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('settings'); }}>
      <span className="material-symbols-outlined">contact_support</span>
      <span className="text-label-md font-label-md">Support</span>
      </a>
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 rounded-lg flex items-center gap-sm px-sm py-sm cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('dashboard'); }}>
      <span className="material-symbols-outlined">logout</span>
      <span className="text-label-md font-label-md">Sign Out</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
      {/* TopAppBar */}
      <header className="bg-surface-container dark:bg-surface-container docked full-width top-0 z-40 border-b border-outline-variant dark:border-outline-variant flat no shadows flex justify-between items-center h-14 w-full px-gutter ml-auto shrink-0 md:hidden">
      {/* Mobile Menu Icon (Not in JSON but needed for responsive) */}
      <button className="p-sm text-on-surface-variant hover:bg-surface-bright dark:hover:bg-surface-bright transition-colors duration-200 cursor-pointer active:opacity-80 rounded-full md:hidden">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="text-headline-md font-headline-md font-bold text-primary dark:text-primary mr-auto ml-sm">
                      Productivity Ops
                  </div>
      <div className="flex items-center gap-sm">
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-bright dark:hover:bg-surface-bright transition-colors duration-200 cursor-pointer active:opacity-80" aria-label="Notifications" onClick={() => navigate('profile')}>
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-bright dark:hover:bg-surface-bright transition-colors duration-200 cursor-pointer active:opacity-80" aria-label="Help" onClick={() => navigate('settings')}>
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <div className="w-8 h-8 rounded-full bg-secondary-container overflow-hidden shrink-0 ml-xs border border-outline-variant cursor-pointer" aria-label="User Profile" role="button" tabIndex={0} onClick={() => navigate('profile')} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate('profile'); } }}>
      <img alt="User Profile" className="w-full h-full object-cover" data-alt="A close up, professional headshot of a person with short hair, wearing a dark collared shirt. They have a subtle smile and are looking directly at the camera. The background is a slightly blurred, neutral grey, ensuring the subject stands out. The lighting is soft and even, highlighting their features clearly. The image conveys a sense of approachability and professionalism, typical of a corporate avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkul4gK27iuLBM-JAImix-OwBVv5T5cKB1-ZqVrfI4lmQ-w4IyPDj84l-8JmleyMgGlKXQUszZFoSepzkZvQydgvBB_lodHfU0E2bFReX5uQ_XtXRMYVOU_YajS6oNp2zB-lMaKaxi1kI4qH6qVIfZkNhgdz-RKPf2OptC8RlriMd5tvcScUppHtdSVVh82K0LFOf-ZNA_5ZEhTbSElwAfDRt1TNb8PkSQkTwWQ93Fp7sgUCxTkKPDlJM3axX1c-Y0GkH3lwdOyEQ" />
      </div>
      </div>
      </header>
      {/* Web Top Header Area (Replacing TopAppBar for Web as per instructions to use full nav cluster in TopAppBar, but since SideNav is active, we just need the search/profile part here) */}
      <header className="hidden md:flex bg-surface-container dark:bg-surface-container docked full-width top-0 z-40 border-b border-outline-variant dark:border-outline-variant flat no shadows justify-between items-center h-14 w-full px-gutter shrink-0">
      <div className="flex-1 max-w-md relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
      <input className="w-full h-9 bg-surface border border-outline-variant rounded-DEFAULT pl-10 pr-3 text-body-sm font-body-sm text-on-surface placeholder-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="Search operations..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <div className="flex items-center gap-sm ml-auto">
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-bright dark:hover:bg-surface-bright transition-colors duration-200 cursor-pointer active:opacity-80" aria-label="Notifications" onClick={() => navigate('profile')}>
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-bright dark:hover:bg-surface-bright transition-colors duration-200 cursor-pointer active:opacity-80" aria-label="Help" onClick={() => navigate('settings')}>
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <div className="w-8 h-8 rounded-full bg-secondary-container overflow-hidden shrink-0 ml-xs border border-outline-variant cursor-pointer hover:border-primary transition-colors" aria-label="User Profile" role="button" tabIndex={0} onClick={() => navigate('profile')} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate('profile'); } }}>
      <img alt="User Profile" className="w-full h-full object-cover" data-alt="A highly detailed, professional headshot of a business executive in a dark environment. The lighting is low-key, with a subtle rim light defining the subject against a dark grey background. The executive is wearing a dark, tailored suit. The mood is serious, focused, and professional, aligning with a high-end corporate identity. The overall aesthetic is dark mode, with deep blacks and cool tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbLhHyaH3wWNBKJ4JkBmgUY8qXNuU0pDmL0FnpQMB3hW7rv-tP_WQo9bwPHYmdtIy7vPYHF8xb2JCCGI9Gcs69u0WwJt5Ha2YSZty0uGaPB7emS5vXDJ86Cj3TQom4udg3kckTs-_d2ElV4HybD5HTSFBcxhbuh5syg5kkckP4H1ZfNWh8KHBE8MyS2iraHLR-hTX02r7aoPW6eivT8mVmhAgOsBHrY7AHnlXYOcQJd82VAdp9FGEdk0FF6ZmeePbTBme6dEh2BjI" />
      </div>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 overflow-auto p-margin bg-surface">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-lg">
      <div>
      <h2 className="text-headline-lg font-headline-lg text-on-surface">Overview Dashboard</h2>
      <p className="text-body-md font-body-md text-on-surface-variant mt-xs">Real-time metrics and active operational records.</p>
      </div>
      <div className="flex items-center gap-sm">
      <button className="h-9 px-md border border-outline-variant bg-surface-container rounded-DEFAULT text-label-md font-label-md text-on-surface hover:bg-surface-bright transition-colors flex items-center gap-xs" onClick={handleExport}>
      <span className="material-symbols-outlined text-[16px]">download</span>
                              Export
                          </button>
      <button className="h-9 px-md bg-primary-container rounded-DEFAULT text-label-md font-label-md text-on-primary-container hover:bg-inverse-primary transition-colors flex items-center gap-xs" onClick={() => { selectRecord(null); navigate('create-record'); }}>
      <span className="material-symbols-outlined text-[16px]">add</span>
                              New Task
                          </button>
      </div>
      </div>
      {/* Bento Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mb-lg">
      {/* Stat Card 1 */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col justify-between">
      <div className="flex items-start justify-between mb-sm">
      <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Active Operations</span>
      <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary text-[18px]">bolt</span>
      </div>
      </div>
      <div>
      <div className="text-headline-lg font-headline-lg text-on-surface">{activeCount}</div>
      <div className="text-body-sm font-body-sm text-primary flex items-center gap-xs mt-xs">
      <span className="material-symbols-outlined text-[14px]">trending_up</span>
                                  +12% from last week
                              </div>
      </div>
      </div>
      {/* Stat Card 2 */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col justify-between">
      <div className="flex items-start justify-between mb-sm">
      <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Pending Review</span>
      <div className="w-8 h-8 rounded-full bg-tertiary-container/20 flex items-center justify-center">
      <span className="material-symbols-outlined text-tertiary text-[18px]">pending_actions</span>
      </div>
      </div>
      <div>
      <div className="text-headline-lg font-headline-lg text-on-surface">{pendingCount}</div>
      <div className="text-body-sm font-body-sm text-tertiary flex items-center gap-xs mt-xs">
      <span className="material-symbols-outlined text-[14px]">warning</span>
                                  Needs attention
                              </div>
      </div>
      </div>
      {/* Stat Card 3 */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col justify-between">
      <div className="flex items-start justify-between mb-sm">
      <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">System Health</span>
      <div className="w-8 h-8 rounded-full bg-[#10b981]/20 flex items-center justify-center">
      <span className="material-symbols-outlined text-[#10b981] text-[18px]">health_and_safety</span>
      </div>
      </div>
      <div>
      <div className="text-headline-lg font-headline-lg text-on-surface">99.9%</div>
      <div className="text-body-sm font-body-sm text-on-surface-variant mt-xs">
                                  All systems operational
                              </div>
      </div>
      </div>
      {/* Stat Card 4 */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col justify-between">
      <div className="flex items-start justify-between mb-sm">
      <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Processing Time</span>
      <div className="w-8 h-8 rounded-full bg-secondary-container/50 flex items-center justify-center">
      <span className="material-symbols-outlined text-secondary text-[18px]">timer</span>
      </div>
      </div>
      <div>
      <div className="text-headline-lg font-headline-lg text-on-surface">1.2s</div>
      <div className="text-body-sm font-body-sm text-primary flex items-center gap-xs mt-xs">
      <span className="material-symbols-outlined text-[14px]">trending_down</span>
                                  -0.3s improvement
                              </div>
      </div>
      </div>
      </div>
      {/* Data Table Section */}
      <div className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      {/* Filter Bar */}
      <div className="p-md border-b border-outline-variant flex flex-col md:flex-row gap-sm items-center justify-between bg-surface-container-high">
      <div className="w-full md:w-auto flex-1 max-w-md relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">filter_list</span>
      <input className="w-full h-9 bg-surface border border-outline-variant rounded-DEFAULT pl-10 pr-3 text-body-sm font-body-sm text-on-surface placeholder-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="Filter records by ID, Name, or tag..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <div className="flex items-center gap-sm w-full md:w-auto">
      <select className="h-9 bg-surface border border-outline-variant rounded-DEFAULT text-body-sm font-body-sm text-on-surface px-3 py-0 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none w-full md:w-auto" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
      <option value="">All Statuses</option>
      <option value="active">Active</option>
      <option value="pending">Pending</option>
      <option value="completed">Completed</option>
      </select>
      <div className="h-9 bg-surface border border-outline-variant rounded-DEFAULT flex items-center px-3 text-body-sm font-body-sm text-on-surface w-full md:w-auto cursor-pointer hover:border-primary transition-colors">
      <span className="material-symbols-outlined text-[16px] mr-xs text-on-surface-variant">calendar_today</span>
                                  Last 30 Days
                              </div>
      </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
      {paginatedRecords.length === 0 ? (
        <div className="p-lg text-center text-body-md font-body-md text-on-surface-variant">
          No records match your filters.
        </div>
      ) : (
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-lowest border-b border-outline-variant">
      <th className="p-md text-label-md font-label-md text-on-surface-variant uppercase tracking-wider w-12 text-center">
      <input className="rounded-sm bg-surface border-outline-variant text-primary focus:ring-primary" type="checkbox" checked={paginatedRecords.length > 0 && paginatedRecords.every((r) => selectedIds.has(r.id))} onChange={toggleAll} />
      </th>
      <th className="p-md text-label-md font-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Record ID</th>
      <th className="p-md text-label-md font-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Entity Name</th>
      <th className="p-md text-label-md font-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Type</th>
      <th className="p-md text-label-md font-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Status</th>
      <th className="p-md text-label-md font-label-md text-on-surface-variant uppercase tracking-wider font-semibold text-right">Last Updated</th>
      <th className="p-md w-12"></th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant text-body-md font-body-md">
      {paginatedRecords.map((record) => (
      <tr key={record.id} className="hover:bg-surface-variant transition-colors group" onClick={() => selectRecord(record.id)}>
      <td className="p-md text-center">
      <input className="rounded-sm bg-surface border-outline-variant text-primary focus:ring-primary" type="checkbox" checked={selectedIds.has(record.id)} onChange={(e) => { e.stopPropagation(); toggleRow(record.id); }} />
      </td>
      <td className="p-md text-primary font-mono text-sm">{record.id}</td>
      <td className="p-md font-medium text-on-surface">{record.entityName}</td>
      <td className="p-md text-on-surface-variant">{record.type}</td>
      <td className="p-md">
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase border ${
        record.status === 'active' ? 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20' :
        record.status === 'pending' ? 'bg-tertiary-container/20 text-tertiary border-tertiary/20' :
        record.status === 'completed' ? 'bg-outline-variant/30 text-on-surface-variant border-outline-variant/50' :
        'bg-error-container/20 text-error border-error/20'
      }`}>
        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
      </span>
      </td>
      <td className="p-md text-right text-on-surface-variant tabular-nums">{record.lastUpdated}</td>
      <td className="p-md text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" aria-label={`Actions for ${record.entityName}`} onClick={(e) => { e.stopPropagation(); selectRecord(record.id); }}>
      <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
      </td>
      </tr>
      ))}
      </tbody>
      </table>
      )}
      </div>
      {/* Pagination */}
      <div className="p-sm border-t border-outline-variant bg-surface-container-high flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
      <span className="pl-sm">Showing {startIdx}-{endIdx} of {filteredRecords.length}</span>
      <div className="flex items-center gap-xs">
      <button className="w-8 h-8 rounded hover:bg-surface-variant flex items-center justify-center cursor-not-allowed opacity-50" disabled={currentPage === 1} onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>
      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 5).map((page) => (
        <button key={page} className={`w-8 h-8 rounded flex items-center justify-center ${page === currentPage ? 'bg-secondary-container text-on-secondary-container' : 'hover:bg-surface-variant'}`} onClick={() => setCurrentPage(page)}>{page}</button>
      ))}
      {totalPages > 5 && <span className="px-1">...</span>}
      <button className="w-8 h-8 rounded hover:bg-surface-variant flex items-center justify-center" disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}>
      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
