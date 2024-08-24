import { Schema } from 'amplify/data/resource'
import { generateClient } from 'aws-amplify/api'
import { ItemType } from 'types/character.type'
import { Item } from 'types/Item.type'
import { AllItem } from 'types/response/AllItem.type'

const client = generateClient<Schema>({
  authMode: 'userPool',
})

export const fetchUserInfo = () =>
  client.models.UserInfo.list().then((resp) => resp.data[0])

export const fetchItems = () =>
  client.queries
    .allItem()
    .then((resp) => JSON.parse(resp.data!!) as AllItem)

type ItemWithOwn = { isOwned: boolean; equipped: boolean } & Item

const hasItem = (userInfo: Schema['UserInfo']['type'], item: ItemWithOwn) => {
  const property = item.type === ItemType.FACE ? 'face' : 'head'

  return new Set(userInfo.character?.own?.[property] ?? []).has(item.name)
}

export const buyItem = async (item: ItemWithOwn) => {
  return fetchUserInfo().then((userInfo) => {
    if (hasItem(userInfo, item) || item.price > userInfo.credit) return

    userInfo.credit -= item.price
    const property = item.type === ItemType.FACE ? 'face' : 'head'
    userInfo.character?.own?.[property]?.push(item.name)
    return client.models.UserInfo.update(userInfo)
  })
}

export const equiItem = async (item: ItemWithOwn) => {
  return fetchUserInfo().then((userInfo) => {
    if (!hasItem(userInfo, item)) return

    const property = item.type === ItemType.FACE ? 'face' : 'head'
    if (userInfo.character?.current)
      userInfo.character!!.current!![property] = item.name
    return client.models.UserInfo.update(userInfo)
  })
}

export const changeLevel = async (desired: number) => fetchUserInfo()
    .then(userInfo => {
        userInfo.currentLevel = desired
        
        return client.models.UserInfo.update(userInfo)
    })

  export const unequipItem = async (type: ItemType) => {
    return fetchUserInfo().then((userInfo) => {
      const property = type === ItemType.FACE ? 'face' : 'head'
      if (userInfo.character?.current)
        userInfo.character!!.current!![property] = null
      return client.models.UserInfo.update(userInfo)
    })
  }
    