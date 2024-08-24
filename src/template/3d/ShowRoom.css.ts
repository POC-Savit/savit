import { style } from '@vanilla-extract/css'

export const showRoom = style({
  position: 'relative',
  width: '100%',
  height: '300px',
  backgroundColor: '#E3ECFF',
})

export const map = style({
  position: 'absolute',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  transition: 'all 3s ease-in-out',
  transform: 'translateY(0)',
})
