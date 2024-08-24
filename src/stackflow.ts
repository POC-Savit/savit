import { basicUIPlugin } from '@stackflow/plugin-basic-ui'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { stackflow } from '@stackflow/react'

import Root from '~/activities/Root'

export type ActivitiesType = 'Root'

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  activities: {
    Root,
  },
  initialActivity: () => 'Root',
})
