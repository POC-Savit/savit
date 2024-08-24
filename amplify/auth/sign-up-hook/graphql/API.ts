/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Asset = {
  __typename: "Asset",
  amount?: number | null,
  createdAt: string,
  id: string,
  name: string,
  owner: string,
  savingAsset?: ModelSavingAssetConnection | null,
  stockAsset?: ModelStockAssetConnection | null,
  updatedAt: string,
};

export type ModelSavingAssetConnection = {
  __typename: "ModelSavingAssetConnection",
  items:  Array<SavingAsset | null >,
  nextToken?: string | null,
};

export type SavingAsset = {
  __typename: "SavingAsset",
  asset?: Asset | null,
  balance?: number | null,
  createdAt?: string | null,
  id: string,
  name: string,
  owner: string,
  updatedAt: string,
};

export type ModelStockAssetConnection = {
  __typename: "ModelStockAssetConnection",
  items:  Array<StockAsset | null >,
  nextToken?: string | null,
};

export type StockAsset = {
  __typename: "StockAsset",
  amount?: number | null,
  asset?: Asset | null,
  createdAt: string,
  id: string,
  name: string,
  owner: string,
  updatedAt: string,
};

export type UserInfo = {
  __typename: "UserInfo",
  character?: UserInfoCharacter | null,
  createdAt: string,
  credit: number,
  currentLevel: number,
  email?: string | null,
  id: string,
  owner?: string | null,
  updatedAt: string,
  userName?: string | null,
};

export type UserInfoCharacter = {
  __typename: "UserInfoCharacter",
  current?: UserInfoCharacterCurrent | null,
  own?: UserInfoCharacterOwn | null,
};

export type UserInfoCharacterCurrent = {
  __typename: "UserInfoCharacterCurrent",
  face?: string | null,
  head?: string | null,
};

export type UserInfoCharacterOwn = {
  __typename: "UserInfoCharacterOwn",
  face?: Array< string | null > | null,
  head?: Array< string | null > | null,
};

