/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserInfo = /* GraphQL */ `subscription OnCreateUserInfo(
  $filter: ModelSubscriptionUserInfoFilterInput
  $owner: String
) {
  onCreateUserInfo(filter: $filter, owner: $owner) {
    asset
    character {
      __typename
    }
    createdAt
    credit
    currentLevel
    email
    id
    owner
    updatedAt
    userName
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserInfoSubscriptionVariables,
  APITypes.OnCreateUserInfoSubscription
>;
export const onDeleteUserInfo = /* GraphQL */ `subscription OnDeleteUserInfo(
  $filter: ModelSubscriptionUserInfoFilterInput
  $owner: String
) {
  onDeleteUserInfo(filter: $filter, owner: $owner) {
    asset
    character {
      __typename
    }
    createdAt
    credit
    currentLevel
    email
    id
    owner
    updatedAt
    userName
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserInfoSubscriptionVariables,
  APITypes.OnDeleteUserInfoSubscription
>;
export const onUpdateUserInfo = /* GraphQL */ `subscription OnUpdateUserInfo(
  $filter: ModelSubscriptionUserInfoFilterInput
  $owner: String
) {
  onUpdateUserInfo(filter: $filter, owner: $owner) {
    asset
    character {
      __typename
    }
    createdAt
    credit
    currentLevel
    email
    id
    owner
    updatedAt
    userName
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserInfoSubscriptionVariables,
  APITypes.OnUpdateUserInfoSubscription
>;
