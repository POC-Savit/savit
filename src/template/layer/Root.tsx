import { useAtomValue, useSetAtom } from 'jotai'
import CountUp from 'react-countup'

import MiniSquareButton from '~/components/common/MiniSquareButton'
import { useFlow } from '~/stackflow'
import { UI, User } from '~/stores'

import ShowRoomNormal from '../3d/ShowRoomNormal'
import * as css from './Root.css'

interface ShopProps {}

const Root = ({}: ShopProps) => {
  const { push } = useFlow()
  const currentLevel = useAtomValue(User.currentLevel)
  const setShareStatus = useSetAtom(UI.shareStatus)

  const handleStairClick = () => {
    push('LevelActivity', {})
  }
  const handleDownloadCLik = () => {
    setShareStatus(true)
    push('DownloadModalActivity', {})
  }

  const handleShopClick = () => {
    push('ShopActivity', {})
  }

  return (
    <div className={css.container}>
      <ShowRoomNormal />
      <MiniSquareButton
        className={css.stairShake}
        iconType="Stair"
        onClick={handleStairClick}
      >
        <CountUp
          decimal=","
          duration={10}
          end={currentLevel + 1}
          start={1}
          suffix="F"
        >
          {({ countUpRef }) => <span className={css.text} ref={countUpRef} />}
        </CountUp>
      </MiniSquareButton>
      <MiniSquareButton
        className={css.shareShake}
        iconType="Share"
        onClick={handleDownloadCLik}
      />
      <MiniSquareButton
        className={css.shopShake}
        iconType="Shop"
        onClick={handleShopClick}
      />
    </div>
  )
}

export default Root
