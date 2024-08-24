import { style } from '@vanilla-extract/css'

import { button } from '~/components/common/MiniSquareButton.css'

export const container = style([
  {
    position: 'relative',
    width: '100%',
    height: '300px',
  },
])

export const point = style([
  button,
  {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
  },
])

export const returnButton = style([
  button,
  {
    position: 'absolute',
    right: '20px',
    bottom: '20px',
  },
])

export const text = style({
  top: '10px',
  paddingTop: '2px',
  paddingLeft: '4px',
  fontSize: '18px',
  fontWeight: 600,
  color: '#FFF',
  letterSpacing: '-0.72px',
})
