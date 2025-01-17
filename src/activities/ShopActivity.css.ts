import { style } from '@vanilla-extract/css'

export const container = style([
  {
    height: '100%',
    overflow: 'hidden',
  },
])

export const tags = style({
  display: 'flex',
  width: 'calc(100% - 40px)',
  padding: '20px 20px 10px 20px',
})

export const buttons = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, auto))',
  gap: '20px 10px',
  rowGap: '20px',
  justifyContent: 'space-between',
  maxHeight: 'calc(100% - 446.5px)',
  padding: '12px 27px',
  overflow: 'auto',
  ':after': {
    width: '100px',
    content: '',
  },
})
export const bottomContainer = style({
  position: 'relative',
  zIndex: 1,
  height: '100%',
  overflow: 'hidden',
  background: '#fff',
})
