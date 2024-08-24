import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const BeachHat = (props: any) => {
  const { nodes, materials } = useGLTF('/Head/BeachHat.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.bow_tie.geometry}
        material={materials.Pink}
        position={[0.122, 0.944, 0.065]}
        receiveShadow
        rotation={[-0.15, 0.044, -0.282]}
        scale={0.002}
      />
      <mesh
        castShadow
        geometry={nodes.hat.geometry}
        material={materials.Blue}
        position={[0.141, 1.01, 0.072]}
        receiveShadow
        rotation={[0.204, 0.26, -0.293]}
        scale={0.002}
      />
    </group>
  )
}

useGLTF.preload('/Head/BeachHat.glb')

export default BeachHat
