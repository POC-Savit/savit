import { AppScreen } from '@stackflow/plugin-basic-ui'

import IconBack from '~/asset/icons/IconBack'
import MySavitLevel from '~/components/Level/MySavitLevel'
import NextMissions, { SavitMission } from '~/components/Level/NextMissions'
import { useFlow } from '~/stackflow'

import * as css from './Level.css'

interface LevelProps {}

const MockNextMissions: SavitMission[] = [
  {
    type: 'mission',
    text: '저축 배분 목표 정하기',
    isComplete: true,
  },
  {
    type: 'quiz',
    text: '금융지식 퀴즈',
    currentQuizCount: 2,
    totalQuizCount: 3,
  },
]

const Level = ({}: LevelProps) => {
  const { pop } = useFlow()

  return (
    <AppScreen
      appBar={{
        title: 'Level',
        closeButton: {
          renderIcon: () => <IconBack />,
          onClick: () => {
            pop()
          },
        },
      }}
    >
      <div className={css.container}>
        <div className={css.topLayer}>
          <MySavitLevel myLevel={3} />
          <NextMissions nextLevel={4} nextMissions={MockNextMissions} />
        </div>
        <div className={css.divider} />
        <div className={css.bottomLayer}></div>
      </div>
    </AppScreen>
  )
}

export default Level
