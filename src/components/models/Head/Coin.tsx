import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Coin = (props: any) => {
  const { nodes, materials } = useGLTF('/Head/Coin.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Gold}
        position={[0.006, 1.224, -0.013]}
        receiveShadow
        rotation={[Math.PI / 2, 0, 0.447]}
        scale={[0.004, 0.002, 0.004]}
      />
      <mesh
        castShadow
        geometry={nodes.$.geometry}
        material={materials.Gold}
        position={[-0.047, 1.135, -0.055]}
        receiveShadow
        rotation={[0, -0.447, 0]}
        scale={[0.004, 0.004, 0.003]}
      />
    </group>
  )
}

useGLTF.preload('/Head/Coin.glb')

export default Coin
