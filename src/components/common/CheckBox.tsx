import IconCheck from '~/asset/icons/IconCheck'

import * as css from './CheckBox.css'

interface CheckBoxProps {
  className?: string
  isChecked: boolean
  onChange?: (isChecked: boolean) => void
}

const CheckBox = ({ isChecked, onChange, className }: CheckBoxProps) => {
  const handleCheckBoxClick = () => {
    onChange?.(!isChecked)
  }

  return (
    <div
      className={`${css.container} ${className}`}
      onClick={handleCheckBoxClick}
      style={{
        backgroundColor: isChecked ? '#5872FF' : '#F4F5FA',
      }}
    >
      {isChecked && <IconCheck />}
    </div>
  )
}

export default CheckBox
