import { generate } from 'random-words'
import { useEffect } from 'react'

import * as css from './App.css'
import { useSignIn } from './hooks/login.hook'
import { Stack } from './stackflow'

function App() {
  useEffect(() => {
    useSignIn(`${(generate(2) as string[]).join('')}@naver.com`)
  }, [])

  return (
    <main className={css.container}>
      <div className={css.mobileWrapper}>
        <Stack />
      </div>
    </main>
  )
}

export default App
