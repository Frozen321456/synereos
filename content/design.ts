/**
 * Synereos Design System — White/Glassmorphism Theme
 * 80% typography + structure, 15% restrained motion, 5% computational effects
 */

export const colors = {
  // Core
  bg: '#FFFFFF',
  surface: '#F8FAFC',
  text: '#0A0F1E',
  textSecondary: '#475569',
  textMuted: '#94A3B8',

  // Brand
  cyan: '#0284C7',       // darkened for WCAG AA on white
  cyanLight: '#38BDF8',
  indigo: '#4338CA',
  indigoLight: '#818CF8',

  // Glassmorphism
  glass: 'rgba(255,255,255,0.55)',
  glassBorder: 'rgba(255,255,255,0.75)',
  glassShadow: '0 8px 32px rgba(2,132,199,0.08)',

  // Status (color-independent glyphs: ✓ ✗ ◌)
  success: '#059669',
  error: '#DC2626',
  warning: '#D97706',
  info: '#0284C7',

  // Gradients
  gradientHero: 'radial-gradient(ellipse 70% 50% at 20% 0%, rgba(56,189,248,0.10), transparent 55%), radial-gradient(ellipse 60% 45% at 85% 15%, rgba(99,102,241,0.08), transparent 55%)',
  gradientSection: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,189,248,0.06), transparent 50%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(99,102,241,0.05), transparent 50%)',
  gradientInfinity: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.08), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(99,102,241,0.06), transparent 60%)',
};

export const typography = {
  fontSans: 'Inter, system-ui, sans-serif',
  fontMono: 'JetBrains Mono, monospace',
  fontDisplay: 'Inter, system-ui, sans-serif',

  // Scale
  xs: '0.75rem',      // 12px
  sm: '0.8125rem',    // 13px
  base: '1rem',       // 16px
  lg: '1.125rem',     // 18px
  xl: '1.25rem',      // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '1.875rem',  // 30px
  '4xl': '2.25rem',   // 36px
  '5xl': '3rem',      // 48px
  '6xl': '3.75rem',   // 60px
  '7xl': '4.5rem',    // 72px
  '8xl': '6rem',      // 96px
  '9xl': '8rem',      // 128px

  // Tracking
  trackingTight: '-0.03em',
  trackingNormal: '0',
  trackingWide: '0.02em',
  trackingWider: '0.1em',
  trackingWidest: '0.2em',
  trackingDisplay: '0.35em',
};

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  28: '7rem',     // 112px
  32: '8rem',     // 128px
};

export const radius = {
  none: '0',
  sm: '0.375rem',   // 6px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  full: '9999px',
};

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0,0,0,0.05)',
  md: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
  lg: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
  xl: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
  glass: colors.glassShadow,
};

export const transitions = {
  fast: '150ms ease-out',
  normal: '300ms ease-out',
  slow: '500ms ease-out',
  spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modal: 40,
  popover: 50,
  tooltip: 60,
  toast: 70,
  loading: 100,
};

export const container = {
  maxWidth: '1280px',
  paddingX: '1.5rem',
  paddingXlg: '2.5rem',
};

export const hairline = 'rgba(255,255,255,0.12)';
export const borderLight = 'rgba(0,0,0,0.06)';
export const borderMedium = 'rgba(0,0,0,0.1)';

export const designTokens = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  transitions,
  breakpoints,
  zIndex,
  container,
  hairline,
  borderLight,
  borderMedium,
};

export type DesignTokens = typeof designTokens;