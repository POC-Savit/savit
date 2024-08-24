import { style } from '@vanilla-extract/css'

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
])

export const topLayer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50%',
})

export const bottomLayer = style({
  display: 'flex',
  flex: 1,
})

export const divider = style({
  height: '12px',
  backgroundColor: '#f4f5fa',
})
