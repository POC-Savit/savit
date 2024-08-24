import { style } from '@vanilla-extract/css'

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
  color: '#fff',
  transform: 'translate(-50%, -50%)',
})
