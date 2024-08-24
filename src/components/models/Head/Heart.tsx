import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Heart = (props: any) => {
  const { nodes, materials } = useGLTF('/Head/Heart.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Heart_1.geometry}
        material={materials.Red}
        position={[0.001, 1.179, 0.011]}
        receiveShadow
        rotation={[-0.028, 0.182, 0.141]}
        scale={0.002}
      />
    </group>
  )
}

useGLTF.preload('/Head/Heart.glb')

export default Heart
