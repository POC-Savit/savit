import { signIn, signUp, getCurrentUser } from "aws-amplify/auth"
import { generate } from "random-words"

const autoSignIn = (userName: string, password: string): Promise<boolean> => { 
    return signUp({
        username: userName,
        password,
    })
    .then(() => signIn({username: userName, password }))
    .then(resp => resp.isSignedIn)
}

export const useSignIn = (userName: string) => {
    const password = (generate(5) as string[]).join()
    
    getCurrentUser()
    .then(console.log)
    .catch(() => autoSignIn(userName, password))
    
}