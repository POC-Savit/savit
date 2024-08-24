import { Modal } from '@stackflow/plugin-basic-ui'
import MyAssetImg from 'public/LevelImages/myAsset.png'
import { useLayoutEffect, useRef, useState } from 'react'
import { MOCK_QUIZ } from 'types/quiz'

import Question from '~/components/QuizModal/Question'
import QuestionResult from '~/components/QuizModal/QuestionResult'

import * as css from './QuizModal.css'

interface QuizModalProps {
  params: {
    quizId: string
  }
}

const QuizModal = ({ params: { quizId } }: QuizModalProps) => {
  const quiz = MOCK_QUIZ[quizId]
  const [isSubmitted, setIsSubmitted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (containerRef.current) {
      const parrent = containerRef.current.parentElement
      parrent?.style.setProperty('margin', '0px 20px')
    }
  })

  return (
    <Modal
      borderRadius="36px"
      dimBackgroundColor="rgba(0, 0, 0, 0.5)"
      // onOutsideClick={(e) => {
      //   e.preventDefault()
      // }}
    >
      <div className={css.container} ref={containerRef}>
        <div className={css.titleArea}>
          <div className={css.imageBox}>
            <img alt="my level" className={css.image} src={MyAssetImg} />
          </div>
          <h2 className={css.title}>레벨업 퀴즈</h2>
        </div>
        <div>{isSubmitted ? <QuestionResult /> : <Question quiz={quiz} />}</div>
      </div>
    </Modal>
  )
}

export default QuizModal
