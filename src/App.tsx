import * as css from './App.css'
import { Stack } from './stackflow'

function App() {
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
