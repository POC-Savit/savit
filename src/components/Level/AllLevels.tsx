import { SavitLevel } from 'types/SavitLevel'

import { sequenceGroupPartition } from '~/utils/sequenceGroupPartition'

import Title from '../common/Title'
import * as css from './AllLevels.css'
import GrouppedLevels from './GrouppedLevels'

interface AllLevelsProps {
  allSavitLevels: SavitLevel[]
}

const AllLevels = ({ allSavitLevels }: AllLevelsProps) => {
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
        />
      ))}
    </div>
  )
}

export default AllLevels
