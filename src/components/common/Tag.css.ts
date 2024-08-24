import { style } from '@vanilla-extract/css'

export const container = style([
  {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 14px',
    marginRight: '8px',
    fontSize: '16px',
    color: '#A2A3B0',
    cursor: 'pointer',
    background: '#F4F5FA',
    borderRadius: '20px',
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
])

export const selected = style([
  container,
  {
    color: '#FFF',
    background: '#5872FF',
  },
])
