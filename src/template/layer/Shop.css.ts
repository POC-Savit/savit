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
