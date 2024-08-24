import { Schema } from 'amplify/data/resource'
import { generateClient } from 'aws-amplify/api'
import { getCurrentUser, signIn, signUp } from 'aws-amplify/auth'
import { generate } from 'random-words'
import { v4 as uuid} from 'uuid'
import { useEffect, useState } from 'react'
import { Asset } from '../../types/Asset'

const client = generateClient<Schema>({
  authMode: 'iam',
})

const autoSignIn = (userName: string, password: string) => { 
    return signUp({
        username: userName,
        password,
    })
    .then(() => signIn({username: userName, password }))
    .then(resp => resp.isSignedIn)
}
const userName = `${uuid()}@naver.com`
export const useSignIn = () => {
    const [userInfo, setUser] = useState<Schema["UserInfo"]["type"]>()
    const [asset, setAsset] = useState<{}>()
    const password = (generate(5) as string[]).join('')
    
    useEffect(() => {
        getCurrentUser()
        .catch(() => autoSignIn(userName, password))
        .then(() => client.models.UserInfo.list({ authMode: 'userPool'}))
        .then(resp => {
            const user = resp.data[0]
            setUser(user)
            setAsset(JSON.parse(user.asset) as Asset)
            
        })
        
    }, [])


  return {userInfo, asset}
}
