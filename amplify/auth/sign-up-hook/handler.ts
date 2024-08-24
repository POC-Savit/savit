import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/sign-up-hook"
import { generate } from 'random-words'

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
  await client.graphql({
    query: createUserInfo,
    variables: {
      input: {
        userName: (generate(2) as string[]).join('-'),
        email: event.request.userAttributes.email, 
        character: {
            own: {
                face: [],
                head: [],
            },
            current: {}
        },
        credit: 1000 + Math.floor(Math.random() * 10000),
        currentLevel: Math.floor(Math.random() * MAXIMUM_LEVLE_ON_HACKATHON),
      },
    },
  });

  return event;
};