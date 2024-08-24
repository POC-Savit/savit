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
export const getAsset = /* GraphQL */ `query GetAsset($id: String!) {
  getAsset(id: $id) {
    amount
    createdAt
    id
    name
    owner
    savingAsset {
      nextToken
      __typename
    }
    stockAsset {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAssetQueryVariables, APITypes.GetAssetQuery>;
export const getSavingAsset = /* GraphQL */ `query GetSavingAsset($id: String!) {
  getSavingAsset(id: $id) {
    asset {
      amount
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    balance
    createdAt
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSavingAssetQueryVariables,
  APITypes.GetSavingAssetQuery
>;
export const getStockAsset = /* GraphQL */ `query GetStockAsset($id: String!) {
  getStockAsset(id: $id) {
    amount
    asset {
      amount
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    createdAt
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStockAssetQueryVariables,
  APITypes.GetStockAssetQuery
>;
export const getUserInfo = /* GraphQL */ `query GetUserInfo($id: ID!) {
  getUserInfo(id: $id) {
    character {
      __typename
    }
    createdAt
    credit
    currentLevel
    email
    id
    updatedAt
    userName
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserInfoQueryVariables,
  APITypes.GetUserInfoQuery
>;
export const listAssets = /* GraphQL */ `query ListAssets(
  $filter: ModelAssetFilterInput
  $id: String
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAssets(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      amount
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAssetsQueryVariables,
  APITypes.ListAssetsQuery
>;
export const listSavingAssets = /* GraphQL */ `query ListSavingAssets(
  $filter: ModelSavingAssetFilterInput
  $id: String
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSavingAssets(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      balance
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSavingAssetsQueryVariables,
  APITypes.ListSavingAssetsQuery
>;
export const listStockAssets = /* GraphQL */ `query ListStockAssets(
  $filter: ModelStockAssetFilterInput
  $id: String
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listStockAssets(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      amount
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStockAssetsQueryVariables,
  APITypes.ListStockAssetsQuery
>;
export const listUserInfos = /* GraphQL */ `query ListUserInfos(
  $filter: ModelUserInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      credit
      currentLevel
      email
      id
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
