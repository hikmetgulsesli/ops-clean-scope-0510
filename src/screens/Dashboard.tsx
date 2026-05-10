// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
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
      <button className="w-full h-touch-target bg-primary-container text-on-primary-container rounded-DEFAULT flex items-center justify-center gap-sm mb-md hover:bg-inverse-primary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-low">
      <span className="material-symbols-outlined text-[18px]">add</span>
      <span className="text-label-md font-label-md">New Entry</span>
      </button>
      <div className="flex flex-col gap-xs flex-grow">
      {/* Active Nav Item */}
      <a className="bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container rounded-lg flex items-center gap-sm px-sm py-sm cursor-pointer select-none" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
      <span className="text-label-md font-label-md">Dashboard</span>
      </a>
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 rounded-lg flex items-center gap-sm px-sm py-sm cursor-pointer select-none" href="#">
      <span className="material-symbols-outlined">analytics</span>
      <span className="text-label-md font-label-md">Insights</span>
      </a>
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 rounded-lg flex items-center gap-sm px-sm py-sm cursor-pointer select-none" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="text-label-md font-label-md">Settings</span>
      </a>
      </div>
      <div className="mt-auto flex flex-col gap-xs pt-md border-t border-outline-variant">
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 rounded-lg flex items-center gap-sm px-sm py-sm cursor-pointer select-none" href="#">
      <span className="material-symbols-outlined">contact_support</span>
      <span className="text-label-md font-label-md">Support</span>
      </a>
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 rounded-lg flex items-center gap-sm px-sm py-sm cursor-pointer select-none" href="#">
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
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-bright dark:hover:bg-surface-bright transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-bright dark:hover:bg-surface-bright transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <div className="w-8 h-8 rounded-full bg-secondary-container overflow-hidden shrink-0 ml-xs border border-outline-variant cursor-pointer">
      <img alt="User Profile" className="w-full h-full object-cover" data-alt="A close up, professional headshot of a person with short hair, wearing a dark collared shirt. They have a subtle smile and are looking directly at the camera. The background is a slightly blurred, neutral grey, ensuring the subject stands out. The lighting is soft and even, highlighting their features clearly. The image conveys a sense of approachability and professionalism, typical of a corporate avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkul4gK27iuLBM-JAImix-OwBVv5T5cKB1-ZqVrfI4lmQ-w4IyPDj84l-8JmleyMgGlKXQUszZFoSepzkZvQydgvBB_lodHfU0E2bFReX5uQ_XtXRMYVOU_YajS6oNp2zB-lMaKaxi1kI4qH6qVIfZkNhgdz-RKPf2OptC8RlriMd5tvcScUppHtdSVVh82K0LFOf-ZNA_5ZEhTbSElwAfDRt1TNb8PkSQkTwWQ93Fp7sgUCxTkKPDlJM3axX1c-Y0GkH3lwdOyEQ" />
      </div>
      </div>
      </header>
      {/* Web Top Header Area (Replacing TopAppBar for Web as per instructions to use full nav cluster in TopAppBar, but since SideNav is active, we just need the search/profile part here) */}
      <header className="hidden md:flex bg-surface-container dark:bg-surface-container docked full-width top-0 z-40 border-b border-outline-variant dark:border-outline-variant flat no shadows justify-between items-center h-14 w-full px-gutter shrink-0">
      <div className="flex-1 max-w-md relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
      <input className="w-full h-9 bg-surface border border-outline-variant rounded-DEFAULT pl-10 pr-3 text-body-sm font-body-sm text-on-surface placeholder-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="Search operations..." type="text" />
      </div>
      <div className="flex items-center gap-sm ml-auto">
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-bright dark:hover:bg-surface-bright transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-bright dark:hover:bg-surface-bright transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <div className="w-8 h-8 rounded-full bg-secondary-container overflow-hidden shrink-0 ml-xs border border-outline-variant cursor-pointer hover:border-primary transition-colors">
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
      <button className="h-9 px-md border border-outline-variant bg-surface-container rounded-DEFAULT text-label-md font-label-md text-on-surface hover:bg-surface-bright transition-colors flex items-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">download</span>
                              Export
                          </button>
      <button className="h-9 px-md bg-primary-container rounded-DEFAULT text-label-md font-label-md text-on-primary-container hover:bg-inverse-primary transition-colors flex items-center gap-xs">
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
      <div className="text-headline-lg font-headline-lg text-on-surface">1,248</div>
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
      <div className="text-headline-lg font-headline-lg text-on-surface">86</div>
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
      <input className="w-full h-9 bg-surface border border-outline-variant rounded-DEFAULT pl-10 pr-3 text-body-sm font-body-sm text-on-surface placeholder-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="Filter records by ID, Name, or tag..." type="text" />
      </div>
      <div className="flex items-center gap-sm w-full md:w-auto">
      <select className="h-9 bg-surface border border-outline-variant rounded-DEFAULT text-body-sm font-body-sm text-on-surface px-3 py-0 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none w-full md:w-auto">
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
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-lowest border-b border-outline-variant">
      <th className="p-md text-label-md font-label-md text-on-surface-variant uppercase tracking-wider w-12 text-center">
      <input className="rounded-sm bg-surface border-outline-variant text-primary focus:ring-primary" type="checkbox" />
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
      <tr className="hover:bg-surface-variant transition-colors group">
      <td className="p-md text-center">
      <input className="rounded-sm bg-surface border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </td>
      <td className="p-md text-primary font-mono text-sm">OP-7829</td>
      <td className="p-md font-medium text-on-surface">Alpha Server Migration</td>
      <td className="p-md text-on-surface-variant">Infrastructure</td>
      <td className="p-md">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">Active</span>
      </td>
      <td className="p-md text-right text-on-surface-variant tabular-nums">10 mins ago</td>
      <td className="p-md text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
      <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
      </td>
      </tr>
      <tr className="hover:bg-surface-variant transition-colors group">
      <td className="p-md text-center">
      <input className="rounded-sm bg-surface border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </td>
      <td className="p-md text-primary font-mono text-sm">OP-7828</td>
      <td className="p-md font-medium text-on-surface">Q3 Financial Data Sync</td>
      <td className="p-md text-on-surface-variant">Data Pipeline</td>
      <td className="p-md">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-tertiary-container/20 text-tertiary border border-tertiary/20">Pending</span>
      </td>
      <td className="p-md text-right text-on-surface-variant tabular-nums">2 hrs ago</td>
      <td className="p-md text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
      <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
      </td>
      </tr>
      <tr className="hover:bg-surface-variant transition-colors group">
      <td className="p-md text-center">
      <input className="rounded-sm bg-surface border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </td>
      <td className="p-md text-primary font-mono text-sm">OP-7825</td>
      <td className="p-md font-medium text-on-surface">Security Patch Deployment</td>
      <td className="p-md text-on-surface-variant">Maintenance</td>
      <td className="p-md">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-outline-variant/30 text-on-surface-variant border border-outline-variant/50">Completed</span>
      </td>
      <td className="p-md text-right text-on-surface-variant tabular-nums">Yesterday</td>
      <td className="p-md text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
      <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
      </td>
      </tr>
      <tr className="hover:bg-surface-variant transition-colors group">
      <td className="p-md text-center">
      <input className="rounded-sm bg-surface border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </td>
      <td className="p-md text-primary font-mono text-sm">OP-7822</td>
      <td className="p-md font-medium text-on-surface">User Authentication API Update</td>
      <td className="p-md text-on-surface-variant">Development</td>
      <td className="p-md">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-error-container/20 text-error border border-error/20">Failed</span>
      </td>
      <td className="p-md text-right text-on-surface-variant tabular-nums">Yesterday</td>
      <td className="p-md text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
      <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
      </td>
      </tr>
      <tr className="hover:bg-surface-variant transition-colors group">
      <td className="p-md text-center">
      <input className="rounded-sm bg-surface border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </td>
      <td className="p-md text-primary font-mono text-sm">OP-7819</td>
      <td className="p-md font-medium text-on-surface">Legacy Database Cleanup</td>
      <td className="p-md text-on-surface-variant">Infrastructure</td>
      <td className="p-md">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">Active</span>
      </td>
      <td className="p-md text-right text-on-surface-variant tabular-nums">2 days ago</td>
      <td className="p-md text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
      <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Pagination */}
      <div className="p-sm border-t border-outline-variant bg-surface-container-high flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
      <span className="pl-sm">Showing 1-5 of 1,248</span>
      <div className="flex items-center gap-xs">
      <button className="w-8 h-8 rounded hover:bg-surface-variant flex items-center justify-center cursor-not-allowed opacity-50">
      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
      </button>
      <button className="w-8 h-8 rounded bg-secondary-container text-on-secondary-container flex items-center justify-center">1</button>
      <button className="w-8 h-8 rounded hover:bg-surface-variant flex items-center justify-center">2</button>
      <button className="w-8 h-8 rounded hover:bg-surface-variant flex items-center justify-center">3</button>
      <span className="px-1">...</span>
      <button className="w-8 h-8 rounded hover:bg-surface-variant flex items-center justify-center">
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
