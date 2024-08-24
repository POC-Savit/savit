/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAsset = /* GraphQL */ `subscription OnCreateAsset(
  $filter: ModelSubscriptionAssetFilterInput
  $owner: String
) {
  onCreateAsset(filter: $filter, owner: $owner) {
    createdAt
    id
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
` as GeneratedSubscription<
  APITypes.OnCreateAssetSubscriptionVariables,
  APITypes.OnCreateAssetSubscription
>;
export const onCreateSavingAsset = /* GraphQL */ `subscription OnCreateSavingAsset(
  $filter: ModelSubscriptionSavingAssetFilterInput
) {
  onCreateSavingAsset(filter: $filter) {
    asset {
      createdAt
      id
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
` as GeneratedSubscription<
  APITypes.OnCreateSavingAssetSubscriptionVariables,
  APITypes.OnCreateSavingAssetSubscription
>;
export const onCreateStockAsset = /* GraphQL */ `subscription OnCreateStockAsset(
  $filter: ModelSubscriptionStockAssetFilterInput
) {
  onCreateStockAsset(filter: $filter) {
    amount
    asset {
      createdAt
      id
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
` as GeneratedSubscription<
  APITypes.OnCreateStockAssetSubscriptionVariables,
  APITypes.OnCreateStockAssetSubscription
>;
export const onCreateUserInfo = /* GraphQL */ `subscription OnCreateUserInfo(
  $filter: ModelSubscriptionUserInfoFilterInput
  $owner: String
) {
  onCreateUserInfo(filter: $filter, owner: $owner) {
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
export const onDeleteAsset = /* GraphQL */ `subscription OnDeleteAsset(
  $filter: ModelSubscriptionAssetFilterInput
  $owner: String
) {
  onDeleteAsset(filter: $filter, owner: $owner) {
    createdAt
    id
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
` as GeneratedSubscription<
  APITypes.OnDeleteAssetSubscriptionVariables,
  APITypes.OnDeleteAssetSubscription
>;
export const onDeleteSavingAsset = /* GraphQL */ `subscription OnDeleteSavingAsset(
  $filter: ModelSubscriptionSavingAssetFilterInput
) {
  onDeleteSavingAsset(filter: $filter) {
    asset {
      createdAt
      id
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
` as GeneratedSubscription<
  APITypes.OnDeleteSavingAssetSubscriptionVariables,
  APITypes.OnDeleteSavingAssetSubscription
>;
export const onDeleteStockAsset = /* GraphQL */ `subscription OnDeleteStockAsset(
  $filter: ModelSubscriptionStockAssetFilterInput
) {
  onDeleteStockAsset(filter: $filter) {
    amount
    asset {
      createdAt
      id
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
` as GeneratedSubscription<
  APITypes.OnDeleteStockAssetSubscriptionVariables,
  APITypes.OnDeleteStockAssetSubscription
>;
export const onDeleteUserInfo = /* GraphQL */ `subscription OnDeleteUserInfo(
  $filter: ModelSubscriptionUserInfoFilterInput
  $owner: String
) {
  onDeleteUserInfo(filter: $filter, owner: $owner) {
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
export const onUpdateAsset = /* GraphQL */ `subscription OnUpdateAsset(
  $filter: ModelSubscriptionAssetFilterInput
  $owner: String
) {
  onUpdateAsset(filter: $filter, owner: $owner) {
    createdAt
    id
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
` as GeneratedSubscription<
  APITypes.OnUpdateAssetSubscriptionVariables,
  APITypes.OnUpdateAssetSubscription
>;
export const onUpdateSavingAsset = /* GraphQL */ `subscription OnUpdateSavingAsset(
  $filter: ModelSubscriptionSavingAssetFilterInput
) {
  onUpdateSavingAsset(filter: $filter) {
    asset {
      createdAt
      id
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
` as GeneratedSubscription<
  APITypes.OnUpdateSavingAssetSubscriptionVariables,
  APITypes.OnUpdateSavingAssetSubscription
>;
export const onUpdateStockAsset = /* GraphQL */ `subscription OnUpdateStockAsset(
  $filter: ModelSubscriptionStockAssetFilterInput
) {
  onUpdateStockAsset(filter: $filter) {
    amount
    asset {
      createdAt
      id
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
` as GeneratedSubscription<
  APITypes.OnUpdateStockAssetSubscriptionVariables,
  APITypes.OnUpdateStockAssetSubscription
>;
export const onUpdateUserInfo = /* GraphQL */ `subscription OnUpdateUserInfo(
  $filter: ModelSubscriptionUserInfoFilterInput
  $owner: String
) {
  onUpdateUserInfo(filter: $filter, owner: $owner) {
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
