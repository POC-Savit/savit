/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const allItem = /* GraphQL */ `query AllItem {
  allItem
}
` as GeneratedQuery<APITypes.AllItemQueryVariables, APITypes.AllItemQuery>;
export const getUserInfo = /* GraphQL */ `query GetUserInfo($id: ID!) {
  getUserInfo(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserInfoQueryVariables,
  APITypes.GetUserInfoQuery
>;
export const listUserInfos = /* GraphQL */ `query ListUserInfos(
  $filter: ModelUserInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      asset
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserInfosQueryVariables,
  APITypes.ListUserInfosQuery
>;
