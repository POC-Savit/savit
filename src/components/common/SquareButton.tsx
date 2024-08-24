import IconCheck from '~/asset/icons/IconCheck'
import IconPoint from '~/asset/icons/IconPoint'

import * as css from './SquareButton.css'

type Props = {
  title: string
  isSelected?: boolean
  isOwned?: boolean
  price?: number
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function SquareButton({
  title,
  isSelected,
  isOwned = false,
  price = 20,
  ...props
}: Props) {
  return (
    <div className={css.container}>
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
      {isOwned ? (
        <div className={css.owned}>구매한 아이템</div>
      ) : (
        <div className={css.price}>
          <IconPoint className={css.priceIcon} />
          {price}
        </div>
      )}
    </div>
  )
}

export default SquareButton