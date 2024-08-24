import { type ObjectMap } from '@react-three/fiber'
import { Mesh } from 'three'
import { type GLTF } from 'three-stdlib'

declare module 'type-util' {
  export type KeyOf<T> = keyof T
  export type ValueOf<T> = T[keyof T]
  export type ObjectType<T = any> = { [key: string]: T }
  export type ObjectInType<T = any> = { [key in T]: string }
  export type Nullable<T> = null | T
  export type GLTFType = {
    nodes: {
      [key: string]: {
        skeleton: any
      } & Mesh
    }
  } & GLTF &
    ObjectMap
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any
      axesHelper: any
      directionalLight: any
      group: any
      mesh: any
      orthographicCamera: any
      outlinePass: any
    }
  }
}
