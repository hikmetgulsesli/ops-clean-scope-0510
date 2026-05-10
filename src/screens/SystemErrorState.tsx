import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

interface SystemErrorStateProps {}

export function SystemErrorState(props: SystemErrorStateProps) {
  const { error, retryLoad, resetAll } = useAppContext();
  const [detailsOpen, setDetailsOpen] = useState(false);

  const timestamp = new Date().toISOString();

  return (
    <>
      <main className="flex-grow flex items-center justify-center p-margin">
        <div className="w-full max-w-md">
          <div className="bg-surface-container rounded-xl border border-outline-variant p-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-error-container/20 flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-error text-[32px]" style={{fontVariationSettings: "'FILL' 1"}}>
                error
              </span>
            </div>
            <h1 className="text-headline-md font-headline-md text-on-surface mb-sm">
              Failed to load operational data
            </h1>
            <p className="text-body-md font-body-md text-on-surface-variant mb-lg">
              There was a problem retrieving the required data. This could be due to network connectivity issues or a corrupted local cache. Please try again.
            </p>
            <div className="flex flex-col w-full gap-sm">
              <button
                className="h-[44px] md:h-[36px] w-full bg-primary-container text-on-primary-container rounded flex items-center justify-center gap-sm px-md hover:bg-primary-container/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background"
                type="button"
                onClick={retryLoad}
              >
                <span className="material-symbols-outlined text-[18px]">
                  refresh
                </span>
                <span className="text-label-md font-label-md">Retry Connection</span>
              </button>
              <button
                className="h-[44px] md:h-[36px] w-full bg-transparent border border-outline-variant text-on-surface rounded flex items-center justify-center gap-sm px-md hover:bg-surface-variant transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background"
                type="button"
                onClick={resetAll}
              >
                <span className="material-symbols-outlined text-[18px]">
                  delete_sweep
                </span>
                <span className="text-label-md font-label-md">Clear Storage &amp; Reset</span>
              </button>
            </div>
            <div className="w-full mt-lg pt-md border-t border-outline-variant text-left">
              <button
                className="flex items-center justify-between w-full text-label-md font-label-md text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container rounded p-xs -ml-xs"
                type="button"
                aria-label={detailsOpen ? "Hide Technical Details" : "View Technical Details"}
                onClick={() => setDetailsOpen(!detailsOpen)}
              >
                <span>{detailsOpen ? "Hide Technical Details" : "View Technical Details"}</span>
                <span className={`material-symbols-outlined text-[18px] transition-transform ${detailsOpen ? "rotate-180" : ""}`}>
                  expand_more
                </span>
              </button>
              <div className={`transition-all mt-sm p-sm bg-surface-container-lowest rounded border border-outline-variant font-mono text-[10px] leading-tight text-on-surface-variant overflow-x-auto ${detailsOpen ? "" : "hidden"}`}>
                {error || "ERR_CONNECTION_REFUSED"}<br />
                Timestamp: {timestamp}<br />
                Endpoint: /api/v1/ops/manifest<br />
                Cache_Status: STALE
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
