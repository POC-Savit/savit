
import { a } from "@aws-amplify/backend"

export const UserInfo = a
    .model({
    email: a.string(),
    owner: a.string(),
    userName: a.string(),
    character: a.customType({
        own: a.customType({
        face: a.string().array(),
        head: a.string().array(),
        }),
        current: a.customType({
            face: a.string(),
            head: a.string(),
        }),
    }),
    asset: a.string(),
    credit: a.integer().required(),
    currentLevel: a.integer().required()
})
    .authorization((allow) => [
        allow.ownerDefinedIn("owner"),
    ])
