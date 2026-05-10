// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings & Preferences
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useRef, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

interface SettingsPreferencesProps {}

export function SettingsPreferences(props: SettingsPreferencesProps) {
  const { navigate, updateSettings, settings, resetAll } = useAppContext();
  const [checking, setChecking] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  const handleNav = (view: Parameters<typeof navigate>[0]) => {
    navigate(view);
  };

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCheckUpdates = () => {
    setChecking(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setChecking(false);
      timeoutRef.current = null;
    }, 1500);
  };

  const handleClearData = () => {
    if (!confirmClear) {
      setConfirmClear(true);
      return;
    }
    resetAll();
    setConfirmClear(false);
  };

  return (
    <>
      {/* SideNavBar Component */}
      <nav className="hidden md:flex flex-col h-screen w-64 left-0 top-0 bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant dark:border-outline-variant p-md gap-base z-30 shrink-0">
        {/* Header */}
        <div className="flex items-center gap-md mb-xl px-sm">
          <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center shrink-0 overflow-hidden">
            <img
              alt="Ops Logo"
              className="w-full h-full object-cover"
              data-alt="A stylized, minimalist logo mark featuring sharp geometric shapes in deep blue and crisp white. The logo sits perfectly centered within a dark circular container. Lighting is even and professional, suggesting a modern enterprise software brand."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwFeQzr6_9-sOk_4snd3d_rxwY17aIjjvPYutLLdWtI5BDUQ_6ouCrqAHWZt0O8oMt8yJAWjez3kqkyi75VDS9JJi9Ql95xnKLyyEFL7qC9E1bXj5bJ-CTZMfzA9UxNWh5i2al7wwRMlLzZEhwsonNCombCb3P1uYt5PgQMO9iwxypuj-2agvo4S8qsRL7tcsTeomsHNAv24iWIxFZxT_Ecs6lcgi9vcnwLIswMvSysOXW-TRskGjz9_YEk-x89PWJXK6Xdn6QL6U"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-headline-sm font-headline-sm font-black text-on-surface">
              Productivity Ops
            </span>
            <span className="text-label-sm font-label-sm text-on-surface-variant">
              Enterprise Console
            </span>
          </div>
        </div>
        {/* CTA */}
        <button
          className="mb-lg h-[36px] bg-primary-container text-white text-label-md font-label-md rounded flex items-center justify-center gap-sm hover:bg-opacity-90 transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container-low"
          onClick={() => handleNav("create-record")}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
            add
          </span>
          New Entry
        </button>
        {/* Main Navigation */}
        <div className="flex flex-col gap-xs flex-1">
          <a
            className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 cursor-pointer select-none text-label-md font-label-md focus:ring-2 focus:ring-primary-container"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNav("dashboard");
            }}
          >
            <span className="material-symbols-outlined" data-icon="dashboard">
              dashboard
            </span>
            <span>Dashboard</span>
          </a>
          <a
            className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 cursor-pointer select-none text-label-md font-label-md focus:ring-2 focus:ring-primary-container"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNav("insights");
            }}
          >
            <span className="material-symbols-outlined" data-icon="analytics">
              analytics
            </span>
            <span>Insights</span>
          </a>
          {/* Active Tab: Settings */}
          <a
            className="flex items-center gap-md px-sm py-sm rounded-lg bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container transition-all duration-150 cursor-pointer select-none text-label-md font-label-md focus:ring-2 focus:ring-primary-container"
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <span
              className="material-symbols-outlined"
              data-icon="settings"
              data-weight="fill"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              settings
            </span>
            <span>Settings</span>
          </a>
        </div>
        {/* Footer Navigation */}
        <div className="flex flex-col gap-xs mt-auto pt-md border-t border-outline-variant">
          <a
            className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 cursor-pointer select-none text-label-md font-label-md focus:ring-2 focus:ring-primary-container"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNav("settings");
            }}
          >
            <span
              className="material-symbols-outlined"
              data-icon="contact_support"
            >
              contact_support
            </span>
            <span>Support</span>
          </a>
          <a
            className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-150 cursor-pointer select-none text-label-md font-label-md focus:ring-2 focus:ring-primary-container"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              resetAll();
            }}
          >
            <span className="material-symbols-outlined" data-icon="logout">
              logout
            </span>
            <span>Sign Out</span>
          </a>
        </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* TopAppBar Component */}
        <header className="md:hidden flex justify-between items-center h-14 w-full px-gutter bg-surface-container dark:bg-surface-container border-b border-outline-variant dark:border-outline-variant z-40 shrink-0">
          <div className="text-headline-md font-headline-md font-bold text-primary dark:text-primary">
            Productivity Ops
          </div>
          <div className="flex items-center gap-md text-primary dark:text-primary">
            <button
              className="hover:bg-surface-bright dark:hover:bg-surface-bright transition-colors duration-200 p-sm rounded-full focus:ring-2 focus:ring-primary-container"
              onClick={() => handleNav("settings")}
              aria-label="Notifications"
            >
              <span
                className="material-symbols-outlined"
                data-icon="notifications"
              >
                notifications
              </span>
            </button>
            <button
              className="hover:bg-surface-bright dark:hover:bg-surface-bright transition-colors duration-200 p-sm rounded-full focus:ring-2 focus:ring-primary-container"
              onClick={() => handleNav("settings")}
              aria-label="Help"
            >
              <span
                className="material-symbols-outlined"
                data-icon="help_outline"
              >
                help_outline
              </span>
            </button>
            <button
              className="w-8 h-8 rounded-full overflow-hidden bg-surface-variant border border-outline-variant ml-sm cursor-pointer p-0"
              onClick={() => handleNav("profile")}
              aria-label="Open profile"
            >
              <img
                alt="User Profile"
                className="w-full h-full object-cover"
                data-alt="A professional headshot of a person looking directly at the camera. The background is a plain, dark studio backdrop. The lighting is soft and flattering, highlighting the subject's features subtly. The overall tone is corporate and approachable."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeXIdxW6_nhik3hQDlwGX_ERgCwc3R0qbfMqLUwsfyhAaEUFCykw2bSLgNmNbblDeWP9MolQp7OixmtY20Ygv-zge0SCFdvD-jGDGPZk7SdPILTweKCTLVgK1wwRRvw3vwAzndoOtGrAWAiqoPHSGeW2ewIj6ZCD5E1-uFo0Oe-VmtqAMoqjTuqxOOB-_No9kL_UYP51cnJ4eriSeh_begVkTDXda6PfDrnXuaoy7FPUK_intJ_nucc-a8QJY_rJxWxBonzBjgJKI"
              />
            </button>
          </div>
        </header>
        {/* Canvas */}
        <main className="flex-1 overflow-y-auto p-margin">
          <div className="max-w-4xl mx-auto space-y-xl">
            {/* Page Header */}
            <div>
              <h1 className="text-headline-lg font-headline-lg text-on-surface mb-xs">
                Application Preferences
              </h1>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Manage your workspace settings, notifications, and local data.
              </p>
            </div>
            {/* Bento Grid Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
              {/* Notifications Panel (Spans 8 cols on large) */}
              <section className="lg:col-span-8 bg-surface rounded-xl border border-[#334155] p-lg flex flex-col">
                <div className="flex items-center gap-md mb-md border-b border-[#334155] pb-md">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontSize: "24px" }}
                  >
                    notifications_active
                  </span>
                  <h2 className="text-headline-sm font-headline-sm text-on-surface">
                    Notification Preferences
                  </h2>
                </div>
                <div className="space-y-lg flex-1">
                  {/* Toggle Item 1 */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-label-md font-label-md text-on-surface mb-base">
                        System Alerts
                      </h3>
                      <p className="text-body-sm font-body-sm text-on-surface-variant">
                        Critical system updates and operational alerts.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        checked={settings.systemAlerts}
                        onChange={() =>
                          updateSettings({
                            systemAlerts: !settings.systemAlerts,
                          })
                        }
                        className="sr-only peer"
                        type="checkbox"
                        value=""
                      />
                      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container border border-outline-variant"></div>
                    </label>
                  </div>
                  {/* Toggle Item 2 */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-label-md font-label-md text-on-surface mb-base">
                        Daily Digest
                      </h3>
                      <p className="text-body-sm font-body-sm text-on-surface-variant">
                        A summary of the previous day's metrics.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        checked={settings.dailyDigest}
                        onChange={() =>
                          updateSettings({
                            dailyDigest: !settings.dailyDigest,
                          })
                        }
                        className="sr-only peer"
                        type="checkbox"
                        value=""
                      />
                      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container border border-outline-variant"></div>
                    </label>
                  </div>
                  {/* Toggle Item 3 */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-label-md font-label-md text-on-surface mb-base">
                        Weekly Report Generation
                      </h3>
                      <p className="text-body-sm font-body-sm text-on-surface-variant">
                        Automated comprehensive PDF reports.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        checked={settings.weeklyReport}
                        onChange={() =>
                          updateSettings({
                            weeklyReport: !settings.weeklyReport,
                          })
                        }
                        className="sr-only peer"
                        type="checkbox"
                        value=""
                      />
                      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container border border-outline-variant"></div>
                    </label>
                  </div>
                </div>
              </section>
              {/* Version & System Info (Spans 4 cols on large) */}
              <section className="lg:col-span-4 bg-surface rounded-xl border border-[#334155] p-lg flex flex-col relative overflow-hidden group">
                {/* Abstract decorative background element */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
                <div className="flex items-center gap-md mb-md border-b border-[#334155] pb-md relative z-10">
                  <span
                    className="material-symbols-outlined text-on-surface-variant"
                    style={{ fontSize: "24px" }}
                  >
                    info
                  </span>
                  <h2 className="text-headline-sm font-headline-sm text-on-surface">
                    System Info
                  </h2>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-md relative z-10">
                  <div>
                    <span className="block text-label-sm font-label-sm text-on-surface-variant mb-base">
                      Current Version
                    </span>
                    <span className="block text-body-lg font-body-lg font-mono text-primary">
                      v4.12.8-stable
                    </span>
                  </div>
                  <div>
                    <span className="block text-label-sm font-label-sm text-on-surface-variant mb-base">
                      Last Sync
                    </span>
                    <span className="block text-body-md font-body-md text-on-surface">
                      Today, 08:42 AM PST
                    </span>
                  </div>
                  <div>
                    <span className="block text-label-sm font-label-sm text-on-surface-variant mb-base">
                      Environment
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-label-sm font-label-sm border border-outline-variant">
                      Production
                    </span>
                  </div>
                </div>
                <button
                  className="mt-lg w-full h-[36px] bg-transparent border border-[#334155] text-on-surface text-label-md font-label-md rounded flex items-center justify-center gap-sm hover:bg-[#334155] transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface"
                  onClick={handleCheckUpdates}
                  disabled={checking}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "16px" }}
                  >
                    update
                  </span>
                  {checking ? "Checking…" : "Check for Updates"}
                </button>
              </section>
              {/* Data Management (Spans full width) */}
              <section className="lg:col-span-12 bg-surface rounded-xl border border-[#334155] p-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-lg">
                <div className="max-w-xl">
                  <div className="flex items-center gap-md mb-xs">
                    <span
                      className="material-symbols-outlined text-error"
                      style={{ fontSize: "24px" }}
                    >
                      database
                    </span>
                    <h2 className="text-headline-sm font-headline-sm text-on-surface">
                      Local Storage Management
                    </h2>
                  </div>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Clear cached operational data and temporary files stored on
                    this device. This action cannot be undone and will require a
                    full resync upon next login.
                  </p>
                </div>
                <div className="shrink-0">
                  <button
                    className="h-[44px] px-lg bg-error-container text-on-error-container text-label-md font-label-md rounded flex items-center justify-center gap-sm hover:bg-opacity-90 transition-colors focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface"
                    onClick={handleClearData}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "18px" }}
                    >
                      delete_forever
                    </span>
                    {confirmClear ? "Confirm Clear" : "Clear All Data"}
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
