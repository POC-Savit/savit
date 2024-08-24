import * as css from './DefaultMission.css'

interface DefaultMissionProps {
  missionName: string
  onCancelClick: () => void
  onCTAClick: () => void
}

const DefaultMission = ({
  missionName,
  onCTAClick,
  onCancelClick,
}: DefaultMissionProps) => {
  return (
    <div className={css.container}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <div className={css.texts}>
          <div className={css.hilight}>{missionName}</div>
          <div>미션을 완료해주세요</div>
        </div>
      </div>
      <div className={css.desc}>
        설정한 목표는 마이페이지에서 바꿀 수 있어요
      </div>
      <button className={css.button} onClick={onCTAClick}>
        미션 완료하기
      </button>
      <button className={css.cancelButton} onClick={onCancelClick}>
        다음에 하기
      </button>
    </div>
  )
}

export default DefaultMission
