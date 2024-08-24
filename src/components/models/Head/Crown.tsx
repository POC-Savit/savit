import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Crown = (props: any) => {
  const { nodes, materials } = useGLTF('/Head/Crown.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.028, 0]} scale={0.001}>
        <mesh
          castShadow
          geometry={nodes.Torus_2.geometry}
          material={materials.Gold}
          position={[0, -68.08, 0]}
          receiveShadow
          rotation={[-Math.PI / 2, 0, -0.401]}
        />
        <mesh
          castShadow
          geometry={nodes.Torus.geometry}
          material={materials.Gold}
          position={[0, -30.36, 0]}
          receiveShadow
          rotation={[-Math.PI / 2, 0, -0.401]}
        />
        <mesh
          castShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.Gold}
          position={[0, -49.1, 0]}
          receiveShadow
        />
        <mesh
          castShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Gold}
          position={[0, -18.37, -1]}
          receiveShadow
        />
      </group>
      <group position={[0, 1.112, 0]} scale={0.001}>
        <group rotation={[0, -Math.PI / 4, 0]}>
          <mesh
            castShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials.Gold}
            position={[0, 0, 200.032]}
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group rotation={[0, -1.571, 0]}>
          <mesh
            castShadow
            geometry={nodes.Mesh_2.geometry}
            material={materials.Gold}
            position={[0, 0, 200.032]}
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group rotation={[Math.PI, -Math.PI / 4, Math.PI]}>
          <mesh
            castShadow
            geometry={nodes.Mesh_3.geometry}
            material={materials.Gold}
            position={[0, 0, 200.032]}
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            castShadow
            geometry={nodes.Mesh_4.geometry}
            material={materials.Gold}
            position={[0, 0, 200.032]}
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group rotation={[-Math.PI, Math.PI / 4, Math.PI]}>
          <mesh
            castShadow
            geometry={nodes.Mesh_5.geometry}
            material={materials.Gold}
            position={[0, 0, 200.032]}
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group rotation={[0, 1.571, 0]}>
          <mesh
            castShadow
            geometry={nodes.Mesh_6.geometry}
            material={materials.Gold}
            position={[0, 0, 200.032]}
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group rotation={[0, Math.PI / 4, 0]}>
          <mesh
            castShadow
            geometry={nodes.Mesh_7.geometry}
            material={materials.Gold}
            position={[0, 0, 200.032]}
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <mesh
          castShadow
          geometry={nodes.Mesh.geometry}
          material={materials.Gold}
          position={[0, 0, 200.032]}
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Head/Crown.glb')

export default Crown
