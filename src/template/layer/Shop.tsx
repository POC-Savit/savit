import MiniSquareButton from '~/components/common/MiniSquareButton'
import { useFlow } from '~/stackflow'

import ShowRoomNormal from '../3d/ShowRoomNormal'
import * as css from './Shop.css'

interface ShopProps {}

const Shop = ({}: ShopProps) => {
  const { pop } = useFlow()
  return (
    <div className={css.container}>
      <ShowRoomNormal />
      <MiniSquareButton className={css.point} iconType="Point" title="1,000" />
      <MiniSquareButton
        className={css.returnButton}
        iconType="Return"
        onClick={pop}
      />
    </div>
  )
}

export default Shop
