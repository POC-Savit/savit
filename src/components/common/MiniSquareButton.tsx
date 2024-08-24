import { useMemo } from 'react'

import IconBack from '~/asset/icons/IconBack'
import IconPoint from '~/asset/icons/IconPoint'
import IconReturn from '~/asset/icons/IconReturn'
import IconShare from '~/asset/icons/IconShare'
import IconShop from '~/asset/icons/IconShop'
import IconStair from '~/asset/icons/IconStair'

import * as css from './MiniSquareButton.css'

type IconType = 'Back' | 'Point' | 'Return' | 'Share' | 'Shop' | 'Stair'

interface MiniSquareButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconType: IconType
  isSelected?: boolean
  title?: string
}

const MiniSquareButton = ({
  title,
  isSelected,
  iconType,
  ...props
}: MiniSquareButtonProps) => {
  const icon = useMemo(() => {
    if (iconType === 'Return') {
      return <IconReturn className={css.icon} />
    }
    if (iconType === 'Back') {
      return <IconBack className={css.icon} />
    }
    if (iconType === 'Point') {
      return <IconPoint className={css.icon} />
    }
    if (iconType === 'Shop') {
      return <IconShop className={css.icon} />
    }
    if (iconType === 'Share') {
      return <IconShare className={css.icon} />
    }
    if (iconType === 'Stair') {
      return <IconStair className={css.icon} />
    }
  }, [iconType])
  return (
    <button
      className={isSelected ? css.selectedButton : css.button}
      type="button"
      {...props}
    >
      {icon}
      {title && <span className={css.text}>{title}</span>}
    </button>
  )
}

export default MiniSquareButton
