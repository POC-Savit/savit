import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  alignItems: 'center',
})

export const button = style({
  position: 'relative',
  width: '100px',
  aspectRatio: '1/1',
  textAlign: 'center',
  cursor: 'pointer',
  background: '#F4F5FA',
  borderRadius: '20px',
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    transform: 'scale(1.1)',
  },
  ':active': {
    backgroundColor: 'black',
  },
  ':disabled': {
    backgroundColor: 'lightgray',
    transform: 'none',
  },
})

export const selectedButton = style([
  button,
  {
    background: '#A8B3F7',
  },
])

export const icon = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  zIndex: 2,
  width: '36px',
  height: '36px',
  color: '#fff',
  transform: 'translate(-50%, -50%)',
})

export const selectedImage = style([
  {
    opacity: 0.5,
  },
])

export const owned = style({
  fontSize: '12px',
  fontWeight: 600,
  color: '#D9DCE6',
  letterSpacing: '-0.48px',
})

export const price = style({
  display: 'flex',
  fontSize: '14px',
  fontWeight: 600,
  color: '#5F5F71',
  letterSpacing: '-0.56px',
})

export const priceIcon = style({
  width: '16px',
  height: '16px',
  color: '#FFC700',
})
