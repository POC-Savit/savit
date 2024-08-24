import { generateClient } from 'aws-amplify/api'
import { useEffect, useState } from 'react'
import { AllItem } from 'types/response/AllItem.type'

const client = generateClient<Schema>()

export const getAllItemList = () => {
  const [allItem, setAllItem] = useState<AllItem>()


  return []
}
