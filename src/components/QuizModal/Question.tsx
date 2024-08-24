import { Quiz } from 'types/quiz'

import { IconO, IconX } from './OXIcon'
import * as css from './Question.css'

interface QuestionProps {
  onSubmited?: (isCorrect: boolean) => void
  quiz: Quiz
}

const Question = ({ quiz, onSubmited }: QuestionProps) => {
  const isOX = quiz.choices.length === 2

  const handleAnswerButtonClick = (answerIdx: number) => {
    const isCorrect = quiz.answerIdx === answerIdx

    if (onSubmited) {
      onSubmited(isCorrect)
    }
  }

  return (
    <div className={css.container}>
      <p className={css.question}>{quiz.question}</p>
      <div className={css.answerArea}>
        {
          isOX ? (
            <div className={css.oxButton}>
              <OXButton onClick={handleAnswerButtonClick} type="O" />
              <OXButton onClick={handleAnswerButtonClick} type="X" />
            </div>
          ) : null // TODO. 객관식
        }
      </div>
    </div>
  )
}

export default Question

const OXButton = ({
  type,
  onClick,
}: {
  type: 'O' | 'X'
  onClick: (idx: number) => void
}) => {
  return (
    <button
      className={css.answerButton}
      onClick={() => {
        onClick(type === 'O' ? 0 : 1)
      }}
      style={{
        backgroundColor:
          type === 'O' ? 'rgba(88,114,255,0.1)' : 'rgba(255,82,82,0.1)',
        color: type === 'O' ? '#5872FF' : '#FF5252',
      }}
    >
      <div>{type === 'O' ? <IconO /> : <IconX />}</div>
      <div>{type === 'O' ? '그렇다' : '아니다'}</div>
    </button>
  )
}
