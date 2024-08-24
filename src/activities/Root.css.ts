import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  width: '100%',
  height: '100%',
})

export const logo = style({
  position: 'absolute',
  top: 12,
  left: 20.82,
  zIndex: 10,
})
