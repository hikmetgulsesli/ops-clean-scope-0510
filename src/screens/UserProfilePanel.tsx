// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: User Profile Panel
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

interface UserProfilePanelProps {}

export function UserProfilePanel(props: UserProfilePanelProps) {
  const { navigate, updateSettings, settings, resetAll } = useAppContext();
  const [checking, setChecking] = useState(false);

  const handleCheck = () => {
    setChecking(true);
    setTimeout(() => setChecking(false), 1500);
  };

  return (
    <>
      {/* Scrim / Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-40" role="button" tabIndex={0} onClick={() => navigate('dashboard')} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate('dashboard'); } }}></div>
      {/* Profile Drawer / Panel */}
      <aside aria-label="Profile Panel" className="absolute top-0 right-0 h-full w-full max-w-sm bg-surface-container border-l border-outline-variant z-50 flex flex-col shadow-2xl transition-transform duration-300 translate-x-0">
      {/* Header */}
      <header className="flex items-center justify-between p-lg border-b border-outline-variant">
      <h2 className="text-headline-md font-headline-md text-on-surface">Profile</h2>
      <button aria-label="Close Profile" className="h-touch-target w-touch-target flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container" onClick={() => navigate('dashboard')}>
      <span className="material-symbols-outlined" data-icon="close">close</span>
      </button>
      </header>
      {/* User Info Segment */}
      <div className="p-lg flex flex-col items-center border-b border-outline-variant bg-surface-container-low">
      <div className="relative mb-md">
      <img alt="Alex Mercer Profile Picture" className="w-24 h-24 rounded-full object-cover border-2 border-outline-variant" data-alt="A professional headshot of a man with short brown hair and a neat beard, wearing a dark grey tailored shirt. He is looking directly at the camera with a confident, neutral expression. The background is a slightly out-of-focus, sleek modern office interior with subtle, cool-toned lighting fitting a corporate tech environment. The image has a crisp, high-contrast aesthetic typical of high-end corporate photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWqhFAPh9FBmGG-agp0yElmf8hRqENeYXtNdH9jJ150wKGIgkkmSPPQMn5YpfAG_qPzlit6SUuvZ9FgsHEfjvfuxftfE8fQhrx73HEliMkProm38CKFEtzo7YKmBQgt_Pwdt3OOnr30OpbCCaMD86mayhbnw_BKg5POOOX2Xzi8dLq9f9Z6NJocI8-3IUwjPlJPieOCUj3inlYEK2NN8ia9ZmCtSHWbZvT5QExY-rzON9kC4WXSYF9UL3nm081dHRl7exBZfHMdNg" />
      <div className="absolute bottom-0 right-0 w-6 h-6 bg-primary-container rounded-full border-2 border-surface-container flex items-center justify-center">
      <span className="material-symbols-outlined text-[14px] text-on-primary-container" data-icon="edit">edit</span>
      </div>
      </div>
      <h3 className="text-headline-sm font-headline-sm text-on-surface text-center mb-xs">Alex Mercer</h3>
      <p className="text-body-sm font-body-sm text-on-surface-variant text-center">Logistics Lead</p>
      <p className="text-label-sm font-label-sm text-primary mt-sm bg-primary-container/10 px-sm py-xs rounded-full">Pro Account</p>
      </div>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-md space-y-md">
      {/* Account Settings Group */}
      <section>
      <h4 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-sm px-sm">Account Settings</h4>
      <div className="bg-surface rounded-lg border border-outline-variant overflow-hidden">
      <a className="flex items-center p-md hover:bg-surface-variant transition-colors border-b border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-inset" href="#" onClick={(e) => { e.preventDefault(); navigate('settings'); }}>
      <span className="material-symbols-outlined text-on-surface-variant mr-md" data-icon="person">person</span>
      <div className="flex-1">
      <p className="text-body-md font-body-md text-on-surface">Personal Information</p>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
      </a>
      <a className="flex items-center p-md hover:bg-surface-variant transition-colors border-b border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-inset" href="#" onClick={(e) => { e.preventDefault(); navigate('settings'); }}>
      <span className="material-symbols-outlined text-on-surface-variant mr-md" data-icon="security">security</span>
      <div className="flex-1">
      <p className="text-body-md font-body-md text-on-surface">Security &amp; Privacy</p>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
      </a>
      <a className="flex items-center p-md hover:bg-surface-variant transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-inset" href="#" onClick={(e) => { e.preventDefault(); navigate('settings'); }}>
      <span className="material-symbols-outlined text-on-surface-variant mr-md" data-icon="notifications">notifications</span>
      <div className="flex-1">
      <p className="text-body-md font-body-md text-on-surface">Notifications</p>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
      </a>
      </div>
      </section>
      {/* Preferences Group */}
      <section>
      <h4 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-sm px-sm">Preferences</h4>
      <div className="bg-surface rounded-lg border border-outline-variant overflow-hidden">
      <button className="w-full flex items-center justify-between p-md hover:bg-surface-variant transition-colors border-b border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-inset" onClick={() => updateSettings({ darkTheme: !settings.darkTheme })}>
      <div className="flex items-center">
      <span className="material-symbols-outlined text-on-surface-variant mr-md" data-icon="dark_mode">dark_mode</span>
      <span className="text-body-md font-body-md text-on-surface">Dark Theme</span>
      </div>
      {/* Toggle Switch (Mock) */}
      <div role="switch" aria-checked={settings.darkTheme} className={`w-10 h-6 rounded-full relative transition-colors ${settings.darkTheme ? 'bg-primary-container' : 'bg-surface-variant'}`}>
      <div className={`absolute top-1 w-4 h-4 bg-on-primary-container rounded-full transition-all ${settings.darkTheme ? 'right-1' : 'left-1'}`}></div>
      </div>
      </button>
      <a className="flex items-center p-md hover:bg-surface-variant transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-inset" href="#" onClick={(e) => { e.preventDefault(); navigate('settings'); }}>
      <span className="material-symbols-outlined text-on-surface-variant mr-md" data-icon="language">language</span>
      <div className="flex-1 text-left">
      <p className="text-body-md font-body-md text-on-surface">Language</p>
      </div>
      <span className="text-body-sm font-body-sm text-on-surface-variant mr-sm">English (US)</span>
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
      </a>
      </div>
      </section>
      <section>
      <h4 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-sm px-sm">System</h4>
      <div className="bg-surface rounded-lg border border-outline-variant overflow-hidden">
      <button className="w-full flex items-center p-md hover:bg-surface-variant transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-inset" onClick={handleCheck}>
      <span className="material-symbols-outlined text-on-surface-variant mr-md" data-icon="update">update</span>
      <span className="text-body-md font-body-md text-on-surface">{checking ? 'Checking…' : 'Check for Updates'}</span>
      </button>
      </div>
      </section>
      </div>
      {/* Footer / Sign Out */}
      <div className="p-lg border-t border-outline-variant bg-surface-container">
      <button className="w-full flex items-center justify-center p-sm border border-outline-variant rounded bg-surface hover:bg-surface-variant transition-colors text-error focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface-container h-touch-target" onClick={resetAll}>
      <span className="material-symbols-outlined mr-sm" data-icon="logout">logout</span>
      <span className="text-label-md font-label-md">Sign Out</span>
      </button>
      <div className="mt-md flex justify-center space-x-md text-label-sm font-label-sm text-on-surface-variant">
      <a className="hover:text-on-surface underline" href="#" onClick={(e) => { e.preventDefault(); navigate('settings'); }}>Privacy Policy</a>
      <a className="hover:text-on-surface underline" href="#" onClick={(e) => { e.preventDefault(); navigate('settings'); }}>Terms of Service</a>
      </div>
      <p className="text-center text-label-sm font-label-sm text-on-surface-variant mt-sm opacity-50">v2.4.1 (build 8492)</p>
      </div>
      </aside>
    </>
  );
}
