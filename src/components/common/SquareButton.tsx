import IconCheck from '~/asset/icons/IconCheck'

import * as css from './SquareButton.css'

type Props = {
  title: string
  isSelected?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function SquareButton({ title, isSelected, ...props }: Props) {
  return (
    <button
      {...props}
      className={isSelected ? css.selectedButton : css.button}
      type="button"
    >
      {isSelected && <IconCheck className={css.icon} />}
      {title}
    </button>
  )
}

export default SquareButton
