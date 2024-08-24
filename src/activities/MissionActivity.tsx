import { send } from '@stackflow/compat-await-push'
import { AppScreen } from '@stackflow/plugin-basic-ui'
import { useActivity } from '@stackflow/react'

import DefaultMission from '~/components/Mission/DefaultMission'
import Mission1 from '~/components/Mission/Mission1'
import { useFlow } from '~/stackflow'

interface MissionActivityProps {
  params: {
    missionId: string
    missionName: string
  }
}

export const MANAGED_MISSION = ['1']

const MissionActivity = ({
  params: { missionId, missionName },
}: MissionActivityProps) => {
  const { pop } = useFlow()
  const { id } = useActivity()

  const handleMissionComplete = () => {
    pop()
    send({
      activityId: id,
      data: {
        isComplete: true,
      },
    })
  }

  const handleMissionCancel = () => {
    pop()
    send({
      activityId: id,
      data: {
        isComplete: false,
      },
    })
  }

  return (
    <AppScreen
      appBar={{
        title: missionName,
      }}
    >
      {(() => {
        switch (missionId) {
          case '1':
            return <Mission1 onCTAClick={handleMissionComplete} />
          default:
            return (
              <DefaultMission
                missionName={missionName}
                onCancelClick={handleMissionCancel}
                onCTAClick={handleMissionComplete}
              />
            )
        }
      })()}
    </AppScreen>
  )
}

export default MissionActivity
