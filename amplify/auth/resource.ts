import { defineAuth } from '@aws-amplify/backend';
import { signUpHook } from './sign-up-hook/resource';
import { preSignUp } from './pre-sign-up/resource';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true
  },
  triggers: {
    postConfirmation: signUpHook,
    preSignUp,
  }
});
