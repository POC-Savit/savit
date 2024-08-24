import { AppScreen } from '@stackflow/plugin-basic-ui'

import IconBack from '~/asset/icons/IconBack'
import MySavitLevel from '~/components/Level/MySavitLevel'
import { useFlow } from '~/stackflow'

import * as css from './Level.css'

interface LevelProps {}

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
          <div></div>
        </div>
        <div className={css.divider} />
        <div className={css.bottomLayer}></div>
      </div>
    </AppScreen>
  )
}

export default Level
