import type { PreSignUpTriggerHandler } from 'aws-lambda';

export const handler: PreSignUpTriggerHandler = async (event) => {
  const email = event.request.userAttributes['email'];
  event.response.autoConfirmUser = true
  event.response.autoVerifyEmail = true

  return event
};