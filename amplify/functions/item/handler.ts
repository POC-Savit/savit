
import type { Handler } from 'aws-lambda';
import { AllItem } from '../../../types/response/AllItem.type'
import { ItemType } from '../../../types/character.type';

export const handler: Handler = async (event, context): Promise<AllItem> => {
    return {
        head: [
            { name: 'BeachHat', price: 500, type: ItemType.HEAD, equipped: false, isOwned: false},
            { name: 'Bulb', price: 0, type: ItemType.HEAD, equipped: false,isOwned: false},
            { name: 'Cake', price: 0, type: ItemType.HEAD, equipped: false,isOwned: false},
            { name: 'Coin', price: 0, type: ItemType.HEAD, equipped: false,isOwned: false},
            { name: 'Crown', price: 0, type: ItemType.HEAD, equipped: false,isOwned: false},
            { name: 'Flowers', price: 0, type: ItemType.HEAD, equipped: false,isOwned: false},
            { name: 'Heart', price: 0, type: ItemType.HEAD, equipped: false,isOwned: false},
            { name: 'Purse', price: 0, type: ItemType.HEAD, equipped: false,isOwned: false},
            { name: 'Tulip', price: 0, type: ItemType.HEAD, equipped: false,isOwned: false},
        ],
        face: [
            { name: 'Band', price: 0, type: ItemType.FACE, equipped: false,isOwned: false},
            { name: 'Bubble', price: 0, type: ItemType.FACE, equipped: false,isOwned: false},
            { name: 'Earphone', price: 0, type: ItemType.FACE, equipped: false,isOwned: false},
            { name: 'Glasses', price: 0, type: ItemType.FACE, equipped: false,isOwned: false},
            { name: 'Headphones', price: 0, type: ItemType.FACE, equipped: false,isOwned: false},
            { name: 'Sunglasses', price: 0, type: ItemType.FACE, equipped: false,isOwned: false},
        ]
    }
};
