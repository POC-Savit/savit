import { style } from '@vanilla-extract/css'

export const container = style([
  {
    height: '100%',
  },
])

export const topLayer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '35px',
  alignItems: 'center',
  padding: '33px 20px 26px',
})

export const bottomLayer = style({
  padding: '24px 20px',
})

export const divider = style({
  height: '12px',
  backgroundColor: '#f4f5fa',
})
