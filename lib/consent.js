"use client";

import { useSyncExternalStore } from "react";

// Cookie consent stored in a first-party cookie: "accepted" | "declined" | null (not chosen yet).
// Server snapshot is "pending" so nothing consent-gated renders before hydration.
const KEY = "cookie-consent";
const listeners = new Set();

const read = () =>
  document.cookie.match(new RegExp(`(?:^|; )${KEY}=(\\w+)`))?.[1] ?? null;

export function setConsent(value) {
  document.cookie = value
    ? `${KEY}=${value}; max-age=${60 * 60 * 24 * 180}; path=/; SameSite=Lax`
    : `${KEY}=; max-age=0; path=/`; // null = withdraw, banner shows again
  listeners.forEach((l) => l());
}

export const useConsent = () =>
  useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    read,
    () => "pending",
  );
