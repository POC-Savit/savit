import { AppScreen } from '@stackflow/plugin-basic-ui'
import { useStack } from '@stackflow/react'
import { useEffect } from 'react'

import useConfetti from '~/hooks/useConfetti'
import { useFlow } from '~/stackflow'

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

  const { pop } = useFlow()
  const { activities } = useStack()

  useEffect(() => {
    setTimeout(() => {
      popEmoji()
    }, 500)
  }, [])

  const handleCTAClick = () => {
    pop()
  }

  const handleNextButtonClick = () => {
    activities.forEach(() => {
      pop()
    })
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
    </AppScreen>
  )
}

export default NextLevelCongratuationActivity
