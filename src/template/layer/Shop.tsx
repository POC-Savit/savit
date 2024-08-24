import CountUp from 'react-countup'

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
      <MiniSquareButton className={css.point} iconType="Point">
        <CountUp decimal="," duration={1} end={1000} start={0} suffix="F">
          {({ countUpRef }) => <span className={css.text} ref={countUpRef} />}
        </CountUp>
      </MiniSquareButton>
      <MiniSquareButton
        className={css.returnButton}
        iconType="Return"
        onClick={pop}
      />
    </div>
  )
}

export default Shop
