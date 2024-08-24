import { useAtomValue } from 'jotai'
import CountUp from 'react-countup'

import MiniSquareButton from '~/components/common/MiniSquareButton'
import { useFlow } from '~/stackflow'
import { User } from '~/stores'

import ShowRoomNormal from '../3d/ShowRoomNormal'
import * as css from './Shop.css'

interface ShopProps {}

const Shop = ({}: ShopProps) => {
  const { pop } = useFlow()
  const credit = useAtomValue(User.credit)
  return (
    <div className={css.container}>
      <ShowRoomNormal />
      <MiniSquareButton className={css.point} iconType="Point">
        <CountUp decimal="," duration={1} end={credit} start={0}>
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
