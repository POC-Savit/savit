import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import {
  EffectComposer,
  Outline,
  Select,
  Selection,
} from '@react-three/postprocessing'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

import MiniSquareButton from '~/components/common/MiniSquareButton'
import { BaseBody } from '~/components/models/Body/BaseBody'
import { useFlow } from '~/stackflow'

import * as css from './ShowRoom.css'

const ShowRoomNormal = () => {
  const { push } = useFlow()

  const handleStairClick = () => {
    push('Level', {})
  }

  const handleShopClick = () => {
    // push('Shop', {})
  }

  return (
    <div className={css.showRoom}>
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }} shadows>
        <Inner />
      </Canvas>
      <MiniSquareButton
        iconType="Stair"
        onClick={handleStairClick}
        style={{
          position: 'absolute',
          bottom: '15px',
          left: '20px',
        }}
        title="3F"
      />

      <MiniSquareButton
        iconType="Share"
        onClick={handleShopClick}
        style={{
          position: 'absolute',
          bottom: '15px',
          right: '72px',
        }}
      />

      <MiniSquareButton
        iconType="Shop"
        onClick={handleShopClick}
        style={{
          position: 'absolute',
          bottom: '15px',
          right: '20px',
        }}
      />
    </div>
  )
}

const Inner = () => {
  const ref = useRef(null)
  const camera = useThree((state) => state.camera)
  const [isClick, setIsClick] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0, z: 3 })
  const isOutline = false

  useEffect(() => {
    function cameraAnimate() {
      if (ref.current) {
        gsap.timeline().to(camera.position, {
          duration: 0.5,
          repeat: 0,
          x: position.x,
          y: position.y,
          z: position.z,
          ease: 'power3.inOut',
        })
      }
    }
    cameraAnimate()
  }, [camera.position, position])

  useEffect(() => {
    function handleOnclick() {
      setPosition({ x: 0, y: 0, z: isClick ? 2 : 3 })
    }
    handleOnclick()
  }, [isClick])

  return (
    <>
      <OrbitControls
        autoRotate={!isClick}
        enablePan={true}
        enableZoom={false}
        maxAzimuthAngle={0}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2 - 0.3}
        ref={ref}
        target={[0, 0.6, 0]}
      />
      <axesHelper args={[10]} />
      <ambientLight color={0xd1dcfc} intensity={0.5} />
      <directionalLight
        castShadow
        color={0xd1dcfc}
        intensity={1.5}
        position={[2.5, 5, 5]}
        shadow-mapSize={[512, 512]}
      >
        <orthographicCamera
          args={[-5, 5, 5, -5, 1, 50]}
          attach="shadow-camera"
        />
      </directionalLight>
      <Selection>
        <EffectComposer autoClear={false} enabled={true}>
          <Outline blur edgeStrength={50} visibleEdgeColor={0xff0000} />
        </EffectComposer>
        <Select enabled={isOutline}>
          <group
            castShadow
            onClick={() => setIsClick((prev) => !prev)}
            onPointerOut={() => setIsClick(false)}
            position={[2.25, -0, -0.85]}
            receiveShadow
          >
            <BaseBody />
          </group>
        </Select>
      </Selection>
    </>
  )
}

export default ShowRoomNormal
