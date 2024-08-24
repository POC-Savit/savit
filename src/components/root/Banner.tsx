import * as css from './Banner.css'

interface BannerProps {}

const Banner = ({}: BannerProps) => {
  return (
    <div className={css.container}>
      <img alt="cake" height="57.93px" src="/Cake2.png" />
      <div className={css.titleArea}>
        <div className={css.title}>투썸플레이스 X 세이빗</div>
        <div className={css.subTitle}>스트로베리 모자쓰고 아이스박스 받기</div>
      </div>
    </div>
  )
}

export default Banner
