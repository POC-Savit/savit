import { style } from '@vanilla-extract/css'

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '46px 24px 24px',
  },
])

export const titleArea = style({
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
