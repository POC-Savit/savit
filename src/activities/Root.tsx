import { AppScreen } from '@stackflow/plugin-basic-ui'

import * as css from './Root.css'

function Root() {
  return (
    <AppScreen appBar={{ title: 'Root' }}>
      <div className={css.container}>Temp</div>
    </AppScreen>
  )
}

export default Root
