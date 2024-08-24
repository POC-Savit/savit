import { style } from '@vanilla-extract/css'

export const container = style([
  {
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '72px',
    padding: '0 24px 0 20px',
    background: '#fff',
    boxShadow: 'rgba(25, 25, 25, 0.05) 0px -4px 8px',
    transition: 'all 0.2s ease-in-out',
    transform: 'translateY(72px)',
  },
])

export const price = style({
  display: 'flex',
})

export const icon = style({
  color: '#FFC700',
})

export const text = style({
  paddingTop: '2px',
  marginLeft: '4px',
  fontSize: '20px',
  fontWeight: 600,
  color: '#5F5F71',
})

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  fontSize: '18px',
  fontWeight: '600',
  color: '#fff',
  cursor: 'pointer',
  background: '#5872FF',
  borderRadius: '20px',
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    transform: 'scale(1.1)',
  },
})

export const buttonText = style({
  paddingTop: '2px',
})
