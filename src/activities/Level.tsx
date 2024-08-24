import { AppScreen } from '@stackflow/plugin-basic-ui'
import { MockSavitLevels } from 'types/SavitLevel'
import { MockSavitMissions } from 'types/SavitMission'

import IconBack from '~/asset/icons/IconBack'
import AllLevels from '~/components/Level/AllLevels'
import MySavitLevel from '~/components/Level/MySavitLevel'
import NextMissions from '~/components/Level/NextMissions'
import { useFlow } from '~/stackflow'

import * as css from './Level.css'

interface LevelProps {}

const CURRENT_LEVEL = 3

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
          <MySavitLevel myLevel={CURRENT_LEVEL} />
          <NextMissions
            nextLevel={CURRENT_LEVEL + 1}
            nextMissions={MockSavitMissions}
          />
        </div>
        <div className={css.divider} />
        <div className={css.bottomLayer}>
          <AllLevels allSavitLevels={MockSavitLevels} myLevel={CURRENT_LEVEL} />
        </div>
      </div>
    </AppScreen>
  )
}

export default Level
