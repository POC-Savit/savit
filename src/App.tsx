import { useEffect } from 'react'

import * as css from './App.css'
import { useSignIn } from './hooks/login.hook'
import { fetchItems, fetchUserInfo } from './hooks/queris'
import { Stack } from './stackflow'

function App() {
  const userInfo = useSignIn()
  console.log(userInfo)

  useEffect(() => {
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
