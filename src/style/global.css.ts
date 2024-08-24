import { globalStyle } from '@vanilla-extract/css'

globalStyle(':root', {
  width: '100%',
  height: '100%',
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
  fontSize: '16px',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  color: 'var(--seed-semantic-color-ink-text)',
  backgroundColor: 'var(--seed-semantic-color-paper-default)',
  '@supports': {
    '(-webkit-touch-callout: none)': {
      WebkitTouchCallout: 'none',
    },
  },

  vars: {
    '--safe-area-inset-bottom': 'env(safe-area-inset-bottom)',
    '--safe-area-inset-left': 'env(safe-area-inset-left)',
    '--safe-area-inset-right': 'env(safe-area-inset-right)',
    '--safe-area-inset-top': 'env(safe-area-inset-top)',
  },
  WebkitTapHighlightColor: 'transparent',

  WebkitUserSelect: 'none',
})

globalStyle('#root', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
})

globalStyle('button', {
  padding: 0,
  margin: 0,
  color: 'inherit',
  background: 'none',
  border: 'none',
  outline: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
})

globalStyle('textarea, input', {
  outline: 'none',
  WebkitAppearance: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
})

globalStyle('h1, h2, h3, h4, p', {
  margin: 0,
})

globalStyle('ul, li, ol', {
  padding: 0,
  margin: 0,
  listStyle: 'none',
})

globalStyle('input', {
  background: 'transparent',
  border: 'none',
})

globalStyle('textarea', {
  resize: 'none',
  border: 'none',
  outline: 'none',
})

globalStyle('div', {
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
})

globalStyle('body, input, button, textarea', {
  fontFamily: `Pretendard`,
})
