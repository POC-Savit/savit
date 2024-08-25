import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'

import IconPoint from '~/asset/icons/IconPoint'
import MiniSquareButton from '~/components/common/MiniSquareButton'
import { useFlow } from '~/stackflow'
import { UI, User } from '~/stores'

import ShowRoomNormal from '../3d/ShowRoomNormal'
import * as css from './Root.css'

interface ShopProps {}

const Root = ({}: ShopProps) => {
  const { push } = useFlow()
  const currentLevel = useAtomValue(User.currentLevel)
  const setShareStatus = useSetAtom(UI.shareStatus)

  const handleStairClick = () => {
    push('LevelActivity', {})
  }
  const handleDownloadCLik = () => {
    setShareStatus(true)
    push('DownloadModalActivity', {})
  }

  const handleShopClick = () => {
    push('ShopActivity', {})
  }

  const loginStatus = useAtomValue(UI.loginStatus)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (loginStatus) {
      setShowToast(true)
    }
  }, [loginStatus])
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) {
      return
    }
    if (showToast) {
      ref.current.style.setProperty('transform', `translate(-50%, 50%)`)
      setTimeout(() => {
        setShowToast(false)
      }, 3000)
      return
    }
    ref.current.style.setProperty('transform', `translate(-50%, -100%)`)
  }, [showToast])

  const [showNewsToast, setShowNewsToast] = useState(false)
  useEffect(() => {
    if (!showToast) {
      setTimeout(() => setShowNewsToast(true), 2000)
    }
  }, [showToast])
  const infoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!infoRef.current || showToast) {
      return
    }
    if (showNewsToast) {
      infoRef.current.style.setProperty('transform', `translate(-50%, 50%)`)
      setTimeout(() => {
        setShowNewsToast(false)
      }, 3000)
      return
    }
    infoRef.current.style.setProperty('transform', `translate(-50%, -100%)`)
  }, [showToast, showNewsToast])

  return (
    <div className={css.container}>
      <div className={css.toast} ref={ref}>
        <IconPoint className={css.icon} />
        <span>세이빗머니가 충전됐어요</span>
      </div>
      <a
        className={css.info}
        href="https://news.naver.com/section/101"
        ref={infoRef}
        rel="noreferrer"
        target="_blank"
      >
        🚨 오늘의 경제소식이 도착했어요
      </a>
      <ShowRoomNormal />
      <MiniSquareButton
        className={css.stairShake}
        iconType="Stair"
        onClick={handleStairClick}
      >
        <CountUp
          decimal=","
          duration={10}
          end={currentLevel}
          start={1}
          suffix="F"
        >
          {({ countUpRef }) => <span className={css.text} ref={countUpRef} />}
        </CountUp>
      </MiniSquareButton>
      <MiniSquareButton
        className={css.shareShake}
        iconType="Share"
        onClick={handleDownloadCLik}
      />
      <MiniSquareButton
        className={css.shopShake}
        iconType="Shop"
        onClick={handleShopClick}
      />
    </div>
  )
}

export default Root
