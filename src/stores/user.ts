import { Schema } from 'amplify/data/resource'
import { atom } from 'jotai'

import { getCurrentUserInfo } from '~/hooks/login.hook'

export const currentLevel = atom<number>(1)
export const userInfo = atom<Schema['UserInfo']['type']>()
export const credit = atom<number>(0)
export const getUserInfo = atom(null, async (_get, set) => {
  const response = await getCurrentUserInfo()
  set(userInfo, response)
  set(credit, response.credit)
})
