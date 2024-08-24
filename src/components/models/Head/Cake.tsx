import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Cake = (props: any) => {
  const { nodes, materials } = useGLTF('/Head/Cake.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.04, 1.278, 0.118]}
        rotation={[1.716, -0.468, 1.923]}
        scale={0.001}
      >
        <mesh
          castShadow
          geometry={nodes.Cube_41.geometry}
          material={materials.Green}
          position={[4.975, 38.224, 9.365]}
          receiveShadow
          rotation={[0.349, 0.346, -0.976]}
        />
        <mesh
          castShadow
          geometry={nodes.Cube_40.geometry}
          material={materials.Red}
          position={[0, -13.546, -16.172]}
          receiveShadow
        />
      </group>
      <group
        position={[0.1, 1.274, 0.073]}
        rotation={[1.267, -0.22, 0.714]}
        scale={0.001}
      >
        <mesh
          castShadow
          geometry={nodes.Cube_41_1.geometry}
          material={materials.Green}
          position={[4.975, 38.224, 9.365]}
          receiveShadow
          rotation={[0.349, 0.346, -0.976]}
        />
        <mesh
          castShadow
          geometry={nodes.Cube_40_1.geometry}
          material={materials.Red}
          position={[0, -13.546, -16.172]}
          receiveShadow
        />
      </group>
      <group
        position={[0.088, 1.278, -0.075]}
        rotation={[1.379, 0.109, -0.938]}
        scale={0.001}
      >
        <mesh
          castShadow
          geometry={nodes.Cube_41_2.geometry}
          material={materials.Green}
          position={[4.975, 38.224, 9.365]}
          receiveShadow
          rotation={[0.349, 0.346, -0.976]}
        />
        <mesh
          castShadow
          geometry={nodes.Cube_40_2.geometry}
          material={materials.Red}
          position={[0, -13.546, -16.172]}
          receiveShadow
        />
      </group>
      <group
        position={[-0.06, 1.278, -0.106]}
        rotation={[1.823, 0.32, -2.418]}
        scale={0.001}
      >
        <mesh
          castShadow
          geometry={nodes.Cube_41_3.geometry}
          material={materials.Green}
          position={[4.975, 38.224, 9.365]}
          receiveShadow
          rotation={[0.349, 0.346, -0.976]}
        />
        <mesh
          castShadow
          geometry={nodes.Cube_40_3.geometry}
          material={materials.Red}
          position={[0, -13.546, -16.172]}
          receiveShadow
        />
      </group>
      <group
        position={[-0.132, 1.283, 0.02]}
        rotation={[1.934, -0.431, 2.947]}
        scale={0.001}
      >
        <mesh
          castShadow
          geometry={nodes.Cube_41_4.geometry}
          material={materials.Green}
          position={[4.975, 38.224, 9.365]}
          receiveShadow
          rotation={[0.349, 0.346, -0.976]}
        />
        <mesh
          castShadow
          geometry={nodes.Cube_40_4.geometry}
          material={materials.Red}
          position={[0, -13.546, -16.172]}
          receiveShadow
        />
      </group>
      <group
        position={[-0.095, 1.253, 0.115]}
        rotation={[-1.523, 0.241, 2.302]}
        scale={0.001}
      >
        <mesh
          castShadow
          geometry={nodes.Cube_41_5.geometry}
          material={materials.Green}
          position={[4.975, 38.224, 9.365]}
          receiveShadow
          rotation={[0.349, 0.346, -0.976]}
        />
        <mesh
          castShadow
          geometry={nodes.Cube_40_5.geometry}
          material={materials.Red}
          position={[0, -13.546, -16.172]}
          receiveShadow
        />
      </group>
      <group
        position={[0.068, 1.252, 0.124]}
        rotation={[-1.897, 0.235, -3.096]}
        scale={0.001}
      >
        <mesh
          castShadow
          geometry={nodes.Cube_41_6.geometry}
          material={materials.Green}
          position={[4.975, 38.224, 9.365]}
          receiveShadow
          rotation={[0.349, 0.346, -0.976]}
        />
        <mesh
          castShadow
          geometry={nodes.Cube_40_6.geometry}
          material={materials.Red}
          position={[0, -13.546, -16.172]}
          receiveShadow
        />
      </group>
      <group
        position={[0.134, 1.253, -0.05]}
        rotation={[-1.716, -0.322, -1.589]}
        scale={0.001}
      >
        <mesh
          castShadow
          geometry={nodes.Cube_41_7.geometry}
          material={materials.Green}
          position={[4.975, 38.224, 9.365]}
          receiveShadow
          rotation={[0.349, 0.346, -0.976]}
        />
        <mesh
          castShadow
          geometry={nodes.Cube_40_7.geometry}
          material={materials.Red}
          position={[0, -13.546, -16.172]}
          receiveShadow
        />
      </group>
      <mesh
        castShadow
        geometry={nodes.Torus_2.geometry}
        material={materials.Cream}
        position={[0, 1.261, 0.004]}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <group
        position={[0.001, 1.257, -0.139]}
        rotation={[-1.417, -0.322, -0.214]}
        scale={0.001}
      >
        <mesh
          castShadow
          geometry={nodes.Cube_41_8.geometry}
          material={materials.Green}
          position={[4.975, 38.224, 9.365]}
          receiveShadow
          rotation={[0.349, 0.346, -0.976]}
        />
        <mesh
          castShadow
          geometry={nodes.Cube_40_8.geometry}
          material={materials.Red}
          position={[0, -13.546, -16.172]}
          receiveShadow
        />
      </group>
      <group
        position={[-0.134, 1.259, -0.042]}
        rotation={[-1.218, 0.26, 1.034]}
        scale={0.001}
      >
        <mesh
          castShadow
          geometry={nodes.Cube_41_9.geometry}
          material={materials.Green}
          position={[4.975, 38.224, 9.365]}
          receiveShadow
          rotation={[0.349, 0.346, -0.976]}
        />
        <mesh
          castShadow
          geometry={nodes.Cube_40_9.geometry}
          material={materials.Red}
          position={[0, -13.546, -16.172]}
          receiveShadow
        />
      </group>
      <mesh
        castShadow
        geometry={nodes.Sphere_3.geometry}
        material={materials.Red}
        position={[0.001, 1.279, 0.004]}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        castShadow
        geometry={nodes.Cylinder_36.geometry}
        material={materials.Cream}
        position={[0, 1.193, 0]}
        receiveShadow
        scale={[0.002, 0.001, 0.002]}
      />
      <mesh
        castShadow
        geometry={nodes.Cylinder_35.geometry}
        material={materials.Red}
        position={[0, 1.093, 0]}
        receiveShadow
        scale={[0.002, 0.001, 0.002]}
      />
    </group>
  )
}

useGLTF.preload('/Head/Cake.glb')

export default Cake
