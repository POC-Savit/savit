import { a } from "@aws-amplify/backend";

export const Asset = a.model({
    id: a.string().required(),
    owner: a.string().required(),
    name: a.string().required(),
    amount: a.integer(),
    stockAsset: a.hasMany("StockAsset", "owner"),
    savingAsset: a.hasMany("SavingAsset", "owner"),
  })
  .authorization((allow) => [
    allow.ownerDefinedIn("owner"),
  ])