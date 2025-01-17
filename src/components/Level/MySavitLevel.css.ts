import { style } from '@vanilla-extract/css'

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
  },
])

export const myLevel = style({
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '800',
  lineHeight: 'normal',
  letterSpacing: '-0.64px',
})

export const leveltext = style({
  color: '#5872FF',
})

export const imageBox = style({
  width: '112px',
  height: '112px',
  background: '#F4F5FA',
  borderRadius: '42px',
})

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
})

export const levelBox = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  padding: '8px 16px',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
  color: '#5872FF',
  letterSpacing: '-0.72px',
  background: 'rgba(88, 114, 255, 0.20)',
  borderRadius: '24px',
})

export const levelBoxIcon = style({
  marginRight: '1.5px',
})

export const levelBoxText = style({
  transform: 'translateY(2px)',
})
