import { LevelGroupKey, SavitLevel } from 'types/SavitLevel'

import * as css from './GrouppedLevels.css'
import LongTermGoalIMG from './images/longTermGoal.png'
import MidTermGoalIMG from './images/midTermGoal.png'
import MyAssetIMG from './images/myAsset.png'
import ShortTermGoalIMG from './images/shortTermGoal.png'

interface GrouppedLevelsProps {
  levels: SavitLevel[]
}

const LEVEL_GROUP_META: Record<LevelGroupKey, { images: string }> = {
  MyAsset: {
    images: MyAssetIMG,
  },
  ShortTermGoal: {
    images: ShortTermGoalIMG,
  },
  MidTermGoal: {
    images: MidTermGoalIMG,
  },
  LongTermGoal: {
    images: LongTermGoalIMG,
  },
}

const GrouppedLevels = ({ levels }: GrouppedLevelsProps) => {
  const groupKey = levels[0].group.key
  const groupTitle = levels[0].group.title
  const image = LEVEL_GROUP_META[groupKey].images

  return (
    <div className={css.container}>
      <div className={css.left}>
        <div className={css.imageWrapper}>
          <img alt={groupTitle} className={css.img} src={image} />
        </div>
      </div>
      <div className={css.right}>
        <div className={css.title}>{groupTitle}</div>
      </div>
    </div>
  )
}

export default GrouppedLevels
