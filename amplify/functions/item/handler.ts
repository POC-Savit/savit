
import type { Handler } from 'aws-lambda';
// import { AllItem } from '../../../types/response/AllItem.type'
import { ItemType } from '../../../types/character.type';
// import { Amplify } from "aws-amplify";
// import output from '../../../amplify_outputs.json'
// import {
//     createUserInfo
// } from "../graphql/mutations";
// import {
//     getUserInfo
// } from "../graphql/queries";
// import { generateClient } from 'aws-amplify/api';
// import { Schema } from '../../data/resource';

// Amplify.configure(
//     {
//       API: {
//         GraphQL: {
//           endpoint: process.env.AMPLIFY_DATA_GRAPHQL_ENDPOINT as string,
//           region: process.env.AWS_REGION,
//           defaultAuthMode: "iam",
//         },
//       },
//     },
//     {
//       Auth: {
//         credentialsProvider: {
//           getCredentialsAndIdentityId: async () => ({
//             credentials: {
//               accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
//               secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
//               sessionToken: process.env.AWS_SESSION_TOKEN as string,
//             },
//           }),
//           clearCredentialsAndIdentityId: () => {
//             /* noop */
//           },
//         },
//       },
//     },
//   );
  

export const handler: Handler = async (event, context): Promise<string> => {
    console.log('start')
    // const client = generateClient<Schema>({});
    // console.log('start1')
    // const userInfo = await client.graphql({
    //     query: getUserInfo,
    //     variables: {
    //         id: ''
    //     },
    //   }).catch(console.log);
    // console.log('start2')
    // console.log(userInfo)
    return JSON.stringify({
        head: [
            { name: 'BeachHat', price: 50, type: ItemType.HEAD},
            { name: 'Bulb', price: 40, type: ItemType.HEAD},
            { name: 'Cake', price: 10, type: ItemType.HEAD},
            { name: 'Coin', price: 30, type: ItemType.HEAD},
            { name: 'Crown', price: 30, type: ItemType.HEAD},
            { name: 'Flowers', price: 10, type: ItemType.HEAD},
            { name: 'Heart', price: 20, type: ItemType.HEAD},
            { name: 'Purse', price: 30, type: ItemType.HEAD},
            { name: 'Tulip', price: 10, type: ItemType.HEAD},
        ],
        face: [
            { name: 'Band', price: 40, type: ItemType.FACE},
            { name: 'Bubble', price: 10, type: ItemType.FACE},
            { name: 'Earphone', price: 20, type: ItemType.FACE},
            { name: 'Glasses', price: 40, type: ItemType.FACE},
            { name: 'Headphones', price: 10, type: ItemType.FACE},
            { name: 'Sunglasses', price: 50, type: ItemType.FACE},
        ]
    })
};
