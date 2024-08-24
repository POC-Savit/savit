import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Flowers = (props: any) => {
  const { nodes, materials } = useGLTF('/Head/Flowers.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.242, 1.113, 0.153]}
        rotation={[0.001, 0.557, -0.244]}
        scale={0.004}
      >
        <mesh
          castShadow
          geometry={nodes.Cube_39.geometry}
          material={materials.Green}
          position={[-4.898, -26.394, -39.702]}
          receiveShadow
          rotation={[-2.484, 0.946, -2.998]}
          scale={0.542}
        />
        <group
          position={[-0.018, 11.542, 3.236]}
          rotation={[0.307, 0.377, -0.21]}
          scale={0.542}
        >
          <mesh
            castShadow
            geometry={nodes.Ellipse_2_2.geometry}
            material={materials.Orange}
            position={[-4.194, 9.624, 5.045]}
            receiveShadow
            rotation={[-0.975, -0.226, -1.704]}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder_2_1.geometry}
            material={materials.Yellow}
            receiveShadow
            rotation={[2.705, -1.309, 2.094]}
          />
        </group>
      </group>
      <group
        position={[-0.062, 1.057, 0.236]}
        rotation={[0.064, 0.4, -0.026]}
        scale={0.004}
      >
        <mesh
          castShadow
          geometry={nodes.Cube_39_1.geometry}
          material={materials.Green}
          position={[25.884, -16.679, -25.582]}
          receiveShadow
          rotation={[0, 0.644, 0.871]}
          scale={0.542}
        />
        <group position={[4.751, 2.159, 5.967]} scale={0.485}>
          <mesh
            castShadow
            geometry={nodes.Ellipse_2_5.geometry}
            material={materials.Orange}
            position={[-4.194, 9.624, 5.045]}
            receiveShadow
            rotation={[-0.975, -0.226, -1.704]}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder_2_3.geometry}
            material={materials.Yellow}
            receiveShadow
            rotation={[2.705, -1.309, 2.094]}
          />
        </group>
      </group>
      <group
        position={[-0.096, 1.315, 0.038]}
        rotation={[0.001, 0.401, -0.002]}
        scale={0.004}
      >
        <mesh
          castShadow
          geometry={nodes.Cube_38.geometry}
          material={materials.Green}
          position={[20.95, -49.64, 7.723]}
          receiveShadow
          scale={0.542}
        />
        <group
          position={[-0.03, 19.549, 0]}
          rotation={[-0.373, 0.312, 1.025]}
          scale={0.542}
        >
          <mesh
            castShadow
            geometry={nodes.Ellipse_2_6.geometry}
            material={materials.Orange}
            position={[-4.194, 9.624, 5.045]}
            receiveShadow
            rotation={[-0.975, -0.226, -1.704]}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder_2_4.geometry}
            material={materials.Yellow}
            receiveShadow
            rotation={[2.705, -1.309, 2.094]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Head/Flowers.glb')

export default Flowers
