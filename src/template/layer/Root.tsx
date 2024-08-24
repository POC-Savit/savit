import MiniSquareButton from '~/components/common/MiniSquareButton'
import { useFlow } from '~/stackflow'

import ShowRoomNormal from '../3d/ShowRoomNormal'
import * as css from './Root.css'

interface ShopProps {}

const Root = ({}: ShopProps) => {
  const { push } = useFlow()

  const handleStairClick = () => {
    push('LevelActivity', {})
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
        title="3F"
      />
      <MiniSquareButton
        className={css.share}
        iconType="Share"
        onClick={handleShopClick}
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
