/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAsset = /* GraphQL */ `mutation CreateAsset(
  $condition: ModelAssetConditionInput
  $input: CreateAssetInput!
) {
  createAsset(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateAssetMutationVariables,
  APITypes.CreateAssetMutation
>;
export const createSavingAsset = /* GraphQL */ `mutation CreateSavingAsset(
  $condition: ModelSavingAssetConditionInput
  $input: CreateSavingAssetInput!
) {
  createSavingAsset(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateSavingAssetMutationVariables,
  APITypes.CreateSavingAssetMutation
>;
export const createStockAsset = /* GraphQL */ `mutation CreateStockAsset(
  $condition: ModelStockAssetConditionInput
  $input: CreateStockAssetInput!
) {
  createStockAsset(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateStockAssetMutationVariables,
  APITypes.CreateStockAssetMutation
>;
export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $condition: ModelTodoConditionInput
  $input: CreateTodoInput!
) {
  createTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const createUserInfo = /* GraphQL */ `mutation CreateUserInfo(
  $condition: ModelUserInfoConditionInput
  $input: CreateUserInfoInput!
) {
  createUserInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserInfoMutationVariables,
  APITypes.CreateUserInfoMutation
>;
export const deleteAsset = /* GraphQL */ `mutation DeleteAsset(
  $condition: ModelAssetConditionInput
  $input: DeleteAssetInput!
) {
  deleteAsset(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteAssetMutationVariables,
  APITypes.DeleteAssetMutation
>;
export const deleteSavingAsset = /* GraphQL */ `mutation DeleteSavingAsset(
  $condition: ModelSavingAssetConditionInput
  $input: DeleteSavingAssetInput!
) {
  deleteSavingAsset(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteSavingAssetMutationVariables,
  APITypes.DeleteSavingAssetMutation
>;
export const deleteStockAsset = /* GraphQL */ `mutation DeleteStockAsset(
  $condition: ModelStockAssetConditionInput
  $input: DeleteStockAssetInput!
) {
  deleteStockAsset(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteStockAssetMutationVariables,
  APITypes.DeleteStockAssetMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $condition: ModelTodoConditionInput
  $input: DeleteTodoInput!
) {
  deleteTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const deleteUserInfo = /* GraphQL */ `mutation DeleteUserInfo(
  $condition: ModelUserInfoConditionInput
  $input: DeleteUserInfoInput!
) {
  deleteUserInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserInfoMutationVariables,
  APITypes.DeleteUserInfoMutation
>;
export const updateAsset = /* GraphQL */ `mutation UpdateAsset(
  $condition: ModelAssetConditionInput
  $input: UpdateAssetInput!
) {
  updateAsset(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateAssetMutationVariables,
  APITypes.UpdateAssetMutation
>;
export const updateSavingAsset = /* GraphQL */ `mutation UpdateSavingAsset(
  $condition: ModelSavingAssetConditionInput
  $input: UpdateSavingAssetInput!
) {
  updateSavingAsset(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateSavingAssetMutationVariables,
  APITypes.UpdateSavingAssetMutation
>;
export const updateStockAsset = /* GraphQL */ `mutation UpdateStockAsset(
  $condition: ModelStockAssetConditionInput
  $input: UpdateStockAssetInput!
) {
  updateStockAsset(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateStockAssetMutationVariables,
  APITypes.UpdateStockAssetMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $condition: ModelTodoConditionInput
  $input: UpdateTodoInput!
) {
  updateTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const updateUserInfo = /* GraphQL */ `mutation UpdateUserInfo(
  $condition: ModelUserInfoConditionInput
  $input: UpdateUserInfoInput!
) {
  updateUserInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserInfoMutationVariables,
  APITypes.UpdateUserInfoMutation
>;
