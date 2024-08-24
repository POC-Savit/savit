import { type ObjectMap } from '@react-three/fiber'
import { Mesh } from 'three'
import { type GLTF } from 'three-stdlib'

declare module 'type-util' {
  export type KeyOf<T> = keyof T
  export type ValueOf<T> = T[keyof T]
  export type ObjectType<T = any> = { [key: string]: T }
  export type Nullable<T> = null | T
}
