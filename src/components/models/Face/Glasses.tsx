import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Glasses = (props: any) => {
  const { nodes, materials } = useGLTF('/Face/Glasses.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Cube_17.geometry}
        material={materials.Red}
        position={[-0.003, 0.646, 0.435]}
        receiveShadow
        rotation={[-0.156, 0, 0]}
        scale={0.005}
      />
      <mesh
        castShadow
        geometry={nodes.Cylinder_2.geometry}
        material={materials.Red}
        position={[0.126, 0.64, 0.44]}
        receiveShadow
        rotation={[1.414, 0, 0]}
        scale={0.005}
      />
      <mesh
        castShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Red}
        position={[-0.125, 0.64, 0.44]}
        receiveShadow
        rotation={[1.414, 0, 0]}
        scale={0.005}
      />
    </group>
  )
}

useGLTF.preload('/Face/Glasses.glb')

export default Glasses
