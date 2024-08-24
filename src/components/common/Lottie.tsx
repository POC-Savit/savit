import lottie from 'lottie-web'
import { CSSProperties, ReactElement, useEffect, useRef } from 'react'

export interface Props {
  autoplay?: boolean
  children?: ReactElement
  className?: string
  loop?: boolean
  onComplete?: () => void
  source: string
  speed?: number
  style?: CSSProperties
}

const Lottie = ({
  className,
  loop = false,
  autoplay = true,
  source,
  style,
  speed = 1,
  children,
  onComplete,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const instance = lottie.loadAnimation({
        animationData: source,
        container: ref.current,
        loop,
        autoplay,
      })

      if (onComplete) {
        instance.addEventListener('complete', onComplete)
      }

      instance.setSpeed(speed)

      return () => {
        instance.destroy()
      }
    }
  }, [autoplay, loop, onComplete, source, speed])

  return (
    <div className={className} ref={ref} style={style}>
      {children}
    </div>
  )
}

export default Lottie
