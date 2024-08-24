import IconStair from '~/asset/icons/IconStair'

import MyLevelImg from '../../asset/images/myLevelImage.png'
import * as css from './MySavitLevel.css'

interface MySavitLevelProps {
  myLevel: number
}

const MySavitLevel = ({ myLevel }: MySavitLevelProps) => {
  return (
    <div className={css.container}>
      <h2 className={css.myLevel}>
        나의 <strong className={css.leveltext}>세이빗 레벨</strong>
      </h2>
      <div className={css.imageBox}>
        <img alt="my level" className={css.image} src={MyLevelImg} />
      </div>
      <span className={css.levelBox}>
        <IconStair className={css.levelBoxIcon} />
        <span className={css.levelBoxText}>{myLevel}F</span>
      </span>
    </div>
  )
}

export default MySavitLevel
