import type { GLTFType } from 'type-util'

import { PerspectiveCamera, useGLTF } from '@react-three/drei'

export function BaseBody(props: any) {
  const { nodes } = useGLTF('/BaseBody.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-225.028, 47.661, 86.723]} scale={[1, 1, 0.999]}>
          <group position={[-0.442, 16.532, 37.837]}>
            <mesh
              castShadow
              geometry={nodes.Sphere_2.geometry}
              material={nodes.Sphere_2.material}
              position={[-7.112, 0, 0.877]}
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              geometry={nodes.Sphere.geometry}
              material={nodes.Sphere.material}
              position={[7.112, 0, 0.877]}
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <mesh
            castShadow
            geometry={nodes.Body.geometry}
            material={nodes.Body.material}
            position={[0, 7.335, 0]}
            receiveShadow
          />
        </group>
        <PerspectiveCamera
          far={100000}
          fov={45}
          makeDefault={false}
          near={70}
          position={[51.412, 170.245, 566.098]}
          rotation={[-0.122, 0.523, 0.061]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/BaseBody.glb')
