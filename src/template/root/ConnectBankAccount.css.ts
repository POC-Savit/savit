import { style } from '@vanilla-extract/css'

export const container = style([
  {
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: '#fff',
  },
])

export const text = style({
  fontSize: '18px',
  fontWeight: 600,
  color: '#191919',
  letterSpacing: '-0.72px',
})

export const boldText = style({
  color: '#5872FF',
})

export const button = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '142px',
  padding: '16px',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 600,
  color: '#FFF',
  textAlign: 'right',
  letterSpacing: '-0.72px',
  cursor: 'pointer',
  background: '#5872FF',
  borderRadius: '20px',
})
