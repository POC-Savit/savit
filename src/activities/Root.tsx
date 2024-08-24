import { AppScreen } from '@stackflow/plugin-basic-ui'

import ShowRoomNormal from '~/template/3d/ShowRoomNormal'

import * as css from './Root.css'

function Root() {
  const Logo = () => (
    <button className={css.logo}>
      <img height="20px" src="/logo.png" width="83.914px" />
    </button>
  )

  return (
    <AppScreen appBar={{ renderLeft: Logo, backgroundColor: '#E3ECFF' }}>
      <div className={css.container}>
        <ShowRoomNormal />
        Temp
      </div>
    </AppScreen>
  )
}

export default Root
