
import type { Handler } from 'aws-lambda';
import { ItemType } from '../../../types/character.type';
import { Amplify } from "aws-amplify";

import { env } from '$amplify/env/all-item-list'

import {
    getUserInfo
} from "../graphql/queries";
import { generateClient } from 'aws-amplify/api';
import { Schema } from '../../data/resource';

Amplify.configure(
    {
        API: {
          GraphQL: {
            endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
            region: env.AWS_REGION,
            defaultAuthMode: "iam",
          },
        },
      },
      {
        Auth: {
          credentialsProvider: {
            getCredentialsAndIdentityId: async () => ({
              credentials: {
                accessKeyId: env.AWS_ACCESS_KEY_ID,
                secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
                sessionToken: env.AWS_SESSION_TOKEN,
              },
            }),
            clearCredentialsAndIdentityId: () => {
              /* noop */
            },
          },
        },
      }
    );
    
    const client = generateClient<Schema>({});
export const handler: Handler = async (event, context): Promise<string> => {
    const userName = event.identity.claims.username
    
    const userInfo = await client.graphql({
        query: getUserInfo,
        variables: {
          id: userName
        },
      }).catch(console.log)
      .then(resp => resp?.data?.getUserInfo as Schema["UserInfo"]["type"]);
      
      if (!userInfo) return ''
      
    return JSON.stringify([ 
        ...[
            { name: 'BeachHat', price: 50, type: ItemType.HEAD},
            { name: 'Bulb', price: 40, type: ItemType.HEAD},
            { name: 'Cake', price: 10, type: ItemType.HEAD},
            { name: 'Coin', price: 30, type: ItemType.HEAD},
            { name: 'Crown', price: 30, type: ItemType.HEAD},
            { name: 'Flowers', price: 10, type: ItemType.HEAD},
            { name: 'Heart', price: 20, type: ItemType.HEAD},
            { name: 'Purse', price: 30, type: ItemType.HEAD},
            { name: 'Tulip', price: 10, type: ItemType.HEAD},
        ].map(
          (item) =>
            ({
              ...item,
              isOwned: new Set (userInfo.character?.own?.face ?? []).has(item.name),
              equipped: item.name === userInfo.character?.current?.face,
            })
        ),
        ...[
            { name: 'Band', price: 40, type: ItemType.FACE},
            { name: 'Bubble', price: 10, type: ItemType.FACE},
            { name: 'Earphone', price: 20, type: ItemType.FACE},
            { name: 'Glasses', price: 40, type: ItemType.FACE},
            { name: 'Headphones', price: 10, type: ItemType.FACE},
            { name: 'Sunglasses', price: 50, type: ItemType.FACE},
        ].map(
          (item) =>
            ({
              ...item,
              isOwned: new Set(userInfo.character?.own?.head ?? []).has(item.name),
              equipped: item.name === userInfo.character?.current?.head,
            })
        ),
    ])
};
