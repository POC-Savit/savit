import { AppScreen } from '@stackflow/plugin-basic-ui'
import { useStack } from '@stackflow/react'
import { useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

import useConfetti from '~/hooks/useConfetti'
import { useFlow } from '~/stackflow'
import { User } from '~/stores'

import * as css from './NextLevelCongratuationActivity.css'

import PiggyCoinImg from '/public/PiggyCoin.png'

interface NextLevelCongratuationActivityProps {
  params: {
    level: number
  }
}

const NextLevelCongratuationActivity = ({
  params: { level },
}: NextLevelCongratuationActivityProps) => {
  const { popEmoji } = useConfetti()

  const setCurrentLevel = useSetAtom(User.currentLevel)

  const { pop } = useFlow()
  const { activities } = useStack()
  const [isViewConfeti, setIsViewConfeti] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      popEmoji()
    }, 500)

    setIsViewConfeti(true)

    setTimeout(() => {
      setIsViewConfeti(false)
    }, 3000)
  }, [])

  const handleCTAClick = () => {
    pop()
    setCurrentLevel((prev) => prev + 1)
  }

  const handleNextButtonClick = () => {
    activities.forEach(() => {
      pop()
    })

    setTimeout(() => {
      setCurrentLevel((prev) => prev + 1)
    }, 60)
  }

  return (
    <AppScreen>
      <div className={css.background}>
        <div className={css.imageWrapper}>
          <img alt="PiggyCoin" className={css.image} src={PiggyCoinImg} />
        </div>
      </div>
      <div className={css.container}>
        <div className={css.textWrapper}>
          <div className={css.title}>
            <strong className={css.hilight}>{level}F</strong>에 도착했어요!
          </div>
          <div className={css.desc}>{level}F 미션을 확인하고 달성해보세요!</div>
        </div>

        <div className={css.buttonWrapper}>
          <button className={css.cta} onClick={handleCTAClick}>
            미션 확인하기
          </button>
          <button className={css.nextButton} onClick={handleNextButtonClick}>
            다음에 하기
          </button>
        </div>
      </div>
      {isViewConfeti && <Confetti />}
    </AppScreen>
  )
}

export default NextLevelCongratuationActivity
