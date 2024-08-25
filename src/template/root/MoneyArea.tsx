import { useAtomValue } from 'jotai'
import CountUp from 'react-countup'

import IconPoint from '~/asset/icons/IconPoint'
import BankContainer from '~/components/root/BankContainer'
import Banner from '~/components/root/Banner'
import { User } from '~/stores'

import * as css from './MoneyArea.css'
interface MoneyAreaProps {}

const MoneyArea = ({}: MoneyAreaProps) => {
  const credit = useAtomValue(User.credit)
  const asset = useAtomValue(User.asset)

  return (
    <div className={css.container}>
      <div className={css.topContainer}>
        <h2 className={css.titleText}>
          <span className={css.titleTextBold}>세이빗</span>과 함께 모았어요👏🏻👏🏻
        </h2>
        <div className={css.moneyArea}>
          <IconPoint className={css.icon} />
          <CountUp
            decimal=","
            duration={0.5}
            end={credit}
            start={0}
            suffix="머니"
          >
            {({ countUpRef }) => (
              <span className={css.moneyText} ref={countUpRef} />
            )}
          </CountUp>
        </div>
        <div className={css.savedMoneyText}>총 저축금액 3,201,000원</div>
      </div>
      <div className={css.divider} />
      <div className={css.bottomContainer}>
        <div className={css.titleArea}>
          <h2 className={css.bottomTitleText}>머니 내역</h2>
          <button
            className={css.bottomTitleTextLink}
            onClick={() => alert('나중에 추가될 기능입니다.')}
          >
            계좌 추가
          </button>
        </div>
        {[
          {
            name: 'kakao',
            balance: 35,
            title: '26주 적금',
          },
          {
            name: 'hana',
            balance: 25,
            title: '청년내일저축계좌',
          },
          {
            name: 'toss',
            balance: 10,
            title: '키워봐요 적금',
          },
          {
            name: 'kb',
            balance: 50,
            title: 'KB 특별한 적금',
          },
          ...asset,
        ].map((item, index) => (
          <BankContainer
            imgLink={`/${item.name}.png`}
            key={item.name + index}
            mainText={item.title}
            plusMoney={item.balance}
            subText={'적금 성공'}
          />
        ))}
        <Banner />
      </div>
    </div>
  )
}

export default MoneyArea
