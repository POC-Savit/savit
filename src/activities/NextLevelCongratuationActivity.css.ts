import { style } from '@vanilla-extract/css'

export const background = style([
  {
    position: 'absolute',
    top: '-10%',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
])

export const imageWrapper = style({
  width: '300px',
})

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const container = style([
  {
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    alignItems: 'center',
    width: '100%',
    padding: '24px',
  },
])

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const title = style({
  marginBottom: '12px',
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  color: '#191919',
  letterSpacing: '-0.88px',
})

export const hilight = style({
  color: '#5872FF',
})

export const desc = style({
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '28px',
  color: '#5F5F71',
  textAlign: 'center',
  letterSpacing: '-0.72px',
})

export const buttonWrapper = style({
  width: '100%',
})

export const cta = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '20px 16px',
  marginBottom: '4px',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  color: '#FFF',
  letterSpacing: '-0.72px',
  background: '#667EFF',
  borderRadius: '20px',
})

export const nextButton = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '20px 16px',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  color: '#A2A3B0',
  letterSpacing: '-0.72px',
})
