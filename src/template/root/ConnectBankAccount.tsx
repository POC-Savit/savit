import { useFlow } from '~/stackflow'

import * as css from './ConnectBankAccount.css'

interface ConnectBankAccountProps {}

const ConnectBankAccount = ({}: ConnectBankAccountProps) => {
  const { push } = useFlow()
  return (
    <div className={css.container}>
      <div className={css.text}>
        <span className={css.boldText}>세이빗</span>과 함께 저축을 시작해보세요!
      </div>
      <button
        className={css.button}
        onClick={() => push('AssetConnectBottomSheetActivity', {})}
        type="button"
      >
        계좌 연결하기
      </button>
    </div>
  )
}

export default ConnectBankAccount
