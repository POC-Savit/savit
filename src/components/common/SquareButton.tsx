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
      <img
        alt={title}
        className={isSelected ? css.selectedImage : ''}
        height="70px"
        src={`/${title}.png`}
        width="70px"
      />
    </button>
  )
}

export default SquareButton
