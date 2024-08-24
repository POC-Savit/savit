import { style } from '@vanilla-extract/css'

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
  },
])

export const title = style({
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
  color: '#191919',
  letterSpacing: '-0.72px',
})

export const mission = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
  color: '#5F5F71',
  letterSpacing: '-0.64px',
})

export const missionLeft = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
})
