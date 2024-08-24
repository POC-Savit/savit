import { generate } from 'random-words'

import * as css from './App.css'
import { useSignIn } from './hooks/login.hook'
import { Stack } from './stackflow'
import { v4 as uuid } from 'uuid'

function App() {
  const userInfo = useSignIn(`${uuid()}@naver.com`)
  console.log(userInfo)
  
  return (
    <main className={css.container}>
      <div className={css.mobileWrapper}>
        <Stack />
      </div>
    </main>
  )
}

export default App
