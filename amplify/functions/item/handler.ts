
import type { Handler } from 'aws-lambda';
import { AllItem } from '../../../types/response/AllItem.type'
import { ItemType } from '../../../types/character.type';

export const handler: Handler = async (event, context): Promise<AllItem> => {
    return {
        head: [
            { name: 'BeachHat', price: 0, path: 'models/BeachHat.glb', type: ItemType.HEAD},
            { name: 'Bulb', price: 0, path: 'models/Bulb.glb', type: ItemType.HEAD},
            { name: 'Cake', price: 0, path: 'models/Cake.glb', type: ItemType.HEAD},
            { name: 'Coin', price: 0, path: 'models/Coin.glb', type: ItemType.HEAD},
            { name: 'Crown', price: 0, path: 'models/Crown.glb', type: ItemType.HEAD},
            { name: 'Flowers', price: 0, path: 'models/Flowers.glb', type: ItemType.HEAD},
            { name: 'Heart', price: 0, path: 'models/Heart.glb', type: ItemType.HEAD},
            { name: 'Purse', price: 0, path: 'models/Purse.glb', type: ItemType.HEAD},
            { name: 'Tulip', price: 0, path: 'models/Tulip.glb', type: ItemType.HEAD},
        ],
        face: [
            { name: 'Band', price: 0, path: 'models/Band.glb', type: ItemType.FACE},
            { name: 'Bubble', price: 0, path: 'models/Bubble.glb', type: ItemType.FACE},
            { name: 'Earphone', price: 0, path: 'models/Earphone.glb', type: ItemType.FACE},
            { name: 'Glasses', price: 0, path: 'models/Glasses.glb', type: ItemType.FACE},
            { name: 'Headphones', price: 0, path: 'models/Headphones.glb', type: ItemType.FACE},
            { name: 'Sunglasses', price: 0, path: 'models/Sunglasses.glb', type: ItemType.FACE},
        ]
    }
};
