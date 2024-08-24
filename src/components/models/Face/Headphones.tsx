import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Headphones = (props: any) => {
  const { nodes, materials } = useGLTF('/Face/Headphones.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Gold}
        position={[0.599, 0.514, 0.007]}
        receiveShadow
        rotation={[-0.357, 0, -0.175]}
        scale={0.005}
      />
      <mesh
        castShadow
        geometry={nodes.Torus.geometry}
        material={materials.Purple}
        position={[0.022, 0.569, -0.018]}
        receiveShadow
        rotation={[-0.608, 0, -Math.PI / 2]}
        scale={[0.005, 0.008, 0.005]}
      />
      <group
        position={[-0.529, 0.403, 0.035]}
        rotation={[1.214, -1.543, -Math.PI / 2]}
        scale={0.004}
      >
        <mesh
          castShadow
          geometry={nodes.Rectangle_3.geometry}
          material={materials.Purple}
          position={[-1.204, -0.119, 15.358]}
          receiveShadow
        />
        <mesh
          castShadow
          geometry={nodes.Rectangle_2.geometry}
          material={materials.Purple}
          position={[-1.204, -0.119, 8.505]}
          receiveShadow
        />
        <mesh
          castShadow
          geometry={nodes.Cube.geometry}
          material={materials.Cotton}
          position={[0, 0, -7.358]}
          receiveShadow
        />
      </group>
      <group
        position={[0.509, 0.419, 0.029]}
        rotation={[-0.357, 1.571, 0]}
        scale={0.004}
      >
        <mesh
          castShadow
          geometry={nodes.Rectangle_3_1.geometry}
          material={materials.Purple}
          position={[-1.204, -0.119, 15.358]}
          receiveShadow
        />
        <mesh
          castShadow
          geometry={nodes.Rectangle_2_1.geometry}
          material={materials.Purple}
          position={[-1.204, -0.119, 8.505]}
          receiveShadow
        />
        <mesh
          castShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Cotton}
          position={[0, 0, -7.358]}
          receiveShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Face/Headphones.glb')

export default Headphones
