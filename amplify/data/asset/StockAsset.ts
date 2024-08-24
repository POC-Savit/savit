import { a } from "@aws-amplify/backend";

export const StockAsset = a.model({
    id: a.string().required(),
    owner: a.string().required(),
    name: a.string().required(),
    amount: a.integer(),
    asset: a.belongsTo("Asset", "owner"),
  })
  .authorization((allow) => [
    allow.publicApiKey()
  ])