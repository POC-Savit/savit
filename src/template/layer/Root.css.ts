import { style } from '@vanilla-extract/css'

import { button } from '~/components/common/MiniSquareButton.css'

export const container = style([
  {
    position: 'relative',
    width: '100%',
    height: '300px',
  },
])

export const stair = style([
  button,
  {
    position: 'absolute',
    bottom: '15px',
    left: '20px',
  },
])

export const share = style([
  button,
  {
    position: 'absolute',
    right: '75px',
    bottom: '15px',
  },
])

export const shop = style([
  button,
  {
    position: 'absolute',
    right: '20px',
    bottom: '15px',
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
