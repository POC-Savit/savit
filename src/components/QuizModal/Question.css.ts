import { style } from '@vanilla-extract/css'

export const container = style([{}])

export const question = style({
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '32px',
  color: '#191919',
  letterSpacing: '-0.88px',
})

export const answerArea = style({})

export const oxButton = style({
  display: 'flex',
  justifyContent: 'space-between',
})

export const answerButton = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '145px',
  height: '130px',
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  textAlign: 'center',
  letterSpacing: '-0.88px',
  cursor: 'pointer',
  borderRadius: '32px',
  transition: 'all 0.3s ease-in-out',
  ':active': {
    opacity: 0.1,
  },
})
