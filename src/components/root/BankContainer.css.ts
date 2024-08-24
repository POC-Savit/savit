import { style } from '@vanilla-extract/css'

export const container = style([
  {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    marginBottom: '24px',
  },
])

export const imgArea = style({
  width: '46px',
  height: '46px',
  borderRadius: '46px',
})

export const textArea = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
})

export const mainText = style({
  fontSize: '14px',
  fontWeight: 400,
  color: '#191919',
  letterSpacing: '-0.56px',
})

export const subText = style({
  fontSize: '16px',
  fontWeight: 600,
  color: '#191919',
  letterSpacing: '-0.64px',
})

export const subBoldText = style({
  color: '#5872FF',
})
