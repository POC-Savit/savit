import { style } from '@vanilla-extract/css'

export const container = style({
  width: '100%',
  height: '460px',
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '42px 24px 20px',
})

export const title = style({
  width: '100%',
  fontSize: '22px',
  fontWeight: 600,
  color: '#191919',
  textAlign: 'left',
  letterSpacing: '-0.88px',
})

export const subTitle = style({
  marginTop: '12px',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  color: '#A2A3B0',
  letterSpacing: '-0.64px',
})

export const image = style({
  width: '150px',
  height: '150px',
  padding: '24px 0 32px',
})

export const button = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '354px',
  padding: '20px 16px',
  fontSize: '18px',
  fontWeight: 600,
  color: '#fff',
  letterSpacing: '-0.72px',
  cursor: 'pointer',
  background: '#667EFF',
  borderRadius: '20px',
})

export const whiteButton = style([
  button,
  {
    marginTop: '4px',
    color: '#A2A3B0',
    backgroundColor: 'white',
  },
])
