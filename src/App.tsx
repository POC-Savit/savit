import { useSetAtom } from 'jotai'
import { useEffect } from 'react'

import * as css from './App.css'
import { Stack } from './stackflow'
import { User } from './stores'

function App() {
  const getUserInfo = useSetAtom(User.getUserInfo)
  useEffect(() => {
    getUserInfo()
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
