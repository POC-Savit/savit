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
    createAsset,
    createSavingAsset,
    createStockAsset,
} from "./graphql/mutations";

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
  console.log(owner)
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
      },
    },
  });
  console.log('created UserInfo')

  await client.graphql({
    query: createAsset,
    variables: {
      input: {
        id: owner,
      },
    },
  });
  console.log('created Asset')

  for (let i = 0; i < randomInt(5); ++i) {
    await fetchSavingAsset(owner)
      .catch(console.log)
  }
  console.log('created SavingAsset')

  for (let i = 0; i < randomInt(5); ++i) { 
    await fetchStockAsset(owner)
      .catch(console.log)
  }
  console.log('created StockAsset')

  return event;
};

const fetchSavingAsset = async (owner: string) => client.graphql({
  query: createSavingAsset,
  variables: {
    input: {
      id: uuid(),
      owner,
      name: `${generate()}은행`,
      balance: 10000 + randomInt(100000000),
    },
  },
});

const fetchStockAsset = async (owner: string) => client.graphql({
  query: createStockAsset,
  variables: {
    input: {
      id: uuid(),
      owner,
      name: `${generate()}은행`,
      amount: randomInt(100),
    },
  },
});
