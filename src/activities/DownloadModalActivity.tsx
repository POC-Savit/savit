import { Modal } from '@stackflow/plugin-basic-ui'
import { useAtomValue } from 'jotai'

import IconDownload from '~/asset/icons/IconDownload'
import IconLogo from '~/asset/icons/IconSavit'
import IconStair from '~/asset/icons/IconStair'
import { UI, User } from '~/stores'

import * as css from './DownloadModalActivity.css'

interface DownloadModalActivityProps {}

const DownloadModalActivity = ({}: DownloadModalActivityProps) => {
  const currentImage = useAtomValue(UI.currentImage)
  const currentLevel = useAtomValue(User.currentLevel)

  return (
    <>
      <Modal borderRadius="36px" dimBackgroundColor="rgba(0, 0, 0, 0.5)">
        <div className={css.container}>
          <div className={css.title}>
            <span className={css.titleBold}>나</span>의 세이빗
          </div>
          <img className={css.image} src={currentImage} />
          <div className={css.badge}>
            <IconStair className={css.icon} />
            <div className={css.badgeText}>{currentLevel}F</div>
          </div>
          <a
            className={css.button}
            download="My_Character.png"
            href={currentImage}
          >
            <IconDownload />
            이미지 저장하기
          </a>
          <IconLogo />
        </div>
      </Modal>
    </>
  )
}

export default DownloadModalActivity
