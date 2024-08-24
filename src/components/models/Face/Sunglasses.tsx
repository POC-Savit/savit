import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Sunglasses = (props: any) => {
  const { nodes, materials } = useGLTF('/Face/Sunglasses.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.glasses.geometry}
        material={materials.Glass}
        position={[-0.01, 0.571, 0.479]}
        receiveShadow
        scale={0.002}
      />
      <mesh
        castShadow
        geometry={nodes.body.geometry}
        material={materials.Blue}
        position={[-0.009, 0.567, 0.466]}
        receiveShadow
        scale={0.001}
      />
    </group>
  )
}

useGLTF.preload('/Face/Sunglasses.glb')

export default Sunglasses
