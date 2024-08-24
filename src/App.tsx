import { generate } from 'random-words'

import * as css from './App.css'
import { useSignIn } from './hooks/login.hook'
import { Stack } from './stackflow'

function App() {
  const userInfo = useSignIn(`${(generate(2) as string[]).join('')}@naver.com`)
  
  return (
    <main className={css.container}>
      <div className={css.mobileWrapper}>
        <Stack />
      </div>
    </main>
  )
}

export default App
