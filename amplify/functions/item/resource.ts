import { defineFunction } from '@aws-amplify/backend';

export const allItemList = defineFunction({
    // optionally specify a name for the Function (defaults to directory name)
    name: 'all-item-list',
    // optionally specify a path to your handler (defaults to "./handler.ts")
    entry: './handler.ts',

});