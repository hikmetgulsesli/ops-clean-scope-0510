// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights & Metrics
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

interface InsightsMetricsProps {}

export function InsightsMetrics(props: InsightsMetricsProps) {
  const { navigate, setSearchQuery, records } = useAppContext();
  const total = records.length;
  const activeCount = records.filter((r) => r.status === 'active').length;
  const failedCount = records.filter((r) => r.status === 'failed').length;
  const errorRate = total > 0 ? ((failedCount / total) * 100).toFixed(2) + '%' : '0.00%';

  return (
    <>
      {/* SideNavBar (Desktop/Tablet) */}
      <nav className="hidden md:flex flex-col h-screen w-64 left-0 top-0 bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant dark:border-outline-variant p-md gap-base shrink-0 fixed">
      {/* Brand Header */}
      <div className="flex items-center gap-sm px-sm py-md mb-lg">
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-primary-container" style={{fontSize: "20px"}}>bolt</span>
      </div>
      <div className="flex flex-col">
      <span className="text-headline-sm font-headline-sm font-black text-on-surface">Productivity Ops</span>
      <span className="text-label-sm font-label-sm text-on-surface-variant">Enterprise Console</span>
      </div>
      </div>
      {/* Main Navigation */}
      <div className="flex flex-col gap-xs flex-grow">
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('dashboard'); }}>
      <span className="material-symbols-outlined text-on-surface-variant">dashboard</span>
      <span className="text-label-md font-label-md">Dashboard</span>
      </a>
      {/* Active Tab */}
      <a className="flex items-center gap-md px-md py-sm rounded-lg bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('insights'); }}>
      <span className="material-symbols-outlined text-on-secondary-container">analytics</span>
      <span className="text-label-md font-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('settings'); }}>
      <span className="material-symbols-outlined text-on-surface-variant">settings</span>
      <span className="text-label-md font-label-md">Settings</span>
      </a>
      </div>
      {/* CTA Button */}
      <button className="w-full bg-primary-container text-white text-label-md font-label-md h-9 rounded flex items-center justify-center gap-sm mt-auto mb-lg hover:bg-primary-container/90 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-container-low focus:ring-primary-container outline-none" onClick={() => navigate('create-record')}>
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>add</span>
                  New Entry
              </button>
      {/* Footer Navigation */}
      <div className="flex flex-col gap-xs mt-auto">
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('settings'); }}>
      <span className="material-symbols-outlined text-on-surface-variant">contact_support</span>
      <span className="text-label-md font-label-md">Support</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('dashboard'); }}>
      <span className="material-symbols-outlined text-on-surface-variant">logout</span>
      <span className="text-label-md font-label-md">Sign Out</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 min-w-0">
      {/* TopAppBar (Mobile) */}
      <header className="md:hidden flex justify-between items-center h-14 w-full px-gutter bg-surface-container border-b border-outline-variant z-40 sticky top-0">
      <div className="flex items-center gap-sm">
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-primary-container" style={{fontSize: "20px"}}>bolt</span>
      </div>
      <span className="text-headline-md font-headline-md font-bold text-primary">Productivity Ops</span>
      </div>
      <div className="flex items-center gap-sm">
      <button aria-label="Notifications" className="w-touch-target h-touch-target flex items-center justify-center text-on-surface-variant hover:bg-surface-bright transition-colors duration-200 rounded-full cursor-pointer active:opacity-80" onClick={() => navigate('profile')}>
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button aria-label="Help" className="w-touch-target h-touch-target flex items-center justify-center text-on-surface-variant hover:bg-surface-bright transition-colors duration-200 rounded-full cursor-pointer active:opacity-80" onClick={() => navigate('settings')}>
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      </div>
      </header>
      {/* Top Header Actions (Desktop) */}
      <header className="hidden md:flex justify-between items-center h-14 w-full px-margin ml-auto bg-background sticky top-0 z-30">
      <div className="text-headline-lg font-headline-lg text-on-surface">Insights Overview</div>
      <div className="flex items-center gap-md">
      {/* Search Input */}
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant" style={{fontSize: "18px"}}>search</span>
      <input className="bg-surface border border-outline-variant rounded pl-10 pr-4 py-1.5 text-body-sm font-body-sm text-on-surface placeholder-on-surface-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none w-64 transition-all" placeholder="Search metrics..." type="text" onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <button aria-label="Notifications" className="w-9 h-9 flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors rounded-full focus:ring-2 focus:ring-primary-container outline-none" onClick={() => navigate('profile')}>
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>notifications</span>
      </button>
      <img alt="User Profile" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A small, circular profile picture of a young professional man with short dark hair, smiling slightly, set against a blurred background. The image is used as a user avatar in a modern, dark-themed UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM86qgtlP-WWqqa0QRr96MlHyEDGWooVTbUAG6yQtg0kCVbfu3ZRMHwlE3qR7wsJLCs_UzMG8bGPNkak08C4VZnyeqQa3GBZvZl5sD7CeaQWm0-rF1OGz50em9Qpf881vzbqbEFF2rx4JEvf4IQNL_FG3pPb5fYTdkfBp1A6uMj-wm6hDBEQrLv90gyLShjRa9WbbrOLWgcU9HJUgIN-KX9Nl18BOazjEwaJdy43g1sGt-TbDVUZwZzmYwNoKbV66578YAKfVUHZY" />
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 p-margin flex flex-col gap-lg">
      {/* Mobile Page Title */}
      <div className="md:hidden mb-sm">
      <h1 className="text-headline-lg font-headline-lg text-on-surface">Insights Overview</h1>
      </div>
      {/* Bento Grid Layout for Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
      {/* Hero Stat Card (Spans 8 cols) */}
      <div className="col-span-1 lg:col-span-8 bg-surface rounded-lg border border-outline-variant p-lg flex flex-col">
      <div className="flex justify-between items-start mb-lg">
      <div>
      <h2 className="text-headline-sm font-headline-sm text-on-surface mb-xs">Overall System Efficiency</h2>
      <p className="text-body-sm font-body-sm text-on-surface-variant">Real-time throughput across all active nodes.</p>
      </div>
      <span className="inline-flex items-center gap-1 bg-surface-variant text-on-surface text-label-sm font-label-sm px-2 py-1 rounded">
      <span className="material-symbols-outlined text-primary-container" style={{fontSize: "14px"}}>trending_up</span>
                                  +12.4%
                              </span>
      </div>
      <div className="flex-1 flex items-end gap-sm mt-xl min-h-[200px]">
      {/* Abstracted Bar Chart */}
      <div className="flex-1 bg-surface-variant rounded-t w-full h-[40%] hover:bg-secondary-container transition-colors relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-label-sm font-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">40%</div>
      </div>
      <div className="flex-1 bg-surface-variant rounded-t w-full h-[60%] hover:bg-secondary-container transition-colors relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-label-sm font-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">60%</div>
      </div>
      <div className="flex-1 bg-surface-variant rounded-t w-full h-[35%] hover:bg-secondary-container transition-colors relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-label-sm font-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">35%</div>
      </div>
      <div className="flex-1 bg-surface-variant rounded-t w-full h-[80%] hover:bg-secondary-container transition-colors relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-label-sm font-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">80%</div>
      </div>
      <div className="flex-1 bg-primary-container rounded-t w-full h-[95%] relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-label-sm font-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">95%</div>
      </div>
      <div className="flex-1 bg-surface-variant rounded-t w-full h-[50%] hover:bg-secondary-container transition-colors relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-label-sm font-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">50%</div>
      </div>
      <div className="flex-1 bg-surface-variant rounded-t w-full h-[70%] hover:bg-secondary-container transition-colors relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-label-sm font-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">70%</div>
      </div>
      </div>
      <div className="flex justify-between mt-sm text-label-sm font-label-sm text-outline">
      <span>Mon</span>
      <span>Tue</span>
      <span>Wed</span>
      <span>Thu</span>
      <span className="text-primary-container">Fri</span>
      <span>Sat</span>
      <span>Sun</span>
      </div>
      </div>
      {/* Secondary Stats Column (Spans 4 cols) */}
      <div className="col-span-1 lg:col-span-4 flex flex-col gap-lg">
      {/* Stat 1 */}
      <div className="bg-surface rounded-lg border border-outline-variant p-md flex-1 flex flex-col justify-center">
      <div className="flex items-center gap-sm mb-sm text-on-surface-variant">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>speed</span>
      <span className="text-label-md font-label-md">Processing Speed</span>
      </div>
      <div className="text-[32px] leading-tight font-bold text-on-surface tracking-tight mb-xs">
                                  {total > 0 ? 96 : 0} <span className="text-headline-sm font-headline-sm text-outline-variant font-normal">ops/min</span>
      </div>
      <div className="w-full bg-surface-container-high rounded-full h-1.5 mt-auto">
      <div className="bg-secondary h-1.5 rounded-full" style={{width: "85%"}}></div>
      </div>
      </div>
      {/* Stat 2 */}
      <div className="bg-surface rounded-lg border border-outline-variant p-md flex-1 flex flex-col justify-center">
      <div className="flex items-center gap-sm mb-sm text-on-surface-variant">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>warning</span>
      <span className="text-label-md font-label-md">Error Rate</span>
      </div>
      <div className="text-[32px] leading-tight font-bold text-on-surface tracking-tight mb-xs">
                                  {errorRate}
                              </div>
      <span className="text-label-sm font-label-sm text-outline">Below threshold target of 0.1%</span>
      </div>
      </div>
      {/* Status Distribution (Spans 6 cols) */}
      <div className="col-span-1 lg:col-span-6 bg-surface rounded-lg border border-outline-variant p-lg">
      <h2 className="text-headline-sm font-headline-sm text-on-surface mb-lg">Status Distribution</h2>
      <div className="flex flex-col gap-md">
      {/* Row 1 */}
      <div>
      <div className="flex justify-between text-body-sm font-body-sm mb-xs">
      <span className="text-on-surface">Active Operations</span>
      <span className="text-on-surface-variant">{activeCount}</span>
      </div>
      <div className="w-full bg-surface-container-high rounded-full h-2">
      <div className="bg-primary-container h-2 rounded-full" style={{width: total > 0 ? `${(activeCount / total) * 100}%` : '0%'}}></div>
      </div>
      </div>
      {/* Row 2 */}
      <div>
      <div className="flex justify-between text-body-sm font-body-sm mb-xs">
      <span className="text-on-surface">Pending Review</span>
      <span className="text-on-surface-variant">{records.filter((r) => r.status === 'pending').length}</span>
      </div>
      <div className="w-full bg-surface-container-high rounded-full h-2">
      <div className="bg-secondary-container h-2 rounded-full" style={{width: total > 0 ? `${(records.filter((r) => r.status === 'pending').length / total) * 100}%` : '0%'}}></div>
      </div>
      </div>
      {/* Row 3 */}
      <div>
      <div className="flex justify-between text-body-sm font-body-sm mb-xs">
      <span className="text-on-surface">Failed / Error</span>
      <span className="text-error mb-xs">{failedCount}</span>
      </div>
      <div className="w-full bg-surface-container-high rounded-full h-2">
      <div className="bg-error-container h-2 rounded-full" style={{width: total > 0 ? `${(failedCount / total) * 100}%` : '0%'}}></div>
      </div>
      </div>
      </div>
      </div>
      {/* Recent Activity List (Spans 6 cols) */}
      <div className="col-span-1 lg:col-span-6 bg-surface rounded-lg border border-outline-variant">
      <div className="p-md border-b border-outline-variant flex justify-between items-center">
      <h2 className="text-headline-sm font-headline-sm text-on-surface">Recent Activity</h2>
      <button className="text-label-sm font-label-sm text-primary hover:text-primary-fixed transition-colors" onClick={() => navigate('dashboard')}>View All</button>
      </div>
      <div className="flex flex-col">
      {/* Activity Item 1 */}
      <div className="px-md py-sm border-b border-outline-variant/50 hover:bg-surface-variant transition-colors flex items-center gap-md">
      <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
      <span className="material-symbols-outlined" style={{fontSize: "16px"}}>sync</span>
      </div>
      <div className="flex-1">
      <div className="text-body-sm font-body-sm text-on-surface">Data sync completed for Cluster A</div>
      <div className="text-label-sm font-label-sm text-outline">2 mins ago</div>
      </div>
      <span className="text-label-sm font-label-sm text-primary-container bg-surface-tint/10 px-2 py-0.5 rounded">Success</span>
      </div>
      {/* Activity Item 2 */}
      <div className="px-md py-sm border-b border-outline-variant/50 hover:bg-surface-variant transition-colors flex items-center gap-md">
      <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
      <span className="material-symbols-outlined" style={{fontSize: "16px"}}>person_add</span>
      </div>
      <div className="flex-1">
      <div className="text-body-sm font-body-sm text-on-surface">New admin user added (J. Smith)</div>
      <div className="text-label-sm font-label-sm text-outline">15 mins ago</div>
      </div>
      <span className="text-label-sm font-label-sm text-on-surface-variant bg-surface-variant px-2 py-0.5 rounded">Log</span>
      </div>
      {/* Activity Item 3 */}
      <div className="px-md py-sm hover:bg-surface-variant transition-colors flex items-center gap-md rounded-b-lg">
      <div className="w-8 h-8 rounded-full bg-error-container/20 flex items-center justify-center text-error">
      <span className="material-symbols-outlined" style={{fontSize: "16px"}}>warning</span>
      </div>
      <div className="flex-1">
      <div className="text-body-sm font-body-sm text-on-surface">API rate limit exceeded on Node 04</div>
      <div className="text-label-sm font-label-sm text-outline">1 hour ago</div>
      </div>
      <span className="text-label-sm font-label-sm text-error bg-error-container/20 px-2 py-0.5 rounded">Alert</span>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* Mobile Bottom Navigation (Visible only on md:hidden) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container border-t border-outline-variant flex justify-around items-center h-16 z-40 pb-safe">
      <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:text-on-surface" href="#" onClick={(e) => { e.preventDefault(); navigate('dashboard'); }}>
      <span className="material-symbols-outlined mb-1">dashboard</span>
      <span className="text-[10px] font-medium leading-none">Dashboard</span>
      </a>
      {/* Active Tab Mobile */}
      <a className="flex flex-col items-center justify-center w-full h-full text-primary" href="#" onClick={(e) => { e.preventDefault(); navigate('insights'); }}>
      <div className="bg-secondary-container rounded-full px-4 py-1 mb-1">
      <span className="material-symbols-outlined text-on-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>analytics</span>
      </div>
      <span className="text-[10px] font-medium leading-none">Insights</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:text-on-surface" href="#" onClick={(e) => { e.preventDefault(); navigate('settings'); }}>
      <span className="material-symbols-outlined mb-1">settings</span>
      <span className="text-[10px] font-medium leading-none">Settings</span>
      </a>
      </nav>
    </>
  );
}
