import type { Nullable } from 'type-util'

import { useAtom, useSetAtom } from 'jotai'
import { useEffect, useRef, useState } from 'react'

import IconPoint from '~/asset/icons/IconPoint'
import { buyItem, equiItem } from '~/hooks/queris'
import { Character } from '~/stores'

import * as css from './BuyItemDrawer.css'

interface BuyItemDrawerProps {}

const BuyItemDrawer = ({}: BuyItemDrawerProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const [isCurrentSelected, setIsCurrentSelected] = useAtom(
    Character.currentSelected
  )
  const getItems = useSetAtom(Character.getItems)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    if (isCurrentSelected) {
      ref.current.style.setProperty('visibility', `visible`)
      ref.current.style.setProperty('transform', `translateY(0px)`)
      return
    }

    ref.current.style.setProperty('visibility', `hidden`)
    ref.current.style.setProperty('transform', `translateY(72px)`)
  }, [isCurrentSelected])

  const handleBuyItem = async () => {
    if (!isCurrentSelected) {
      return
    }
    await buyItem(isCurrentSelected)
    await equiItem(isCurrentSelected)
    await getItems()
    setIsCurrentSelected(null)
  }

  const [price, setPrice] = useState<Nullable<number>>(null)

  useEffect(() => {
    if (isCurrentSelected?.price) {
      setPrice(isCurrentSelected?.price)
    }
  }, [isCurrentSelected?.price])

  return (
    <div className={css.container} ref={ref}>
      <div className={css.price}>
        <IconPoint className={css.icon} />
        <span className={css.text}>{price}</span>
      </div>
      <button className={css.button} onClick={handleBuyItem} type="button">
        <span className={css.buttonText}>구매하기</span>
      </button>
    </div>
  )
}

export default BuyItemDrawer
