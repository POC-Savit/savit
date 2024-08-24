import { useEffect, useState } from "react"
import { Schema } from '../../amplify/data/resource'
import { generateClient } from "aws-amplify/api"
import { AllItem } from "types/response/AllItem.type"

const client = generateClient<Schema>()

export const getAllItemList = () => {
    const [allItem, setAllItem] = useState<AllItem>()

    useEffect(() => {
        client.queries.allItem()
            .then(resp => resp.data as AllItem)
            .then(setAllItem)
    }, [])

    return allItem
}
