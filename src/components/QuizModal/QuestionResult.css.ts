import { style } from '@vanilla-extract/css'

export const container = style([{}])

export const correct = style({
  marginBottom: '12px',
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '32px',
  color: '#191919',
  letterSpacing: '-0.88px',
})

export const desc = style({
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '28px',
  color: '#5F5F71',
  letterSpacing: '-0.72px',
})
