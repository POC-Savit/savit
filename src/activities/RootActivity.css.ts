import { style } from '@vanilla-extract/css'

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
})

export const logo = style({
  position: 'absolute',
  top: 12,
  left: 20.82,
  zIndex: 10,
})
