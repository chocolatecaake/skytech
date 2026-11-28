"use client";

import { setConsent, useConsent } from "@/lib/consent";

const EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.768870481484!2d54.4651078!3d24.284802199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e3fffce2dbb61%3A0xd28a7c596c35a5c1!2sStar%20Brand%20Business%20Center!5e0!3m2!1sen!2sae!4v1792513765104!5m2!1sen!2sae";
const LINK = "https://www.google.com/maps/search/?api=1&query=24.2848022,54.4651078";

// Google Maps sets third-party cookies, so the iframe only loads after consent.
export default function MapEmbed() {
  const consent = useConsent();

  return (
    <div>
      <div className="rounded-default overflow-hidden border border-white shadow-xl">
        {consent === "accepted" ? (
          <iframe
            src={EMBED}
            title="Skytech office location"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <div className="flex h-[200px] flex-col items-center justify-center gap-3 p-4 text-center text-sm">
            <p>The map uses Google cookies.</p>
            <button
              type="button"
              onClick={() => setConsent("accepted")}
              className="cursor-pointer rounded-default bg-secondary px-4 py-2 font-semibold hover:bg-darkred"
            >
              Load map
            </button>
            <a href={LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-yellow">
              Open in Google Maps
            </a>
          </div>
        )}
      </div>
      {(consent === "accepted" || consent === "declined") && (
        <button
          type="button"
          onClick={() => setConsent(null)}
          className="mt-2 cursor-pointer text-xs underline underline-offset-4 opacity-70 hover:opacity-100"
        >
          Cookie settings
        </button>
      )}
    </div>
  );
}
