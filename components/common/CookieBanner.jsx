"use client";

import { useState } from "react";
import { FaCookieBite } from "react-icons/fa6";
import { setConsent, useConsent } from "@/lib/consent";

const btn = "cursor-pointer rounded-default px-5 py-2.5 text-sm font-semibold transition-colors";

// ponytail: one optional category (Google Maps); add more rows + per-category storage when analytics/marketing exist
export default function CookieBanner() {
  const consent = useConsent();
  const [customize, setCustomize] = useState(false);
  const [maps, setMaps] = useState(false);

  if (consent !== null) return null; // already chosen, or not hydrated yet

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-primary text-white shadow-[0_-8px_30px_rgba(0,0,0,0.25)]"
    >
      <div className="container mx-auto flex flex-col gap-5 px-4 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-4">
          <FaCookieBite className="mt-1 shrink-0 text-2xl text-yellow" />
          <div className="space-y-1">
            <p className="font-semibold">We value your privacy</p>
            <p className="text-sm leading-relaxed text-white/80 max-w-2xl">
              We use cookies that are necessary for the site to work. With your
              consent, we also load Google Maps, which sets its own cookies.
              You can change your choice anytime from &quot;Cookie settings&quot;
              in the footer.
            </p>
          </div>
        </div>

        {!customize && (
          <div className="flex flex-wrap gap-2 lg:shrink-0">
            <button type="button" onClick={() => setCustomize(true)} className={`${btn} inset-border hover:bg-white/10`}>
              Customize
            </button>
            <button type="button" onClick={() => setConsent("declined")} className={`${btn} inset-border hover:bg-white/10`}>
              Reject all
            </button>
            <button type="button" onClick={() => setConsent("accepted")} className={`${btn} bg-secondary hover:bg-darkred`}>
              Accept all
            </button>
          </div>
        )}
      </div>

      {customize && (
        <div className="container mx-auto px-4 pb-5 space-y-3">
          <label className="flex items-start justify-between gap-4 rounded-default bg-white/5 p-4">
            <span>
              <span className="block font-semibold text-sm">Necessary</span>
              <span className="block text-xs text-white/70">Remembers your cookie choice. Always on.</span>
            </span>
            <input type="checkbox" checked disabled className="mt-1 h-4 w-4 accent-[var(--secondary)]" />
          </label>
          <label className="flex items-start justify-between gap-4 rounded-default bg-white/5 p-4 cursor-pointer">
            <span>
              <span className="block font-semibold text-sm">Third-party content</span>
              <span className="block text-xs text-white/70">Google Maps embed in the footer. Google may set cookies and see your IP address.</span>
            </span>
            <input
              type="checkbox"
              checked={maps}
              onChange={(e) => setMaps(e.target.checked)}
              className="mt-1 h-4 w-4 cursor-pointer accent-[var(--secondary)]"
            />
          </label>
          <div className="flex flex-wrap justify-end gap-2">
            <button type="button" onClick={() => setConsent(maps ? "accepted" : "declined")} className={`${btn} inset-border hover:bg-white/10`}>
              Save preferences
            </button>
            <button type="button" onClick={() => setConsent("accepted")} className={`${btn} bg-secondary hover:bg-darkred`}>
              Accept all
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
