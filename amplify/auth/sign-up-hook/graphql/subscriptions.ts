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
` as GeneratedSubscription<
  APITypes.OnCreateAssetSubscriptionVariables,
  APITypes.OnCreateAssetSubscription
>;
export const onCreateSavingAsset = /* GraphQL */ `subscription OnCreateSavingAsset(
  $filter: ModelSubscriptionSavingAssetFilterInput
  $owner: String
) {
  onCreateSavingAsset(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSavingAssetSubscriptionVariables,
  APITypes.OnCreateSavingAssetSubscription
>;
export const onCreateStockAsset = /* GraphQL */ `subscription OnCreateStockAsset(
  $filter: ModelSubscriptionStockAssetFilterInput
  $owner: String
) {
  onCreateStockAsset(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStockAssetSubscriptionVariables,
  APITypes.OnCreateStockAssetSubscription
>;
export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onCreateUserInfo = /* GraphQL */ `subscription OnCreateUserInfo(
  $email: String
  $filter: ModelSubscriptionUserInfoFilterInput
) {
  onCreateUserInfo(email: $email, filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserInfoSubscriptionVariables,
  APITypes.OnCreateUserInfoSubscription
>;
export const onDeleteAsset = /* GraphQL */ `subscription OnDeleteAsset(
  $filter: ModelSubscriptionAssetFilterInput
  $owner: String
) {
  onDeleteAsset(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAssetSubscriptionVariables,
  APITypes.OnDeleteAssetSubscription
>;
export const onDeleteSavingAsset = /* GraphQL */ `subscription OnDeleteSavingAsset(
  $filter: ModelSubscriptionSavingAssetFilterInput
  $owner: String
) {
  onDeleteSavingAsset(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSavingAssetSubscriptionVariables,
  APITypes.OnDeleteSavingAssetSubscription
>;
export const onDeleteStockAsset = /* GraphQL */ `subscription OnDeleteStockAsset(
  $filter: ModelSubscriptionStockAssetFilterInput
  $owner: String
) {
  onDeleteStockAsset(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStockAssetSubscriptionVariables,
  APITypes.OnDeleteStockAssetSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onDeleteUserInfo = /* GraphQL */ `subscription OnDeleteUserInfo(
  $email: String
  $filter: ModelSubscriptionUserInfoFilterInput
) {
  onDeleteUserInfo(email: $email, filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserInfoSubscriptionVariables,
  APITypes.OnDeleteUserInfoSubscription
>;
export const onUpdateAsset = /* GraphQL */ `subscription OnUpdateAsset(
  $filter: ModelSubscriptionAssetFilterInput
  $owner: String
) {
  onUpdateAsset(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAssetSubscriptionVariables,
  APITypes.OnUpdateAssetSubscription
>;
export const onUpdateSavingAsset = /* GraphQL */ `subscription OnUpdateSavingAsset(
  $filter: ModelSubscriptionSavingAssetFilterInput
  $owner: String
) {
  onUpdateSavingAsset(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSavingAssetSubscriptionVariables,
  APITypes.OnUpdateSavingAssetSubscription
>;
export const onUpdateStockAsset = /* GraphQL */ `subscription OnUpdateStockAsset(
  $filter: ModelSubscriptionStockAssetFilterInput
  $owner: String
) {
  onUpdateStockAsset(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStockAssetSubscriptionVariables,
  APITypes.OnUpdateStockAssetSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onUpdateUserInfo = /* GraphQL */ `subscription OnUpdateUserInfo(
  $email: String
  $filter: ModelSubscriptionUserInfoFilterInput
) {
  onUpdateUserInfo(email: $email, filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserInfoSubscriptionVariables,
  APITypes.OnUpdateUserInfoSubscription
>;
