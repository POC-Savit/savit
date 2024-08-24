import * as css from './App.css'
import { Stack } from './stackflow'

function App() {
  return (
    <main className={css.container}>
      <div className={css.mobileWrapper}>
        <Stack />
      </div>
    </main>
  )
}

export default App
