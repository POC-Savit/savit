import type { ObjectType } from 'type-util'

import '@dotlottie/player-component'

// https://lottiefiles.com/tools/lottie-to-dotlottie?utm_source=dotlottieio

export interface DotLottieProps {
  autoplay?: boolean
  loop?: boolean
  source: string
  style?: ObjectType
}

const DotLottie = ({
  loop = false,
  autoplay = true,
  source,
  style,
}: DotLottieProps) => (
  <dotlottie-player
    autoplay={autoplay}
    loop={loop}
    mode="normal"
    src={source}
    style={style}
  />
)

export default DotLottie
