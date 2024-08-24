import { style } from '@vanilla-extract/css'

export const container = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100px',
    marginTop: '10px',
    marginBottom: '21px',
    background: '#E3ECFF',
    borderRadius: '20px',
  },
])

export const titleArea = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
})

export const title = style({
  fontSize: '14px',
  fontWeight: 500,
  color: '#7E7E89',
  letterSpacing: '-0.56px',
})

export const subTitle = style({
  fontSize: '18px',
  fontWeight: 700,
  color: '#5872FF',
  letterSpacing: '-0.72px',
})
