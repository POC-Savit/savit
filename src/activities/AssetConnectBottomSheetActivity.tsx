import { BottomSheet } from '@stackflow/plugin-basic-ui'
import { useFlow } from '@stackflow/react/future'
import { useSetAtom } from 'jotai'

import { UI } from '~/stores'

import * as css from './AssetConnectBottomSheetActivity.css'

interface AssetConnectBottomSheetActivityProps {}

const AssetConnectBottomSheetActivity =
  ({}: AssetConnectBottomSheetActivityProps) => {
    const { pop } = useFlow()
    const setLoginStatus = useSetAtom(UI.loginStatus)

    return (
      <BottomSheet borderRadius="36px">
        <div className={css.container}>
          <div className={css.content}>
            <h2 className={css.title}>닉네임님의 저축 자산을 연결해주세요</h2>
            <div className={css.subTitle}>
              가지고계신 저축 자산을 바탕으로 세이빗 서비스를 이용하실 수 있어요
            </div>
            <img alt="Bank Paper" className={css.image} src="/BankPaper.png" />
            <button
              className={css.button}
              onClick={() => {
                setLoginStatus(true)
                pop()
              }}
              type="button"
            >
              계좌 연결하기
            </button>
            <button className={css.whiteButton} onClick={pop} type="button">
              다음에 하기
            </button>
          </div>
        </div>
      </BottomSheet>
    )
  }

export default AssetConnectBottomSheetActivity
