import * as css from './BankContainer.css'

interface BankContainerProps {
  imgLink: string
  mainText: string
  plusMoney: string
  subText: string
}

const BankContainer = ({
  subText,
  mainText,
  imgLink,
  plusMoney,
}: BankContainerProps) => {
  return (
    <div className={css.container}>
      <img alt={imgLink} className={css.imgArea} src={imgLink} />
      <div className={css.textArea}>
        <div className={css.mainText}>{mainText}</div>
        <div className={css.subText}>
          {subText}
          <span className={css.subBoldText}>
            {' +'}
            {plusMoney}머니
          </span>
        </div>
      </div>
    </div>
  )
}

export default BankContainer
