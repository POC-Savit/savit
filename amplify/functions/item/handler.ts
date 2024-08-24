
import type { Handler } from 'aws-lambda';
import { AllItem } from '../../../types/response/AllItem.type'
import { ItemType } from '../../../types/character.type';

export const handler: Handler = async (event, context): Promise<AllItem> => {
    return {
        head: [
            { name: 'BeachHat', price: 0, type: ItemType.HEAD},
            { name: 'Bulb', price: 0, type: ItemType.HEAD},
            { name: 'Cake', price: 0, type: ItemType.HEAD},
            { name: 'Coin', price: 0, type: ItemType.HEAD},
            { name: 'Crown', price: 0, type: ItemType.HEAD},
            { name: 'Flowers', price: 0, type: ItemType.HEAD},
            { name: 'Heart', price: 0, type: ItemType.HEAD},
            { name: 'Purse', price: 0, type: ItemType.HEAD},
            { name: 'Tulip', price: 0, type: ItemType.HEAD},
        ],
        face: [
            { name: 'Band', price: 0, type: ItemType.FACE},
            { name: 'Bubble', price: 0, type: ItemType.FACE},
            { name: 'Earphone', price: 0, type: ItemType.FACE},
            { name: 'Glasses', price: 0, type: ItemType.FACE},
            { name: 'Headphones', price: 0, type: ItemType.FACE},
            { name: 'Sunglasses', price: 0, type: ItemType.FACE},
        ]
    }
};
