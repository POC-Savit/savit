import type { Nullable } from 'type-util'

import { atom } from 'jotai'
import { ItemType } from 'types/character.type'

import {
  fetchItemsWithUserinfo,
  ItemWithOwn,
  unequipItem,
} from '~/hooks/queris'

import { User } from '.'

export type HeadType =
  | 'BeachHat'
  | 'Bulb'
  | 'Cake'
  | 'Coin'
  | 'Crown'
  | 'Flowers'
  | 'Heart'
  | 'Purse'
  | 'Tulip'
export type FaceType =
  | 'Band'
  | 'Bubble'
  | 'Earphone'
  | 'Glasses'
  | 'Headphones'
  | 'Sunglasses'
export type EventType = 'Bomb' | 'UFO'

// export const baseBodyUrl = atom('')
// export const eventUrls = atom<ObjectInType<EventType>>({
//   Bomb: '',
//   UFO: '',
// })
// export const faceUrls = atom<ObjectInType<FaceType>>({
//   Band: '',
//   Bubble: '',
//   Earphone: '',
//   Glasses: '',
//   Headphones: '',
//   Sunglasses: '',
// })
// export const headUrls = atom<ObjectInType<HeadType>>({
//   BeachHat: '',
//   Bulb: '',
//   Cake: '',
//   Coin: '',
//   Crown: '',
//   Flowers: '',
//   Heart: '',
//   Purse: '',
//   Tulip: '',
// })
// export const fetched = atom(false)

// export const setUrls = atom(null, async (get, set) => {
//   set(baseBodyUrl, await getObjectUrl('models/BaseBody.glb'))

//   let fetchedEventUrls = {} as ObjectInType<EventType>
//   await Object.keys(get(eventUrls)).forEach(async (item) => {
//     fetchedEventUrls[item as EventType] = await getObjectUrl(
//       `models/event/${item}.glb`
//     )
//   })
//   set(eventUrls, fetchedEventUrls)

//   let fetchedFaceUrls = {} as ObjectInType<FaceType>
//   await Object.keys(get(faceUrls)).forEach(async (item) => {
//     fetchedFaceUrls[item as FaceType] = await getObjectUrl(
//       `models/face/${item}.glb`
//     )
//   })
//   set(faceUrls, fetchedFaceUrls)

//   let fetchedHeadUrls = {} as ObjectInType<HeadType>
//   await Object.keys(get(headUrls)).forEach(async (item) => {
//     fetchedHeadUrls[item as HeadType] = await getObjectUrl(
//       `models/face/${item}.glb`
//     )
//   })
//   set(headUrls, fetchedHeadUrls)
//   set(fetched, true)
// })

// export const jotaiStore = createStore()

export const position = atom({ x: 0, y: 0, z: 3 })
export const level = atom(0)
export const isAnimation = atom(true)
export const isRotate = atom(false)
export const isOutline = atom(false)

export const reset = atom(null, (_get, set) => {
  set(faceItem, null)
  set(headItem, null)
  set(position, { x: 0, y: 0, z: 3 })
  set(level, 0)
  set(isAnimation, true)
  set(isRotate, false)
  set(isOutline, true)
})

export const faceItem = atom<Nullable<FaceType>>(null)
export const headItem = atom<Nullable<HeadType>>(null)

export const items = atom<ItemWithOwn[]>([])
export const getItems = atom(null, async (_get, set) => {
  const response = await fetchItemsWithUserinfo()
  set(items, response)
  await set(User.getUserInfo)
  response.forEach((item) => {
    if (item.equipped) {
      if (item.type === 0) {
        set(headItem, item.name as HeadType)
        return
      }
      set(faceItem, item.name as FaceType)
    }
  })
})

export const unEquip = atom(null, async (_get, set, type: ItemType) => {
  await unequipItem(type === ItemType.HEAD ? ItemType.HEAD : ItemType.FACE)
  if (type === ItemType.HEAD) {
    set(headItem, null)
    return
  }
  set(faceItem, null)
})

export const currentSelected = atom<Nullable<ItemWithOwn>>(null)
