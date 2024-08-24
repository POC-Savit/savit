import { a } from "@aws-amplify/backend";

export const SavingAsset = a.model({
        id: a.string().required(),
        owner: a.string().required(),
        name: a.string().required(),
        balance: a.integer(),
        createdAt: a.date(),
        asset: a.belongsTo("Asset", "owner"),
    })
    .authorization((allow) => [
        allow.ownerDefinedIn("owner"),
    ])