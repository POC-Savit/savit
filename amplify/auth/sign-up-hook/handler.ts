import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/sign-up-hook"
import { generate } from 'random-words'
import { v4 as uuid } from 'uuid'
import { randomInt } from '../../../util/random'

import {
    createUserInfo,
} from "./graphql/mutations";
import { StockAsset, SavingAsset } from "../../../types/Asset";

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

const client = generateClient<Schema>({
  authMode: "iam",
});

const MAXIMUM_LEVLE_ON_HACKATHON = 5

export const handler: PostConfirmationTriggerHandler = async (event) => {
  const owner = `${event.request.userAttributes.sub}::${event.userName}`

  const savingAsset = [...Array(randomInt(5)).keys()].map(() => fetchSavingAsset(owner))
  const stockAsset = [...Array(randomInt(5)).keys()].map(() => fetchStockAsset(owner))
  console.log(savingAsset, stockAsset)

  await client.graphql({
    query: createUserInfo,
    variables: {
      input: {
        owner,
        userName: event.request.userAttributes.email,
        email: event.request.userAttributes.email, 
        character: {
            own: {
                face: [],
                head: [],
            },
            current: {}
        },
        credit: 1000 +randomInt(10000),
        currentLevel: randomInt(MAXIMUM_LEVLE_ON_HACKATHON),
        asset: JSON.stringify({
          savingAsset: savingAsset, 
          stockAsset: stockAsset,
        })
      },
    },
  });

  return event;
};

const banks = ['kb', 'kakao', 'hana', 'toss']

const fetchSavingAsset = (owner: string): SavingAsset => ({
  name: `${banks[randomInt(4)]}`,
  balance: 10000 + randomInt(100000000),
})

const fetchStockAsset = (owner: string): StockAsset=> ({
  name: `${generate()}`,
  amount: randomInt(100),
})