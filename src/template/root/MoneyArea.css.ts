import { style } from '@vanilla-extract/css'

export const container = style({
  zIndex: 1,
  width: 'calc(100% - 40px)',
  height: '100%',
  padding: '24px 20px 20px 20px',
  overflow: 'auto',
  background: '#fff',
})

export const topContainer = style({
  width: '100%',
})

export const titleText = style({
  fontSize: '18px',
  fontWeight: 600,
  color: '#191919',
  letterSpacing: '-0.72px',
})

export const titleTextBold = style({
  color: '#5872FF',
})

export const moneyArea = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: '12px',
  marginBottom: '11.5px',
})

export const icon = style({
  width: '26px',
  height: '26px',
  color: '#FFC700',
})

export const moneyText = style({
  paddingTop: '2px',
  marginLeft: '6px',
  fontSize: '30px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  color: '#191919',
  letterSpacing: '-1.2px',
})

export const savedMoneyText = style({
  fontSize: '14px',
  fontWeight: 500,
  color: '#A2A3B0',
  letterSpacing: '-0.56px',
})

export const divider = style({
  width: 'calc(100% - 14px)',
  height: '1px',
  margin: '27.5px 7px 24px',
  background: '#D9DCE6',
})

export const bottomContainer = style({
  width: 'calc(100% - 1px)',
  paddingRight: '1px',
})

export const titleArea = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '16px',
})

export const bottomTitleText = style({
  fontSize: '16px',
  fontWeight: 600,
  color: '#191919',
  letterSpacing: '-0.64px',
})

export const bottomTitleTextLink = style([
  bottomTitleText,
  {
    color: '#5872FF',
  },
])
