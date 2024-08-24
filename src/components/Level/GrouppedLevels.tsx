import LongTermGoalIMG from 'public/LevelImages/longTermGoal.png'
import MidTermGoalIMG from 'public/LevelImages/midTermGoal.png'
import MyAssetIMG from 'public/LevelImages/myAsset.png'
import ShortTermGoalIMG from 'public/LevelImages/shortTermGoal.png'
import { LevelGroupKey, SavitLevel } from 'types/SavitLevel'

import * as css from './GrouppedLevels.css'
import LevelList from './LevelList'

interface GrouppedLevelsProps {
  levels: SavitLevel[]
  myLevel: number
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

const GrouppedLevels = ({ levels, myLevel }: GrouppedLevelsProps) => {
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
        <LevelList levels={levels} myLevel={myLevel} />
      </div>
    </div>
  )
}

export default GrouppedLevels
