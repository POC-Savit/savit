import { SavitLevel } from 'types/SavitLevel'

import { sequenceGroupPartition } from '~/utils/sequenceGroupPartition'

import Title from '../common/Title'
import * as css from './AllLevels.css'
import GrouppedLevels from './GrouppedLevels'

interface AllLevelsProps {
  allSavitLevels: SavitLevel[]
  myLevel: number
}

const AllLevels = ({ allSavitLevels, myLevel }: AllLevelsProps) => {
  const groupedLevels = sequenceGroupPartition(
    allSavitLevels,
    (mission) => mission.group.key
  )

  return (
    <div className={css.container}>
      <Title>레벨 안내</Title>
      {groupedLevels.map((groupedLevels) => (
        <GrouppedLevels
          key={groupedLevels.groupType}
          levels={groupedLevels.list}
          myLevel={myLevel}
        />
      ))}
    </div>
  )
}

export default AllLevels
