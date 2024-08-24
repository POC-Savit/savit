import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Bulb = (props: any) => {
  const { nodes, materials } = useGLTF('/Head/Bulb.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.018, 0.018]} scale={0.005}>
        <mesh
          castShadow
          geometry={nodes.Sphere_2.geometry}
          material={materials.Eyes}
          position={[-1.382, 18.853, -3.682]}
          receiveShadow
          scale={0.892}
        />
        <mesh
          castShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Eyes}
          position={[-1.082, 28.98, -2.048]}
          receiveShadow
          scale={0.817}
        />
        <mesh
          castShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Light Yellow']}
          position={[0, 82.564, 0]}
          receiveShadow
          scale={0.817}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Head/Bulb.glb')

export default Bulb
