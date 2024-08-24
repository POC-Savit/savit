import Mission1Png from './images/Mission1.png'
import * as css from './Mission1.css'

interface Mission1Props {
  onCTAClick: () => void
}

const Mission1 = ({ onCTAClick }: Mission1Props) => {
  return (
    <div className={css.container}>
      <div className={css.texts}>
        <div>투자자산 비중이 높으면</div>
        <div className={css.hilight}>손실을 봐도 수익을 높일 수 있어요</div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <div className={css.imageWrapper}>
          <img alt="Mission1" className={css.img} src={Mission1Png} />
        </div>
      </div>
      <div className={css.desc}>
        설정한 목표는 마이페이지에서 바꿀 수 있어요
      </div>
      <button className={css.button} onClick={onCTAClick}>
        목표 설정하기
      </button>
    </div>
  )
}

export default Mission1
