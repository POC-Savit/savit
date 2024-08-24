
import type { Handler } from 'aws-lambda';
// import { AllItem } from '../../../types/response/AllItem.type'
import { ItemType } from '../../../types/character.type';
import { Amplify } from "aws-amplify";
import output from '../../../amplify_outputs.json'
// import {
//     createUserInfo
// } from "../graphql/mutations";
import {
    getUserInfo
} from "../graphql/queries";
import { generateClient } from 'aws-amplify/api';
import { Schema } from '../../data/resource';

// @ts-ignore
Amplify.configure(output)
// Amplify.configure(
//     {
//         API: {
//           GraphQL: {
//             endpoint: "",//env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
//             region: env.AWS_REGION,
//             defaultAuthMode: "iam",
//           },
//         },
//       },
//       {
//         Auth: {
//           credentialsProvider: {
//             getCredentialsAndIdentityId: async () => ({
//               credentials: {
//                 accessKeyId: env.AWS_ACCESS_KEY_ID,
//                 secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
//                 sessionToken: env.AWS_SESSION_TOKEN,
//               },
//             }),
//             clearCredentialsAndIdentityId: () => {
//               /* noop */
//             },
//           },
//         },
//       }
//     );

export const handler: Handler = async (event, context): Promise<string> => {

    const client = generateClient<Schema>({});
    const userInfo = await client.graphql({
        query: getUserInfo,
        variables: {
            id: ''
        },
      });
    console.log(userInfo)
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
