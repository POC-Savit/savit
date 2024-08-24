import { basicUIPlugin } from '@stackflow/plugin-basic-ui'
import { historySyncPlugin } from '@stackflow/plugin-history-sync'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { stackflow } from '@stackflow/react'

import RootActivity from '~/activities/RootActivity'

import LevelActivity from './activities/LevelActivity'
import QuizModal from './activities/QuizModal'
import ShopActivity from './activities/ShopActivity'

export type ActivitiesType =
  | 'Level'
  | 'NextLevelActivity'
  | 'QuizModal'
  | 'RootActivity'
  | 'ShopActivity'

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
      appBar: {
        borderColor: 'none',
      },
    }),
    historySyncPlugin({
      routes: {
        RootActivity: '/',
        LevelActivity: '/level',
        ShopActivity: '/shop',
        QuizModal: '/quiz/${quizId}',
      },
      fallbackActivity: () => 'RootActivity',
    }),
  ],
  activities: {
    RootActivity,
    LevelActivity,
    ShopActivity,
    QuizModal,
  },
})
