import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Band = (props: any) => {
  const { nodes, materials } = useGLTF('/Face/Band.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Cube_2.geometry}
        material={materials['재질.1']}
        position={[0.157, 0.531, 0.435]}
        receiveShadow
        rotation={[-0.19, 0.304, 0.655]}
        scale={0.003}
      />
      <mesh
        castShadow
        geometry={nodes.Cube.geometry}
        material={materials['재질.1']}
        position={[0.16, 0.533, 0.427]}
        receiveShadow
        rotation={[-0.108, 0.198, 0.633]}
        scale={0.003}
      />
    </group>
  )
}

useGLTF.preload('/Face/Band.glb')

export default Band
