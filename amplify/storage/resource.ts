import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'savit',
  access: (allow) => ({
    'models/*': [
      allow.guest.to(['read']),
    ],
  })
});
