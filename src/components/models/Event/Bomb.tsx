import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Bomb = (props: any) => {
  const { nodes, materials } = useGLTF('/Event/Bomb.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group position={[-0.599, 0.381, 0.688]} scale={0.004}>
        <mesh
          castShadow
          geometry={nodes.explosion1.geometry}
          material={materials.Gold}
          position={[29.275, 94.456, 33.413]}
          receiveShadow
          rotation={[-0.258, 0.462, -0.374]}
          scale={0.457}
        />
        <mesh
          castShadow
          geometry={nodes.cord.geometry}
          material={materials['Dark Brown']}
          position={[64.942, 50.266, 43.391]}
          receiveShadow
          rotation={[0.288, -0.328, -0.63]}
          scale={[0.067, 0.678, 0.067]}
        />
        <mesh
          castShadow
          geometry={nodes.bomb.geometry}
          material={materials.Eyes}
          position={[-4.409, -40.636, -3.292]}
          receiveShadow
          rotation={[0.345, -0.252, -0.606]}
          scale={3.309}
        />
      </group>
      <group
        position={[0.618, 0.27, -0.547]}
        rotation={[0.126, -0.924, 0.52]}
        scale={0.003}
      >
        <mesh
          castShadow
          geometry={nodes.explosion1_1.geometry}
          material={materials.Gold}
          position={[29.275, 94.456, 33.413]}
          receiveShadow
          rotation={[-0.258, 0.462, -0.374]}
          scale={0.457}
        />
        <mesh
          castShadow
          geometry={nodes.cord_1.geometry}
          material={materials['Dark Brown']}
          position={[64.942, 50.266, 43.391]}
          receiveShadow
          rotation={[0.288, -0.328, -0.63]}
          scale={[0.067, 0.678, 0.067]}
        />
        <mesh
          castShadow
          geometry={nodes.bomb_1.geometry}
          material={materials.Eyes}
          position={[-4.409, -40.636, -3.292]}
          receiveShadow
          rotation={[0.345, -0.252, -0.606]}
          scale={3.309}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Event/Bomb.glb')

export default Bomb
