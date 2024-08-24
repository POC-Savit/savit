import * as css from './Title.css'

interface TitleProps {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <h2 className={css.title}>{children}</h2>
}

export default Title
