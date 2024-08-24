import { AppScreen } from '@stackflow/plugin-basic-ui'
import { useAtomValue } from 'jotai'
import { MockSavitLevels } from 'types/SavitLevel'
import { MockSavitMissions } from 'types/SavitMission'

import IconBack from '~/asset/icons/IconBack'
import AllLevels from '~/components/Level/AllLevels'
import MySavitLevel from '~/components/Level/MySavitLevel'
import NextMissions from '~/components/Level/NextMissions'
import { useFlow } from '~/stackflow'
import { User } from '~/stores'

import * as css from './Level.css'

interface LevelProps {}

const Level = ({}: LevelProps) => {
  const { pop } = useFlow()
  const currentLevel = useAtomValue(User.currentLevel)

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
          <MySavitLevel myLevel={currentLevel} />
          <NextMissions
            nextLevel={currentLevel + 1}
            nextMissions={MockSavitMissions}
          />
        </div>
        <div className={css.divider} />
        <div className={css.bottomLayer}>
          <AllLevels allSavitLevels={MockSavitLevels} myLevel={currentLevel} />
        </div>
      </div>
    </AppScreen>
  )
}

export default Level
