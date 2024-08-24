/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UserInfo = {
  __typename: "UserInfo",
  asset?: string | null,
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

export type ModelUserInfoFilterInput = {
  and?: Array< ModelUserInfoFilterInput | null > | null,
  asset?: ModelStringInput | null,
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


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
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

export type ModelUserInfoConditionInput = {
  and?: Array< ModelUserInfoConditionInput | null > | null,
  asset?: ModelStringInput | null,
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
  asset?: string | null,
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

export type DeleteUserInfoInput = {
  id: string,
};

export type UpdateUserInfoInput = {
  asset?: string | null,
  character?: UserInfoCharacterInput | null,
  credit?: number | null,
  currentLevel?: number | null,
  email?: string | null,
  id: string,
  owner?: string | null,
  userName?: string | null,
};

export type ModelSubscriptionUserInfoFilterInput = {
  and?: Array< ModelSubscriptionUserInfoFilterInput | null > | null,
  asset?: ModelSubscriptionStringInput | null,
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

export type GetUserInfoQueryVariables = {
  id: string,
};

export type GetUserInfoQuery = {
  getUserInfo?:  {
    __typename: "UserInfo",
    asset?: string | null,
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
      asset?: string | null,
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

export type CreateUserInfoMutationVariables = {
  condition?: ModelUserInfoConditionInput | null,
  input: CreateUserInfoInput,
};

export type CreateUserInfoMutation = {
  createUserInfo?:  {
    __typename: "UserInfo",
    asset?: string | null,
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

export type DeleteUserInfoMutationVariables = {
  condition?: ModelUserInfoConditionInput | null,
  input: DeleteUserInfoInput,
};

export type DeleteUserInfoMutation = {
  deleteUserInfo?:  {
    __typename: "UserInfo",
    asset?: string | null,
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

export type UpdateUserInfoMutationVariables = {
  condition?: ModelUserInfoConditionInput | null,
  input: UpdateUserInfoInput,
};

export type UpdateUserInfoMutation = {
  updateUserInfo?:  {
    __typename: "UserInfo",
    asset?: string | null,
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

export type OnCreateUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserInfoSubscription = {
  onCreateUserInfo?:  {
    __typename: "UserInfo",
    asset?: string | null,
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

export type OnDeleteUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserInfoSubscription = {
  onDeleteUserInfo?:  {
    __typename: "UserInfo",
    asset?: string | null,
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

export type OnUpdateUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserInfoSubscription = {
  onUpdateUserInfo?:  {
    __typename: "UserInfo",
    asset?: string | null,
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
