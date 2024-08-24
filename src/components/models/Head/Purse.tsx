import type { GLTFType } from 'type-util'

import { useGLTF } from '@react-three/drei'

const Purse = (props: any) => {
  const { nodes, materials } = useGLTF('/Head/Purse.glb') as GLTFType
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes['¥'].geometry}
        material={materials.white}
        position={[-0.035, 1.185, 0.205]}
        receiveShadow
        rotation={[-0.169, 0.028, 0.002]}
        scale={0.008}
      />
      <mesh
        castShadow
        geometry={nodes.Torus_2.geometry}
        material={materials['Dark Brown']}
        position={[0.02, 1.493, 0.011]}
        receiveShadow
        rotation={[-Math.PI / 2, -0.01, 0]}
        scale={0.004}
      />
      <mesh
        castShadow
        geometry={nodes.Torus_3.geometry}
        material={materials['Dark Brown']}
        position={[0.015, 1.479, 0.005]}
        receiveShadow
        rotation={[-1.663, 0.079, 0.007]}
        scale={0.004}
      />
      <mesh
        castShadow
        geometry={nodes.Torus.geometry}
        material={materials['Dark Brown']}
        position={[0.012, 1.477, 0.011]}
        receiveShadow
        rotation={[-Math.PI / 2, -0.095, 0]}
        scale={0.004}
      />
      <mesh
        castShadow
        geometry={nodes.Cube.geometry}
        material={materials.Yellow}
        position={[0.019, 1.246, 0.011]}
        receiveShadow
        scale={0.004}
      />
    </group>
  )
}

useGLTF.preload('/Head/Purse.glb')

export default Purse
