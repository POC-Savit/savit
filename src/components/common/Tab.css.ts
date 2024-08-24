import { style } from '@vanilla-extract/css'

export const container = style({
  width: '100%',
  height: '57px',
  overflow: 'hidden',
  backgroundColor: '#E3ECFF',
})

export const list = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
})

export const item = style({
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  height: '100%',
})

export const button = style({
  width: '100%',
  height: '100%',
  transition: 'transform 0.5s',
})

export const text = style({
  display: 'block',
  fontSize: '18px',
  fontWeight: 500,
  color: '#A2A3B0',
  transition: 'all 0.5s',
  transform: 'scale(100%)',
})

export const selectedText = style([
  text,
  {
    fontWeight: 800,
    color: '#5872FF',
  },
])

export const indicator = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '50%',
  height: '3px',
  backgroundColor: '#5872FF',
  transition: 'transform 0.5s',
  transform: 'translateX(0%)',
})
