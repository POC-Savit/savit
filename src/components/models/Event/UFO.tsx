import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const UFO = (props: any) => {
  const { nodes, materials } = useGLTF('/Event/UFO.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.littleglasses.geometry}
        material={nodes.littleglasses.material}
        position={[0, 1.447, -0.006]}
        receiveShadow
        rotation={[1.577, 0, 0]}
        scale={0.002}
      />
      <mesh
        castShadow
        geometry={nodes.ringbottom.geometry}
        material={materials['Light Blue']}
        position={[0, 1.351, 0]}
        receiveShadow
        rotation={[1.577, 0, 0]}
        scale={0.003}
      />
      <mesh
        castShadow
        geometry={nodes.glass.geometry}
        material={materials.Blue}
        position={[0.002, 1.754, -0.015]}
        receiveShadow
        rotation={[0.007, 0, 0]}
        scale={0.004}
      />
      <mesh
        castShadow
        geometry={nodes.ringtop.geometry}
        material={materials['Light Blue']}
        position={[0.003, 1.763, -0.011]}
        receiveShadow
        rotation={[-1.564, 0, 0]}
        scale={0.004}
      />
      <mesh
        castShadow
        geometry={nodes.light.geometry}
        material={materials.Gum}
        position={[0, 1.337, 0]}
        receiveShadow
        scale={0.011}
      />
      <mesh
        castShadow
        geometry={nodes.saucer.geometry}
        material={materials['Light Blue']}
        position={[0, 1.727, 0]}
        receiveShadow
        rotation={[0.001, 0, 0]}
        scale={0.003}
      />
      <group
        position={[0, 1.447, -0.006]}
        rotation={[1.577, 0, 0]}
        scale={0.002}
      >
        <mesh
          castShadow
          geometry={nodes.Mesh.geometry}
          material={materials.Yellow}
          position={[0, 300, 0]}
          receiveShadow
        />
        <mesh
          castShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.Yellow}
          position={[212.132, 212.132, 0]}
          receiveShadow
        />
        <mesh
          castShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.Yellow}
          position={[300, 0, 0]}
          receiveShadow
        />
        <mesh
          castShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.Yellow}
          position={[212.132, -212.132, 0]}
          receiveShadow
        />
        <mesh
          castShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.Yellow}
          position={[0, -300, 0]}
          receiveShadow
        />
        <mesh
          castShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials.Yellow}
          position={[-212.132, -212.132, 0]}
          receiveShadow
        />
        <mesh
          castShadow
          geometry={nodes.Mesh_6.geometry}
          material={materials.Yellow}
          position={[-300, 0, 0]}
          receiveShadow
        />
        <mesh
          castShadow
          geometry={nodes.Mesh_7.geometry}
          material={materials.Yellow}
          position={[-212.132, 212.132, 0]}
          receiveShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Event/UFO.glb')

export default UFO
