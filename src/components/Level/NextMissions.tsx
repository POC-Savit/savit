import CheckBox from '../common/CheckBox'
import * as css from './NextMissions.css'

export type SavitMission =
  | {
      type: 'mission'
      text: string
      isComplete: boolean
    }
  | {
      type: 'quiz'
      text: string
      currentQuizCount: number
      totalQuizCount: number
    }

interface NextMissionsProps {
  nextLevel: number
  nextMissions: SavitMission[]
}

const NextMissions = ({ nextLevel, nextMissions }: NextMissionsProps) => {
  return (
    <div className={css.container}>
      <span className={css.title}>{nextLevel}F 달성 미션!</span>
      {nextMissions.map((mission) => {
        switch (mission.type) {
          case 'mission':
            return (
              <Mission
                isComplete={mission.isComplete}
                key={mission.text}
                text={mission.text}
              />
            )
          case 'quiz':
            return (
              <Quiz
                currentQuizCount={mission.currentQuizCount}
                key={mission.text}
                text={mission.text}
                totalQuizCount={mission.totalQuizCount}
              />
            )
        }
      })}
    </div>
  )
}

export default NextMissions

interface MissionProps {
  isComplete: boolean
  text: string
}

const Mission = ({ isComplete, text }: MissionProps) => {
  return (
    <div className={css.mission}>
      <div className={css.missionLeft}>
        <CheckBox isChecked={isComplete} />
        {text}
      </div>
      <div></div>
    </div>
  )
}

interface QuizProps {
  currentQuizCount: number
  text: string
  totalQuizCount: number
}

const Quiz = ({ text, currentQuizCount, totalQuizCount }: QuizProps) => {
  const isComplete = currentQuizCount === totalQuizCount
  return (
    <div className={css.mission}>
      <div className={css.missionLeft}>
        <CheckBox isChecked={isComplete} />
        <span>
          <span
            style={{
              marginRight: '4px',
            }}
          >
            {text}
          </span>
          <span>
            <span
              style={{
                color: '#5872FF',
              }}
            >
              {currentQuizCount}
            </span>
            /{totalQuizCount}
          </span>
        </span>
      </div>
    </div>
  )
}
