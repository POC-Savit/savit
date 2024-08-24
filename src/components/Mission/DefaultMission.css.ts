import { style } from '@vanilla-extract/css'

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
])

export const texts = style({
  marginTop: '32px',
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  color: '#191919',
  letterSpacing: '-0.88px',
})

export const hilight = style({
  marginTop: '4px',
  color: '#5872FF',
})

export const imageWrapper = style({
  width: '317px',
  height: '401px',
})

export const img = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
})

export const desc = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '20px 16px',
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  color: '#A2A3B0',
  textAlign: 'right',
  letterSpacing: '-0.56px',
})

export const button = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '354px',
  padding: '20px 16px',
  fontFamily: 'Pretendard',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  color: '#FFF',
  textAlign: 'right',
  letterSpacing: '-0.72px',
  background: '#667EFF',
  borderRadius: '20px',
  transition: 'all 0.3s ease-in-out',
  ':active': {
    opacity: 0.1,
  },
})

export const cancelButton = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '20px 16px',
  marginBottom: '32px',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  color: '#A2A3B0',
  letterSpacing: '-0.72px',
})
