import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Earphone = (props: any) => {
  const { nodes, materials } = useGLTF('/Face/Earphone.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.535, 0.461, 0.087]}
        rotation={[2.967, -0.186, -2.709]}
        scale={0.002}
      >
        <mesh
          castShadow
          geometry={nodes.Cube.geometry}
          material={materials.Pink}
          position={[0.555, -34.646, 0]}
          receiveShadow
          rotation={[0, 0, -Math.PI / 4]}
        />
        <mesh
          castShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.Eyes}
          position={[-27.788, -63.762, 1.935]}
          receiveShadow
          rotation={[0, 0, -Math.PI / 4]}
        />
      </group>
      <group
        position={[0.527, 0.481, 0.08]}
        rotation={[-0.201, 0.042, 0.282]}
        scale={0.002}
      >
        <mesh
          castShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.Eyes}
          position={[-27.788, -63.762, 1.935]}
          receiveShadow
          rotation={[0, 0, -Math.PI / 4]}
        />
        <mesh
          castShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Pink}
          position={[-1.487, -34.053, -0.089]}
          receiveShadow
          rotation={[-0.056, -0.182, -0.829]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Face/Earphone.glb')

export default Earphone
