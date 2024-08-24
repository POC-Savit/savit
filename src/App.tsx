import { useSetAtom } from 'jotai'
import { useEffect } from 'react'

import * as css from './App.css'
import { useSignIn } from './hooks/login.hook'
import { Stack } from './stackflow'
import { User } from './stores'
import { fetchItems, fetchUserInfo } from './hooks/queris'

function App() {
  const userInfo = useSignIn()
  console.log(userInfo)

  const setCurrentLevel = useSetAtom(User.currentLevel)

  useEffect(() => {
    setCurrentLevel(3)
    fetchUserInfo().then(console.log)
    fetchItems().then(console.log)
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
