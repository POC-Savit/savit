import { useAtomValue } from 'jotai'
import CountUp from 'react-countup'

import MiniSquareButton from '~/components/common/MiniSquareButton'
import { useFlow } from '~/stackflow'
import { User } from '~/stores'

import ShowRoomNormal from '../3d/ShowRoomNormal'
import * as css from './Root.css'

interface ShopProps {}

const Root = ({}: ShopProps) => {
  const { push } = useFlow()
  const currentLevel = useAtomValue(User.currentLevel)

  const handleStairClick = () => {
    push('LevelActivity', {})
  }
  const handleDownloadCLik = () => {
    push('DownloadModalActivity', {})
  }

  const handleShopClick = () => {
    push('ShopActivity', {})
  }

  return (
    <div className={css.container}>
      <ShowRoomNormal />
      <MiniSquareButton
        className={css.stair}
        iconType="Stair"
        onClick={handleStairClick}
      >
        <CountUp
          decimal=","
          duration={10}
          end={currentLevel}
          start={1}
          suffix="F"
        >
          {({ countUpRef }) => <span className={css.text} ref={countUpRef} />}
        </CountUp>
      </MiniSquareButton>
      <MiniSquareButton
        className={css.share}
        iconType="Share"
        onClick={handleDownloadCLik}
      />
      <MiniSquareButton
        className={css.shop}
        iconType="Shop"
        onClick={handleShopClick}
      />
    </div>
  )
}

export default Root
