import { getUrl, GetUrlWithPathOutput } from "aws-amplify/storage"
import { useEffect, useState } from "react"


export const getObjectUrl = (path: string) => {
    const [link, setLink] = useState<GetUrlWithPathOutput>()

    useEffect(() => {
        getUrl({
          path,
          options: {
            expiresIn: 300,
          }
        }).then(setLink)
      }, [])

      return link?.url.toString()
}