export type ModelAssetFilterInput = {
  amount?: ModelIntInput | null,
  and?: Array< ModelAssetFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelAssetFilterInput | null,
  or?: Array< ModelAssetFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAssetConnection = {
  __typename: "ModelAssetConnection",
  items:  Array<Asset | null >,
  nextToken?: string | null,
};

export type ModelSavingAssetFilterInput = {
  and?: Array< ModelSavingAssetFilterInput | null > | null,
  balance?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelSavingAssetFilterInput | null,
  or?: Array< ModelSavingAssetFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStockAssetFilterInput = {
  amount?: ModelIntInput | null,
  and?: Array< ModelStockAssetFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelStockAssetFilterInput | null,
  or?: Array< ModelStockAssetFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserInfoFilterInput = {
  and?: Array< ModelUserInfoFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  credit?: ModelIntInput | null,
  currentLevel?: ModelIntInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserInfoFilterInput | null,
  or?: Array< ModelUserInfoFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userName?: ModelStringInput | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelUserInfoConnection = {
  __typename: "ModelUserInfoConnection",
  items:  Array<UserInfo | null >,
  nextToken?: string | null,
};

export type ModelAssetConditionInput = {
  amount?: ModelIntInput | null,
  and?: Array< ModelAssetConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelAssetConditionInput | null,
  or?: Array< ModelAssetConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateAssetInput = {
  amount?: number | null,
  id?: string | null,
  name: string,
  owner: string,
};

export type ModelSavingAssetConditionInput = {
  and?: Array< ModelSavingAssetConditionInput | null > | null,
  balance?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelSavingAssetConditionInput | null,
  or?: Array< ModelSavingAssetConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateSavingAssetInput = {
  balance?: number | null,
  createdAt?: string | null,
  id?: string | null,
  name: string,
  owner: string,
};

export type ModelStockAssetConditionInput = {
  amount?: ModelIntInput | null,
  and?: Array< ModelStockAssetConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelStockAssetConditionInput | null,
  or?: Array< ModelStockAssetConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateStockAssetInput = {
  amount?: number | null,
  id?: string | null,
  name: string,
  owner: string,
};

export type ModelUserInfoConditionInput = {
  and?: Array< ModelUserInfoConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  credit?: ModelIntInput | null,
  currentLevel?: ModelIntInput | null,
  email?: ModelStringInput | null,
  not?: ModelUserInfoConditionInput | null,
  or?: Array< ModelUserInfoConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userName?: ModelStringInput | null,
};

export type CreateUserInfoInput = {
  character?: UserInfoCharacterInput | null,
  credit: number,
  currentLevel: number,
  email?: string | null,
  id?: string | null,
  owner?: string | null,
  userName?: string | null,
};

export type UserInfoCharacterInput = {
  current?: UserInfoCharacterCurrentInput | null,
  own?: UserInfoCharacterOwnInput | null,
};

export type UserInfoCharacterCurrentInput = {
  face?: string | null,
  head?: string | null,
};

export type UserInfoCharacterOwnInput = {
  face?: Array< string | null > | null,
  head?: Array< string | null > | null,
};

export type DeleteAssetInput = {
  id: string,
};

export type DeleteSavingAssetInput = {
  id: string,
};

export type DeleteStockAssetInput = {
  id: string,
};

export type DeleteUserInfoInput = {
  id: string,
};

export type UpdateAssetInput = {
  amount?: number | null,
  id: string,
  name?: string | null,
  owner?: string | null,
};

export type UpdateSavingAssetInput = {
  balance?: number | null,
  createdAt?: string | null,
  id: string,
  name?: string | null,
  owner?: string | null,
};

export type UpdateStockAssetInput = {
  amount?: number | null,
  id: string,
  name?: string | null,
  owner?: string | null,
};

export type UpdateUserInfoInput = {
  character?: UserInfoCharacterInput | null,
  credit?: number | null,
  currentLevel?: number | null,
  email?: string | null,
  id: string,
  owner?: string | null,
  userName?: string | null,
};

export type ModelSubscriptionAssetFilterInput = {
  amount?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionAssetFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionAssetFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSavingAssetFilterInput = {
  and?: Array< ModelSubscriptionSavingAssetFilterInput | null > | null,
  balance?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionSavingAssetFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStockAssetFilterInput = {
  amount?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionStockAssetFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionStockAssetFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserInfoFilterInput = {
  and?: Array< ModelSubscriptionUserInfoFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  credit?: ModelSubscriptionIntInput | null,
  currentLevel?: ModelSubscriptionIntInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserInfoFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userName?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type AllItemQueryVariables = {
};

export type AllItemQuery = {
  allItem?: string | null,
};

export type GetAssetQueryVariables = {
  id: string,
};

export type GetAssetQuery = {
  getAsset?:  {
    __typename: "Asset",
    amount?: number | null,
    createdAt: string,
    id: string,
    name: string,
    owner: string,
    savingAsset?:  {
      __typename: "ModelSavingAssetConnection",
      nextToken?: string | null,
    } | null,
    stockAsset?:  {
      __typename: "ModelStockAssetConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetSavingAssetQueryVariables = {
  id: string,
};

export type GetSavingAssetQuery = {
  getSavingAsset?:  {
    __typename: "SavingAsset",
    asset?:  {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null,
    balance?: number | null,
    createdAt?: string | null,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type GetStockAssetQueryVariables = {
  id: string,
};

export type GetStockAssetQuery = {
  getStockAsset?:  {
    __typename: "StockAsset",
    amount?: number | null,
    asset?:  {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type GetUserInfoQueryVariables = {
  id: string,
};

export type GetUserInfoQuery = {
  getUserInfo?:  {
    __typename: "UserInfo",
    character?:  {
      __typename: "UserInfoCharacter",
    } | null,
    createdAt: string,
    credit: number,
    currentLevel: number,
    email?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userName?: string | null,
  } | null,
};

export type ListAssetsQueryVariables = {
  filter?: ModelAssetFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAssetsQuery = {
  listAssets?:  {
    __typename: "ModelAssetConnection",
    items:  Array< {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSavingAssetsQueryVariables = {
  filter?: ModelSavingAssetFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSavingAssetsQuery = {
  listSavingAssets?:  {
    __typename: "ModelSavingAssetConnection",
    items:  Array< {
      __typename: "SavingAsset",
      balance?: number | null,
      createdAt?: string | null,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListStockAssetsQueryVariables = {
  filter?: ModelStockAssetFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListStockAssetsQuery = {
  listStockAssets?:  {
    __typename: "ModelStockAssetConnection",
    items:  Array< {
      __typename: "StockAsset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserInfosQueryVariables = {
  filter?: ModelUserInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserInfosQuery = {
  listUserInfos?:  {
    __typename: "ModelUserInfoConnection",
    items:  Array< {
      __typename: "UserInfo",
      createdAt: string,
      credit: number,
      currentLevel: number,
      email?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userName?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateAssetMutationVariables = {
  condition?: ModelAssetConditionInput | null,
  input: CreateAssetInput,
};

export type CreateAssetMutation = {
  createAsset?:  {
    __typename: "Asset",
    amount?: number | null,
    createdAt: string,
    id: string,
    name: string,
    owner: string,
    savingAsset?:  {
      __typename: "ModelSavingAssetConnection",
      nextToken?: string | null,
    } | null,
    stockAsset?:  {
      __typename: "ModelStockAssetConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateSavingAssetMutationVariables = {
  condition?: ModelSavingAssetConditionInput | null,
  input: CreateSavingAssetInput,
};

export type CreateSavingAssetMutation = {
  createSavingAsset?:  {
    __typename: "SavingAsset",
    asset?:  {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null,
    balance?: number | null,
    createdAt?: string | null,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type CreateStockAssetMutationVariables = {
  condition?: ModelStockAssetConditionInput | null,
  input: CreateStockAssetInput,
};

export type CreateStockAssetMutation = {
  createStockAsset?:  {
    __typename: "StockAsset",
    amount?: number | null,
    asset?:  {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type CreateUserInfoMutationVariables = {
  condition?: ModelUserInfoConditionInput | null,
  input: CreateUserInfoInput,
};

export type CreateUserInfoMutation = {
  createUserInfo?:  {
    __typename: "UserInfo",
    character?:  {
      __typename: "UserInfoCharacter",
    } | null,
    createdAt: string,
    credit: number,
    currentLevel: number,
    email?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userName?: string | null,
  } | null,
};

export type DeleteAssetMutationVariables = {
  condition?: ModelAssetConditionInput | null,
  input: DeleteAssetInput,
};

export type DeleteAssetMutation = {
  deleteAsset?:  {
    __typename: "Asset",
    amount?: number | null,
    createdAt: string,
    id: string,
    name: string,
    owner: string,
    savingAsset?:  {
      __typename: "ModelSavingAssetConnection",
      nextToken?: string | null,
    } | null,
    stockAsset?:  {
      __typename: "ModelStockAssetConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteSavingAssetMutationVariables = {
  condition?: ModelSavingAssetConditionInput | null,
  input: DeleteSavingAssetInput,
};

export type DeleteSavingAssetMutation = {
  deleteSavingAsset?:  {
    __typename: "SavingAsset",
    asset?:  {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null,
    balance?: number | null,
    createdAt?: string | null,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type DeleteStockAssetMutationVariables = {
  condition?: ModelStockAssetConditionInput | null,
  input: DeleteStockAssetInput,
};

export type DeleteStockAssetMutation = {
  deleteStockAsset?:  {
    __typename: "StockAsset",
    amount?: number | null,
    asset?:  {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserInfoMutationVariables = {
  condition?: ModelUserInfoConditionInput | null,
  input: DeleteUserInfoInput,
};

export type DeleteUserInfoMutation = {
  deleteUserInfo?:  {
    __typename: "UserInfo",
    character?:  {
      __typename: "UserInfoCharacter",
    } | null,
    createdAt: string,
    credit: number,
    currentLevel: number,
    email?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userName?: string | null,
  } | null,
};

export type UpdateAssetMutationVariables = {
  condition?: ModelAssetConditionInput | null,
  input: UpdateAssetInput,
};

export type UpdateAssetMutation = {
  updateAsset?:  {
    __typename: "Asset",
    amount?: number | null,
    createdAt: string,
    id: string,
    name: string,
    owner: string,
    savingAsset?:  {
      __typename: "ModelSavingAssetConnection",
      nextToken?: string | null,
    } | null,
    stockAsset?:  {
      __typename: "ModelStockAssetConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateSavingAssetMutationVariables = {
  condition?: ModelSavingAssetConditionInput | null,
  input: UpdateSavingAssetInput,
};

export type UpdateSavingAssetMutation = {
  updateSavingAsset?:  {
    __typename: "SavingAsset",
    asset?:  {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null,
    balance?: number | null,
    createdAt?: string | null,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type UpdateStockAssetMutationVariables = {
  condition?: ModelStockAssetConditionInput | null,
  input: UpdateStockAssetInput,
};

export type UpdateStockAssetMutation = {
  updateStockAsset?:  {
    __typename: "StockAsset",
    amount?: number | null,
    asset?:  {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserInfoMutationVariables = {
  condition?: ModelUserInfoConditionInput | null,
  input: UpdateUserInfoInput,
};

export type UpdateUserInfoMutation = {
  updateUserInfo?:  {
    __typename: "UserInfo",
    character?:  {
      __typename: "UserInfoCharacter",
    } | null,
    createdAt: string,
    credit: number,
    currentLevel: number,
    email?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userName?: string | null,
  } | null,
};

export type OnCreateAssetSubscriptionVariables = {
  filter?: ModelSubscriptionAssetFilterInput | null,
  owner?: string | null,
};

export type OnCreateAssetSubscription = {
  onCreateAsset?:  {
    __typename: "Asset",
    amount?: number | null,
    createdAt: string,
    id: string,
    name: string,
    owner: string,
    savingAsset?:  {
      __typename: "ModelSavingAssetConnection",
      nextToken?: string | null,
    } | null,
    stockAsset?:  {
      __typename: "ModelStockAssetConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateSavingAssetSubscriptionVariables = {
  filter?: ModelSubscriptionSavingAssetFilterInput | null,
  owner?: string | null,
};

export type OnCreateSavingAssetSubscription = {
  onCreateSavingAsset?:  {
    __typename: "SavingAsset",
    asset?:  {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null,
    balance?: number | null,
    createdAt?: string | null,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStockAssetSubscriptionVariables = {
  filter?: ModelSubscriptionStockAssetFilterInput | null,
  owner?: string | null,
};

export type OnCreateStockAssetSubscription = {
  onCreateStockAsset?:  {
    __typename: "StockAsset",
    amount?: number | null,
    asset?:  {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserInfoSubscription = {
  onCreateUserInfo?:  {
    __typename: "UserInfo",
    character?:  {
      __typename: "UserInfoCharacter",
    } | null,
    createdAt: string,
    credit: number,
    currentLevel: number,
    email?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userName?: string | null,
  } | null,
};

export type OnDeleteAssetSubscriptionVariables = {
  filter?: ModelSubscriptionAssetFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAssetSubscription = {
  onDeleteAsset?:  {
    __typename: "Asset",
    amount?: number | null,
    createdAt: string,
    id: string,
    name: string,
    owner: string,
    savingAsset?:  {
      __typename: "ModelSavingAssetConnection",
      nextToken?: string | null,
    } | null,
    stockAsset?:  {
      __typename: "ModelStockAssetConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteSavingAssetSubscriptionVariables = {
  filter?: ModelSubscriptionSavingAssetFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSavingAssetSubscription = {
  onDeleteSavingAsset?:  {
    __typename: "SavingAsset",
    asset?:  {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null,
    balance?: number | null,
    createdAt?: string | null,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStockAssetSubscriptionVariables = {
  filter?: ModelSubscriptionStockAssetFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStockAssetSubscription = {
  onDeleteStockAsset?:  {
    __typename: "StockAsset",
    amount?: number | null,
    asset?:  {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserInfoSubscription = {
  onDeleteUserInfo?:  {
    __typename: "UserInfo",
    character?:  {
      __typename: "UserInfoCharacter",
    } | null,
    createdAt: string,
    credit: number,
    currentLevel: number,
    email?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userName?: string | null,
  } | null,
};

export type OnUpdateAssetSubscriptionVariables = {
  filter?: ModelSubscriptionAssetFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAssetSubscription = {
  onUpdateAsset?:  {
    __typename: "Asset",
    amount?: number | null,
    createdAt: string,
    id: string,
    name: string,
    owner: string,
    savingAsset?:  {
      __typename: "ModelSavingAssetConnection",
      nextToken?: string | null,
    } | null,
    stockAsset?:  {
      __typename: "ModelStockAssetConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateSavingAssetSubscriptionVariables = {
  filter?: ModelSubscriptionSavingAssetFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSavingAssetSubscription = {
  onUpdateSavingAsset?:  {
    __typename: "SavingAsset",
    asset?:  {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null,
    balance?: number | null,
    createdAt?: string | null,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStockAssetSubscriptionVariables = {
  filter?: ModelSubscriptionStockAssetFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStockAssetSubscription = {
  onUpdateStockAsset?:  {
    __typename: "StockAsset",
    amount?: number | null,
    asset?:  {
      __typename: "Asset",
      amount?: number | null,
      createdAt: string,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserInfoSubscription = {
  onUpdateUserInfo?:  {
    __typename: "UserInfo",
    character?:  {
      __typename: "UserInfoCharacter",
    } | null,
    createdAt: string,
    credit: number,
    currentLevel: number,
    email?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
    userName?: string | null,
  } | null,
};
