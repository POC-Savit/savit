import { style } from '@vanilla-extract/css'

import { button } from '~/components/common/MiniSquareButton.css'

export const container = style([
  {
    position: 'relative',
    width: '100%',
    height: '300px',
  },
])

export const toast = style({
  position: 'fixed',
  top: '0px',
  left: '50%',
  zIndex: 100,
  display: 'inline-flex',
  gap: '4px',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'max-content',
  padding: '12px 20px',
  background: '#FFF',
  borderRadius: '24px',
  boxShadow: '0px 0px 10px 0px rgba(88, 114, 255, 0.20)',
  transition: 'all 0.2s ease-in-out',
  transform: 'translate(-50%, -100%)',
})

export const icon = style({
  color: '#FFC700',
})

export const info = style({
  position: 'fixed',
  top: '0px',
  left: '50%',
  zIndex: 100,
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  width: 'max-content',
  padding: '12px 20px',
  fontSize: '18px',
  fontWeight: 600,
  color: '#191919',
  letterSpacing: '-0.72px',
  background: 'rgba(255, 255, 255, 0.70)',
  borderRadius: '24px',
  boxShadow: '0px 0px 10px 0px rgba(88, 114, 255, 0.20)',
  transition: 'all 0.2s ease-in-out',
  transform: 'translate(-50%, -100%)',
})

export const stair = style([
  button,
  {
    position: 'absolute',
    bottom: '15px',
    left: '20px',
  },
])

export const share = style([
  button,
  {
    position: 'absolute',
    right: '75px',
    bottom: '15px',
  },
])

export const shop = style([
  button,
  {
    position: 'absolute',
    right: '20px',
    bottom: '15px',
  },
])

export const text = style({
  top: '10px',
  paddingTop: '2px',
  paddingLeft: '4px',
  fontSize: '18px',
  fontWeight: 600,
  color: '#FFF',
  letterSpacing: '-0.72px',
})

// const shake = keyframes({
//   '0%': { transform: 'translate(1px, 1px) rotate(0deg);' },
//   '10%': { transform: 'translate(-1px, -2px) rotate(-1deg);' },
//   '100%': { transform: 'translate(1px, -2px) rotate(-1deg);' },
//   '20%': { transform: 'translate(-3px, 0px) rotate(1deg);' },
//   '30%': { transform: 'translate(3px, 2px) rotate(0deg);' },
//   '40%': { transform: 'translate(1px, -1px) rotate(1deg);' },
//   '50%': { transform: 'translate(-1px, 2px) rotate(-1deg);' },
//   '60%': { transform: 'translate(-3px, 1px) rotate(0deg);' },
//   '70%': { transform: 'translate(3px, 1px) rotate(-1deg);' },
//   '80%': { transform: 'translate(-1px, -1px) rotate(1deg);' },
//   '90%': { transform: 'translate(1px, 2px) rotate(0deg);' },
// })

export const stairShake = style([stair])

export const shareShake = style([share])

export const shopShake = style([shop])
