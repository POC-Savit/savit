declare namespace JSX {
  import { HTMLAttributes } from 'react'

  interface IntrinsicElements {
    'dotlottie-player': {
      loop: boolean
      autoplay: boolean
      mode: 'bounce' | 'normal'
      src: string
      style: HTMLAttributes<HTMLDivElement> | undefined
    }
  }
}

declare module '@dotlottie/player-component' {
  import { HTMLAttributes } from 'react'

  interface IntrinsicElements {
    'dotlottie-player': {
      loop: boolean
      autoplay: boolean
      mode: 'bounce' | 'normal'
      src: string
      style: HTMLAttributes<HTMLDivElement> | undefined
    }
  }
}
