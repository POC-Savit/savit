import { basicUIPlugin } from '@stackflow/plugin-basic-ui'
import { historySyncPlugin } from '@stackflow/plugin-history-sync'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { stackflow } from '@stackflow/react'

import RootActivity from '~/activities/RootActivity'

import AssetConnectBottomSheetActivity from './activities/AssetConnectBottomSheetActivity'
import DownloadModalActivity from './activities/DownloadModalActivity'
import LevelActivity from './activities/LevelActivity'
import MissionActivity from './activities/MissionActivity'
import NextLevelCongratuationActivity from './activities/NextLevelCongratuationActivity'
import QuizModal from './activities/QuizModal'
import ShopActivity from './activities/ShopActivity'

export type ActivitiesType =
  | 'AssetConnectBottomSheetActivity'
  | 'DownloadModalActivity'
  | 'Level'
  | 'LevelActivity'
  | 'NextLevelActivity'
  | 'NextLevelCongratuationActivity'
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
        MissionActivity: '/mission/${missionId}',
        QuizModal: '/quiz/${quizId}',
        AssetConnectBottomSheetActivity: '/login',
        DownloadModalActivity: '/download',
        NextLevelCongratuationActivity: '/next-level-congratulation',
      },
      fallbackActivity: () => 'RootActivity',
    }),
  ],
  activities: {
    RootActivity,
    LevelActivity,
    ShopActivity,
    QuizModal,
    AssetConnectBottomSheetActivity,
    DownloadModalActivity,
    NextLevelCongratuationActivity,
    MissionActivity,
  },
})
