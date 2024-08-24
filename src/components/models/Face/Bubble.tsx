import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Bubble = (props: any) => {
  const { nodes, materials } = useGLTF('/Face/Bubble.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Bubble_1.geometry}
        material={materials.Gum}
        position={[0.013, 0.54, 0.54]}
        receiveShadow
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/Face/Bubble.glb')

export default Bubble
