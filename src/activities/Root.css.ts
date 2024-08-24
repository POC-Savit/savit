import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100%',
  height: '100%',
})
