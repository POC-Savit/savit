import { AppScreen } from '@stackflow/plugin-basic-ui'

import ShowRoomNormal from '~/template/3d/ShowRoomNormal'

import * as css from './Root.css'

function Root() {
  return (
    <AppScreen appBar={{ title: '', backgroundColor: '#E3ECFF' }}>
      <div className={css.container}>
        <ShowRoomNormal />
        Temp
      </div>
    </AppScreen>
  )
}

export default Root
