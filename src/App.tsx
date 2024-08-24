
import { useEffect } from 'react'
import * as css from './App.css'
import { useSignIn } from './hooks/login.hook'
import { Stack } from './stackflow'

function App() {
  
  const userInfo = useSignIn()
  console.log(userInfo)
  useEffect(() => {
    // buyItem()
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
