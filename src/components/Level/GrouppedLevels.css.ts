import { style } from '@vanilla-extract/css'

export const container = style([
  {
    display: 'flex',
    gap: '14px',
    padding: '17px 0',
  },
])

export const left = style({})

export const imageWrapper = style({
  boxSizing: 'border-box',
  width: '46px',
  height: '46px',
  padding: '5px',
  backgroundColor: '#F4F5FA',
  borderRadius: '17.25px',
})

export const img = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const right = style({})

export const title = style({
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
  color: '#191919',
  letterSpacing: '-0.64px',
})
