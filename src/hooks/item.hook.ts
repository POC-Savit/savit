import { generateClient } from 'aws-amplify/api'
import { useEffect, useState } from 'react'
import { AllItem } from 'types/response/AllItem.type'

import { Schema } from '../../amplify/data/resource'

const client = generateClient<Schema>()

export const getAllItemList = () => {
  const [allItem, setAllItem] = useState<AllItem>()

  useEffect(() => {
    client.queries
      .allItem()
      .then((resp) => resp.data as AllItem)
      .then(setAllItem)
  }, [])

  return allItem
}
