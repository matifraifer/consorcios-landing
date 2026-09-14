// ============================================================
// DESIGN TOKENS — Landing (Consorcios Design System v1.0)
// Fuente: https://claude.ai/code/artifact/f9464985-8082-4858-ac6a-23765abc752b
// ============================================================

export const colors = {
  accent: '#fb3c00',
  accentHover: '#e53500',
  accentSoft: '#ff9575',
  accentSubtle: '#fff2ed',

  primary: '#142B21',
  textOnDark: '#E2F0E8',
  textOnDarkMuted: 'rgba(226,240,232,0.6)',
  textOnDarkFaint: 'rgba(226,240,232,0.35)',

  text: '#142B21',
  textMuted: 'rgba(20,43,33,0.52)',

  bg: '#f7faf9',
  surface: '#ffffff',

  border: 'rgba(20,43,33,0.10)',
  borderStrong: 'rgba(20,43,33,0.16)',

  // UX semantics (no son colores de marca)
  success: '#047857',
  successBg: 'rgba(4,120,87,0.07)',
  successBorder: 'rgba(4,120,87,0.25)',
  warning: '#92400e',
  warningBg: 'rgba(146,64,14,0.06)',
  warningBorder: 'rgba(146,64,14,0.22)',
}

export const radius = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  full: '9999px',
}

export const shadow = {
  sm: '0 1px 3px rgba(20,43,33,0.07), 0 1px 2px rgba(20,43,33,0.04)',
  md: '0 4px 16px rgba(20,43,33,0.09), 0 2px 4px rgba(20,43,33,0.05)',
  lg: '0 12px 40px rgba(20,43,33,0.13), 0 4px 10px rgba(20,43,33,0.06)',
  accent: '0 4px 16px rgba(251,60,0,0.25)',
  accentHover: '0 6px 20px rgba(251,60,0,0.35)',
}

// Gradientes de marca — hero sections, cards destacadas y banners
export const gradients = {
  whiteOrange: 'linear-gradient(135deg, #ffffff 0%, #fb3c00 100%)',
  blackOrange: 'linear-gradient(135deg, #000000 0%, #fb3c00 100%)',
  greenOrange: 'linear-gradient(135deg, #142B21 0%, #fb3c00 100%)',
}

// Overlay de granulado (noise) — SVG feTurbulence, usar sobre un gradiente
export const grainOverlay = {
  position: 'absolute',
  inset: 0,
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E\")",
  backgroundRepeat: 'repeat',
  backgroundSize: '220px 220px',
  opacity: 0.22,
  mixBlendMode: 'overlay',
  pointerEvents: 'none',
}
