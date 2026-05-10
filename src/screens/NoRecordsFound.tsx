// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: No Records Found
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

interface NoRecordsFoundProps {}

export function NoRecordsFound(props: NoRecordsFoundProps) {
  const { navigate, selectRecord } = useAppContext();

  const handleCreateEntry = () => {
    selectRecord(null);
    navigate('create-record');
  };

  return (
    <>
      {/* SideNavBar (Desktop Only) */}
      <nav className="hidden md:flex flex-col h-screen w-64 left-0 top-0 p-md gap-base bg-surface-container-low border-r border-outline-variant shrink-0">
      {/* Header */}
      <div className="flex items-center gap-sm mb-lg px-sm pt-sm">
      <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center shrink-0">
      <span className="text-on-primary-container font-headline-sm text-headline-sm font-black">PO</span>
      </div>
      <div className="flex flex-col">
      <span className="text-headline-sm font-headline-sm font-black text-on-surface">Productivity Ops</span>
      <span className="text-label-sm font-label-sm text-on-surface-variant">Enterprise Console</span>
      </div>
      </div>
      {/* Main Navigation Tabs */}
      <div className="flex flex-col gap-base flex-1">
      <a className="flex items-center gap-sm px-sm py-sm rounded-lg bg-secondary-container text-on-secondary-container cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('dashboard'); }}>
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span className="text-label-md font-label-md">Dashboard</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all duration-150 cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('insights'); }}>
      <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
      <span className="text-label-md font-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all duration-150 cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('settings'); }}>
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="text-label-md font-label-md">Settings</span>
      </a>
      </div>
      {/* CTA */}
      <div className="mt-auto mb-lg">
      <button className="w-full bg-primary-container text-on-primary-container h-touch-target rounded-lg flex items-center justify-center gap-sm focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background transition-colors hover:bg-opacity-90" onClick={handleCreateEntry}>
      <span className="material-symbols-outlined" data-icon="add">add</span>
      <span className="text-label-md font-label-md">New Entry</span>
      </button>
      </div>
      {/* Footer Navigation */}
      <div className="flex flex-col gap-base pt-md border-t border-outline-variant">
      <a className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all duration-150 cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('settings'); }}>
      <span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
      <span className="text-label-md font-label-md">Support</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all duration-150 cursor-pointer select-none" href="#" onClick={(e) => { e.preventDefault(); navigate('dashboard'); }}>
      <span className="material-symbols-outlined" data-icon="logout">logout</span>
      <span className="text-label-md font-label-md">Sign Out</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
      {/* TopAppBar (Mobile Only) */}
      <header className="md:hidden flex justify-between items-center h-14 w-full px-gutter ml-auto bg-surface-container border-b border-outline-variant z-40 shrink-0">
      <div className="flex items-center gap-sm">
      <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
      <span className="text-on-primary-container font-headline-sm text-headline-sm font-black">PO</span>
      </div>
      <span className="text-headline-md font-headline-md font-bold text-primary">Productivity Ops</span>
      </div>
      <div className="flex items-center gap-sm">
      <button aria-label="Notifications" className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-bright transition-colors duration-200 cursor-pointer active:opacity-80" onClick={() => navigate('profile')}>
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button aria-label="Help" className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-bright transition-colors duration-200 cursor-pointer active:opacity-80" onClick={() => navigate('settings')}>
      <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
      </button>
      </div>
      </header>
      {/* Canvas */}
      <div className="flex-1 p-margin overflow-y-auto flex items-center justify-center">
      <div className="max-w-md w-full flex flex-col items-center text-center">
      {/* Illustrative Graphic Container */}
      <div className="w-48 h-48 mb-lg relative">
      {/* Abstract geometric elements for dark theme ops */}
      <div className="absolute inset-0 bg-surface-container rounded-full opacity-50 blur-xl"></div>
      <div className="absolute inset-0 border border-outline-variant rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute inset-4 border border-outline-variant rounded-full"></div>
      <div className="absolute inset-0 flex items-center justify-center text-surface-variant">
      <span className="material-symbols-outlined text-[80px]" data-icon="topic" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>topic</span>
      </div>
      </div>
      {/* Text Content */}
      <h1 className="text-headline-lg font-headline-lg text-on-surface mb-sm">No Records Found</h1>
      <p className="text-body-md font-body-md text-on-surface-variant mb-xl max-w-sm">
                          Your database is currently empty. Start building your operational workflows by creating your first entry.
                      </p>
      {/* Call to Action */}
      <button className="bg-primary-container text-white h-touch-target px-lg rounded flex items-center justify-center gap-sm focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background transition-colors hover:bg-opacity-90" onClick={handleCreateEntry}>
      <span className="material-symbols-outlined" data-icon="add">add</span>
      <span className="text-label-md font-label-md">Create First Entry</span>
      </button>
      </div>
      </div>
      </main>
    </>
  );
}
