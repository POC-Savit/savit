import { a } from "@aws-amplify/backend";

export const Asset = a.model({
    id: a.string().required(),
    stockAsset: a.hasMany("StockAsset", "owner"),
    savingAsset: a.hasMany("SavingAsset", "owner"),
  })
  .authorization((allow) => [
    allow.ownerDefinedIn("owner"),
  ])