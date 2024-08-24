
import { Schema } from 'amplify/data/resource'
import { generateClient } from 'aws-amplify/api'
import { AllItem } from 'types/response/AllItem.type'
import { Item } from 'types/Item.type'
import { ItemType } from 'types/character.type'


const client = generateClient<Schema>({
  authMode: 'userPool',
})

export const fetchUserInfo = () => client.models.UserInfo.list()
    .then(resp => resp.data[0])

export const fetchItems = () => client.queries.allItem({ authMode: 'apiKey'})
    .then((resp) => JSON.parse(resp.data!!) as AllItem)

type ItemWithOwn = Item & { isOwned: boolean, equipped: boolean }

export const fetchItemsWithUserinfo = () => Promise.all([fetchItems(), fetchUserInfo()])
    .then(([items, userIfno]) => {
        return [
            ...items.face.map(item => ({
                ...item,
                isOwned: item.name in (userIfno.character?.own?.face ?? []),
                equipped: item.name === userIfno.character?.current?.face,
            }) as ItemWithOwn),
            ...items.head.map(item => ({
                ...item,
                isOwned: item.name in (userIfno.character?.own?.head ?? []),
                equipped: item.name === userIfno.character?.current?.head,
            }) as ItemWithOwn),
        ]
    }) 


export const buyItem = async (item: ItemWithOwn) => {
    return fetchUserInfo()
        .then((userInfo) => {
            if (item.name in (userInfo.character?.own ?? []) || 
                item.price > userInfo.credit
            ) return
            
            userInfo.credit -= item.price
            const property = item.type === ItemType.FACE ? 'face' : 'head'
            userInfo.character?.own?.[property]?.push(item.name)
            return userInfo
        })
}
