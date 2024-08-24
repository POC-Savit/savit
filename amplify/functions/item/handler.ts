
import type { Handler } from 'aws-lambda';
import { AllItem } from '../../../types/response/AllItem.type'
import { ItemType } from '../../../types/character.type';

export const handler: Handler = async (event, context): Promise<string> => {
    return JSON.stringify({
        head: [
            { name: 'BeachHat', price: 50, type: ItemType.HEAD},
            { name: 'Bulb', price: 50, type: ItemType.HEAD},
            { name: 'Cake', price: 50, type: ItemType.HEAD},
            { name: 'Coin', price: 50, type: ItemType.HEAD},
            { name: 'Crown', price: 50, type: ItemType.HEAD},
            { name: 'Flowers', price: 50, type: ItemType.HEAD},
            { name: 'Heart', price: 50, type: ItemType.HEAD},
            { name: 'Purse', price: 50, type: ItemType.HEAD},
            { name: 'Tulip', price: 50, type: ItemType.HEAD},
        ],
        face: [
            { name: 'Band', price: 50, type: ItemType.FACE},
            { name: 'Bubble', price: 50, type: ItemType.FACE},
            { name: 'Earphone', price: 50, type: ItemType.FACE},
            { name: 'Glasses', price: 50, type: ItemType.FACE},
            { name: 'Headphones', price: 50, type: ItemType.FACE},
            { name: 'Sunglasses', price: 50, type: ItemType.FACE},
        ]
    })
};
