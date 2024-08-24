import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Tulip = (props: any) => {
  const { nodes, materials } = useGLTF('/Head/Tulip.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Cube_5.geometry}
        material={materials.Green}
        position={[-0.04, 1.136, -0.008]}
        receiveShadow
        rotation={[-Math.PI, 0, 2.705]}
        scale={0.004}
      />
      <mesh
        castShadow
        geometry={nodes.Cube_4.geometry}
        material={materials.Green}
        position={[0.022, 1.281, -0.017]}
        receiveShadow
        rotation={[-0.052, 0.007, -0.125]}
        scale={0.004}
      />
      <mesh
        castShadow
        geometry={nodes.Cube_3.geometry}
        material={materials.Orange}
        position={[0.034, 1.362, -0.022]}
        receiveShadow
        rotation={[0, 0, 0.047]}
        scale={0.004}
      />
    </group>
  )
}

useGLTF.preload('/Head/Tulip.glb')

export default Tulip
