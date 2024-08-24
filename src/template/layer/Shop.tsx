import MiniSquareButton from '~/components/common/MiniSquareButton'

import ShowRoomNormal from '../3d/ShowRoomNormal'
import * as css from './Shop.css'

interface ShopProps {}

const Shop = ({}: ShopProps) => {
  return (
    <div className={css.container}>
      <ShowRoomNormal />
      <MiniSquareButton className={css.point} iconType="Point" title="1,000" />
    </div>
  )
}

export default Shop
