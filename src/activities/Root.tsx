import { AppScreen } from '@stackflow/plugin-basic-ui'

import IconSetting from '~/asset/icons/IconSetting'
import IconShare from '~/asset/icons/IconShare'
import IconShop from '~/asset/icons/IconShop'
import IconStair from '~/asset/icons/IconStair'
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
      <div
        style={{
          backgroundColor: '#5872FF',
          color: 'white',
          opacity: 0.8,
        }}
      >
        <IconSetting />
        <IconShare />
        <IconShop />
        <IconStair height={64} width={64} />
      </div>
    </AppScreen>
  )
}

export default Root
