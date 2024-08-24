import IconStrair from '~/asset/icons/IconStrair'

import MyLevelImg from '../../asset/images/myLevelImage.png'
import * as css from './MySavitLevel.css'

interface MySavitLevelProps {
  myLevel: number
}

const MySavitLevel = ({ myLevel }: MySavitLevelProps) => {
  return (
    <div className={css.container}>
      <span>
        나의 <strong className={css.leveltext}>세이빗 레벨</strong>
      </span>
      <div className={css.imageBox}>
        <img alt="my level" className={css.image} src={MyLevelImg} />
      </div>
      <span className={css.levelBox}>
        <IconStrair className={css.levelBoxIcon} />
        {myLevel}F
      </span>
    </div>
  )
}

export default MySavitLevel
