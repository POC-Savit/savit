import { receive } from '@stackflow/compat-await-push'
import { useState } from 'react'
import Confetti from 'react-confetti'
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
  const { push } = useFlow()
  const [isViewConfeti, setIsViewConfeti] = useState(false)

  const handleCorrectAnswer = (isComplete: boolean, missionOrder: number) => {
    if (nextMissions[missionOrder].type === 'quiz') {
      nextMissions[missionOrder].currentQuizCount += 1
    } else if (nextMissions[missionOrder].type === 'mission') {
      nextMissions[missionOrder].isComplete = isComplete
    }

    const isAllComplete = nextMissions.every((mission) => {
      if (mission.type === 'quiz') {
        return mission.currentQuizCount === mission.quizsIds.length
      }
      return mission.isComplete
    })

    if (isAllComplete) {
      setTimeout(() => {
        push('NextLevelCongratuationActivity', { level: nextLevel })
      }, 500)
    } else {
      if (isComplete) {
        setIsViewConfeti(true)

        setTimeout(() => {
          setIsViewConfeti(false)
        }, 2000)
      }
    }
  }

  return (
    <div className={css.container}>
      <Title>{nextLevel}F 달성 미션!</Title>
      {nextMissions.map((mission, order) => {
        switch (mission.type) {
          case 'mission':
            return (
              <Mission
                isComplete={mission.isComplete}
                key={mission.text}
                missionId={mission.missionId}
                missionOrder={order}
                onComplete={handleCorrectAnswer}
                text={mission.text}
              />
            )
          case 'quiz':
            return (
              <Quiz
                currentQuizCount={mission.currentQuizCount}
                key={mission.text}
                missionOrder={order}
                onCorrectAnswer={handleCorrectAnswer}
                quizIds={mission.quizsIds}
                text={mission.text}
              />
            )
        }
      })}
      {isViewConfeti && <Confetti />}
    </div>
  )
}

export default NextMissions

interface MissionProps {
  isComplete: boolean
  missionId: string
  missionOrder: number
  onComplete: (isComplete: boolean, missionOrder: number) => void
  text: string
}

const Mission = ({
  isComplete,
  text,
  missionId,
  missionOrder,
  onComplete,
}: MissionProps) => {
  const { push } = useFlow()
  const [isCompleted, setIsCompleted] = useState(isComplete)

  const handleMissionClick = async () => {
    if (isCompleted) {
      return
    }
    const data = await receive<{
      isComplete: boolean
    }>(push('MissionActivity', { missionId, missionName: text }))

    onComplete(data.isComplete, missionOrder)
    setIsCompleted(data.isComplete)
  }

  return (
    <div className={css.mission}>
      <div className={css.missionLeft}>
        <CheckBox isChecked={isCompleted} />
        {text}
      </div>
      <div
        className={css.missionRight}
        onClick={handleMissionClick}
        style={{
          color: isCompleted ? '#5F5F71' : '#5872FF',
          textDecorationLine: isCompleted ? 'none' : 'underline',
        }}
      >
        {isCompleted ? '달성완료' : '미션수행'}
      </div>
    </div>
  )
}

interface QuizProps {
  currentQuizCount: number
  missionOrder: number
  onCorrectAnswer: (isQuizComplete: boolean, missionOrder: number) => void
  quizIds: string[]
  text: string
}

const Quiz = ({
  text,
  currentQuizCount,
  quizIds,
  onCorrectAnswer,
  missionOrder,
}: QuizProps) => {
  const [count, setCount] = useState(currentQuizCount)
  const totalQuizCount = quizIds.length
  const isComplete = count === totalQuizCount

  const { push } = useFlow()

  const handleQuizClick = async () => {
    const { isCorrect } = await receive<{ isCorrect: boolean }>(
      push('QuizModal', {
        quizId: quizIds[currentQuizCount],
      })
    )

    if (isCorrect) {
      const nextCount = count + 1
      onCorrectAnswer(nextCount === totalQuizCount, missionOrder)
      setCount(nextCount)
    }
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
              {count}
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
