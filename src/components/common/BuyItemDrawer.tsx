import { useEffect, useRef, useState } from 'react'

import IconPoint from '~/asset/icons/IconPoint'

import * as css from './BuyItemDrawer.css'

interface BuyItemDrawerProps {}

const BuyItemDrawer = ({}: BuyItemDrawerProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isShow, _setIsShow] = useState(true)
  useEffect(() => {
    if (!ref.current) {
      return
    }
    if (isShow) {
      ref.current.style.setProperty('transform', `translateY(0px)`)
      return
    }

    ref.current.style.setProperty('transform', `translateY(72px)`)
  }, [isShow])

  return (
    <div className={css.container} ref={ref}>
      <div className={css.price}>
        <IconPoint className={css.icon} />
        <span className={css.text}>100</span>
      </div>
      <button className={css.button} type="button">
        <span className={css.buttonText}>구매하기</span>
      </button>
    </div>
  )
}

export default BuyItemDrawer
