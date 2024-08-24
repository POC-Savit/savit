import { style } from '@vanilla-extract/css'

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '16px 0',
  },
])

export const level = style({
  display: 'flex',
  gap: '8px',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  color: '#5F5F71',
  letterSpacing: '-0.56px',
})

export const levelText = style({
  width: '24px',
  fontWeight: '600',
})
