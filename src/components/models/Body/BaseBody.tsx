import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

function BaseBody(props: any) {
  const { nodes, materials } = useGLTF('/BaseBody.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group position={[-0.004, 0.653, 0.378]} scale={0.01}>
        <mesh
          castShadow
          geometry={nodes.Sphere_2.geometry}
          material={materials.재질}
          position={[-7.112, 0, 0.877]}
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          geometry={nodes.Sphere.geometry}
          material={materials.재질}
          position={[7.112, 0, 0.877]}
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        geometry={nodes.Body.geometry}
        material={materials.Base}
        position={[0, 0.561, 0]}
        receiveShadow
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/BaseBody.glb')

export default BaseBody
