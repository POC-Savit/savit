import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
})

export const mobileWrapper = style({
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
  height: '100%',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
})
