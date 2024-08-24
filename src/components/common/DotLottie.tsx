import type { ObjectType } from 'type-util'

import '@dotlottie/player-component'

// https://lottiefiles.com/tools/lottie-to-dotlottie?utm_source=dotlottieio

export type Props = {
  loop?: boolean
  autoplay?: boolean
  source: string
  style?: ObjectType
}

const DotLottie = ({ loop = false, autoplay = true, source, style }: Props) => (
  <dotlottie-player
    autoplay={autoplay}
    loop={loop}
    mode="normal"
    src={source}
    style={style}
  />
)

export default DotLottie
