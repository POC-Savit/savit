/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUserInfo = /* GraphQL */ `mutation CreateUserInfo(
  $condition: ModelUserInfoConditionInput
  $input: CreateUserInfoInput!
) {
  createUserInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserInfoMutationVariables,
  APITypes.CreateUserInfoMutation
>;
export const deleteUserInfo = /* GraphQL */ `mutation DeleteUserInfo(
  $condition: ModelUserInfoConditionInput
  $input: DeleteUserInfoInput!
) {
  deleteUserInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserInfoMutationVariables,
  APITypes.DeleteUserInfoMutation
>;
export const updateUserInfo = /* GraphQL */ `mutation UpdateUserInfo(
  $condition: ModelUserInfoConditionInput
  $input: UpdateUserInfoInput!
) {
  updateUserInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserInfoMutationVariables,
  APITypes.UpdateUserInfoMutation
>;
