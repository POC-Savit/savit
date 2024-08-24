import { style } from '@vanilla-extract/css'

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'fit-content',
    padding: '32px 24px',
    backgroundColor: 'transparent',
  },
])

export const title = style({
  fontSize: '22px',
  fontWeight: 700,
  color: '#191919',
  textAlign: 'center',
  letterSpacing: '-0.88px',
})

export const titleBold = style({
  color: '#5872FF',
})

export const image = style({
  height: '200px',
})

export const badge = style({
  display: 'inline-flex',
  gap: '4px',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 16px',
  marginBottom: '27px',
  background: 'rgba(88, 114, 255, 0.20)',
  borderRadius: '24px',
})

export const icon = style({
  color: '#5872FF',
})

export const badgeText = style({
  paddingTop: '2px',
  fontSize: '18px',
  fontWeight: 600,
  color: '#5872FF',
  letterSpacing: '-0.72px',
})

export const button = style({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'calc(100% - 40px)',
  padding: '20px 16px',
  marginBottom: '20px',
  fontSize: '18px',
  fontWeight: 600,
  color: '#FFF',
  textAlign: 'right',
  letterSpacing: '-0.72px',
  cursor: 'pointer',
  background: '#667EFF',
  borderRadius: '20px',
})
