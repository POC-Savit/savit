import { basicUIPlugin } from '@stackflow/plugin-basic-ui'
import { historySyncPlugin } from '@stackflow/plugin-history-sync'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { stackflow } from '@stackflow/react'

import Root from '~/activities/Root'

import Level from './activities/Level'
import ShopActivity from './activities/ShopActivity'

export type ActivitiesType = 'Root' | 'ShopActivity'

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
        Root: '/',
        Level: '/level',
        ShopActivity: '/shop',
      },
      fallbackActivity: () => 'Root',
    }),
  ],
  activities: {
    Root,
    Level,
    ShopActivity,
  },
})
