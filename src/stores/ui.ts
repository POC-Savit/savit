import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const loginStatus = atomWithStorage('login', false)
export const currentImage = atom('')
export const shareStatus = atom(false)
