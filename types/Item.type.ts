import { ItemType } from './character.type'

export interface Item { 
    name: string,
    price: number,
    path: string,
    type: ItemType,
}