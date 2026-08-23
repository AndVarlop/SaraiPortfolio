// Returns true when the user has "reduce motion" enabled at the OS/browser level.
// anime.js animates inline styles directly, so CSS-only @media (prefers-reduced-motion)
// rules can't stop it — every animation call in the app should check this first.
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
