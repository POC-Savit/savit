import { useEffect, useRef } from 'react'

import * as css from './Tab.css'

type Props = {
  selectedItem: string
  items: string[]
  onSelect: (id: string) => void
}

const Tabs = ({ selectedItem, items, onSelect }: Props) => {
  const selectedIndex = items.findIndex((item) => item === selectedItem)
  const ref = useRef<HTMLDivElement>(null)

  console.log(selectedIndex)
  useEffect(() => {
    if (!ref.current) {
      return
    }
    console.log(`translateX(${selectedIndex * 100}%)`)
    ref.current.style.setProperty(
      'transform',
      `translateX(${selectedIndex * 100}%)`
    )
  }, [selectedIndex])

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {items.map((item) => (
          <li className={css.item} key={item}>
            <button
              className={css.button}
              onClick={() => {
                onSelect(item)
              }}
            >
              <span
                className={item === selectedItem ? css.selectedText : css.text}
              >
                {item}
              </span>
            </button>
          </li>
        ))}
        <div className={css.indicator} ref={ref}></div>
      </ul>
    </div>
  )
}

export default Tabs
