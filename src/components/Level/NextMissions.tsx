import { type SavitMission } from 'types/SavitMission'

import { useFlow } from '~/stackflow'

import CheckBox from '../common/CheckBox'
import Title from '../common/Title'
import * as css from './NextMissions.css'

interface NextMissionsProps {
  nextLevel: number
  nextMissions: SavitMission[]
}

const NextMissions = ({ nextLevel, nextMissions }: NextMissionsProps) => {
  return (
    <div className={css.container}>
      <Title>{nextLevel}F 달성 미션!</Title>
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
                quizIds={mission.quizsIds}
                text={mission.text}
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
      <div
        className={css.missionRight}
        style={{
          color: isComplete ? '#5F5F71' : '#5872FF',
          textDecorationLine: isComplete ? 'none' : 'underline',
        }}
      >
        {isComplete ? '달성완료' : '미션수행'}
      </div>
    </div>
  )
}

interface QuizProps {
  currentQuizCount: number
  quizIds: string[]
  text: string
}

const Quiz = ({ text, currentQuizCount, quizIds }: QuizProps) => {
  const totalQuizCount = quizIds.length
  const isComplete = currentQuizCount === totalQuizCount

  const { push } = useFlow()

  const handleQuizClick = () => {
    push('QuizModal', {
      quizId: quizIds[currentQuizCount - 1],
    })
  }

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
      <div
        className={css.missionRight}
        onClick={handleQuizClick}
        style={{
          color: isComplete ? '#5F5F71' : '#5872FF',
          textDecorationLine: isComplete ? 'none' : 'underline',
        }}
      >
        {isComplete ? '달성완료' : '퀴즈풀기'}
      </div>
    </div>
  )
}
