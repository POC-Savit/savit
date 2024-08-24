import { style } from '@vanilla-extract/css'

export const container = style([
  {
    padding: '46px 24px 24px',
  },
])

export const titleArea = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '12px',
})

export const imageBox = style({
  width: '112px',
  height: '112px',
  marginBottom: '12px',
  background: '#F4F5FA',
  borderRadius: '42px',
})

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
})

export const title = style({
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  color: '#5872FF',
  textAlign: 'center',
  letterSpacing: '-0.88px',
})

export const closeButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '20px 16px',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  color: '#A2A3B0',
  textAlign: 'right',
  letterSpacing: '-0.72px',
})
