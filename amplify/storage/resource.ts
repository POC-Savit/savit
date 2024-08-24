import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'savit',
  access: (allow) => ({
    'models/{entity_id}': [
      allow.guest.to(['read']),
    ],
  })
});
