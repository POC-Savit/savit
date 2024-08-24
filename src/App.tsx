import { useEffect } from 'react'
import * as css from './App.css'
import { useSignIn } from './hooks/login.hook'
import { Stack } from './stackflow'
import { generate } from 'random-words'

function App() {
  useEffect( () => {
    useSignIn(`${(generate(2) as string[]).join('')}@naver.com`)
  }, [])
  

  return (
    <main className={css.container}>
      <div className={css.mobileWrapper}>
        <button className={css.logo}>
          <img height="20px" src="/logo.png" width="83.914px" />
        </button>
        <Stack />
      </div>
    </main>
  )
}

export default App
