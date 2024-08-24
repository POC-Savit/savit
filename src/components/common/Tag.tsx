import * as css from './Tag.css'

interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  title: string
}

const Tag = ({ selected = false, title, ...props }: TagProps) => {
  return (
    <button className={selected ? css.selected : css.container} {...props}>
      {title}
    </button>
  )
}

export default Tag
