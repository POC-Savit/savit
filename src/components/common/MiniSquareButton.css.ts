import { style } from '@vanilla-extract/css'

export const button = style({
  position: 'relative',
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  minWidth: '40px',
  height: '40px',
  padding: '8px',
  cursor: 'pointer',
  background: 'rgb(88,114,255, 0.2)',
  borderRadius: '10px',
  transition: 'all 0.3s ease-in-out',
  ':active': {
    opacity: 0.1,
  },
  ':disabled': {
    transform: 'none',
  },
})

export const icon = style({
  color: '#FFF',
})

export const text = style({
  top: '10px',
  paddingTop: '2px',
  paddingLeft: '4px',
  fontSize: '18px',
  fontWeight: 600,
  color: '#FFF',
  letterSpacing: '-0.72px',
})

export const selectedButton = style([
  button,
  {
    color: 'red',
    border: '3px solid red',
  },
])
