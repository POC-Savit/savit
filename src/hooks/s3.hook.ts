import { getUrl } from 'aws-amplify/storage'

export const getObjectUrl = async (path: string) => {
  return (
    await getUrl({
      path,
      options: {
        expiresIn: 300,
      },
    })
  ).url.toString()
}
