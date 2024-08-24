import { Quiz } from 'types/quiz'

import * as css from './QuestionResult.css'

interface QuestionResultProps {
  quiz: Quiz
}

const QuestionResult = ({ quiz }: QuestionResultProps) => {
  const answer = quiz.choices[quiz.answerIdx]
  const isOX = quiz.choices.length === 2

  console.log('##answer', answer, typeof answer)

  const correct = isOX ? (answer === '0' || answer === 'O' ? 'O' : 'X') : answer

  console.log('##correct', correct)

  return (
    <div className={css.container}>
      <div className={css.correct}>정답: {correct}</div>
      <p className={css.desc}>{quiz.description}</p>
    </div>
  )
}

export default QuestionResult
