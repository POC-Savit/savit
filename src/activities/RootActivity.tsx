import { AppScreen } from '@stackflow/plugin-basic-ui'
import { useAtomValue } from 'jotai'

import { UI } from '~/stores'
import Root from '~/template/layer/Root'
import ConnectBankAccount from '~/template/root/ConnectBankAccount'
import MoneyArea from '~/template/root/MoneyArea'

import * as css from './RootActivity.css'

const RootActivity = () => {
  const loginStatus = useAtomValue(UI.loginStatus)

  const Logo = () => (
    <button className={css.logo}>
      <img height="20px" src="/logo.png" width="83.914px" />
    </button>
  )

  return (
    <AppScreen appBar={{ renderLeft: Logo, backgroundColor: '#E3ECFF' }}>
      <div className={css.container}>
        <Root />
        {loginStatus ? <MoneyArea /> : <ConnectBankAccount />}
      </div>
    </AppScreen>
  )
}

export default RootActivity
