import { SavitLevel } from 'types/SavitLevel'

import * as css from './LevelList.css'

interface LevelListProps {
  levels: SavitLevel[]
  myLevel: number
}

const LevelList = ({ levels, myLevel }: LevelListProps) => {
  return (
    <div className={css.container}>
      {levels.map((level) => (
        <Level key={level.name} level={level} myLevel={myLevel} />
      ))}
    </div>
  )
}

export default LevelList

const Level = ({ level, myLevel }: { level: SavitLevel; myLevel: number }) => {
  return (
    <div
      className={css.level}
      style={{
        fontWeight: level.level === myLevel ? '600' : '400',
        color: level.level === myLevel ? '#5872FF' : '#5F5F71',
      }}
    >
      <span className={css.levelText}>{level.level}F</span>
      <span>{level.name}</span>
    </div>
  )
}
