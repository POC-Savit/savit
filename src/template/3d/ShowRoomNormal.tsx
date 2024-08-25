import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import {
  EffectComposer,
  Outline,
  Select,
  Selection,
} from '@react-three/postprocessing'
import gsap from 'gsap'
import { useAtomValue, useSetAtom } from 'jotai'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { ObjectType } from 'type-util'

import BaseBody from '~/components/models/Body/BaseBody'
// import Bomb from '~/components/models/Event/Bomb'
// import UFO from '~/components/models/Event/UFO'
import Band from '~/components/models/Face/Band'
import Bubble from '~/components/models/Face/Bubble'
import Earphone from '~/components/models/Face/Earphone'
import Glasses from '~/components/models/Face/Glasses'
import Headphones from '~/components/models/Face/Headphones'
import Sunglasses from '~/components/models/Face/Sunglasses'
import BeachHat from '~/components/models/Head/BeachHat'
import Bulb from '~/components/models/Head/Bulb'
import Cake from '~/components/models/Head/Cake'
import Coin from '~/components/models/Head/Coin'
import Crown from '~/components/models/Head/Crown'
import Flowers from '~/components/models/Head/Flowers'
import Heart from '~/components/models/Head/Heart'
import Purse from '~/components/models/Head/Purse'
import Tulip from '~/components/models/Head/Tulip'
import { Character, UI, User } from '~/stores'

import * as css from './ShowRoom.css'

const HEAD_ITEM = {
  BeachHat: <BeachHat />,
  Bulb: <Bulb />,
  Cake: <Cake />,
  Coin: <Coin />,
  Crown: <Crown />,
  Flowers: <Flowers />,
  Heart: <Heart />,
  Purse: <Purse />,
  Tulip: <Tulip />,
} as ObjectType<ReactElement>

const FACE_ITEM = {
  Band: <Band />,
  Bubble: <Bubble />,
  Earphone: <Earphone />,
  Glasses: <Glasses />,
  Headphones: <Headphones />,
  Sunglasses: <Sunglasses />,
} as ObjectType<ReactElement>

// const EVENT_ITEM = {
//   Bomb: <Bomb />,
//   UFO: <UFO />,
// } as ObjectType<ReactElement>

// const EVENT_ITEM_ARR = Object.keys(EVENT_ITEM)
const FLOOR = ['1F', '2F', '3F', '4F', '5F'].reverse()

const ShowRoomNormal = () => {
  const ref = useRef<HTMLDivElement>(null)
  const currentLevel = useAtomValue(User.currentLevel)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    ref.current.style.setProperty(
      'transform',
      `translateY(calc(${currentLevel}*300px))`
    )
  }, [currentLevel])

  return (
    <div className={css.showRoom}>
      <div className={css.map} ref={ref}>
        {FLOOR.map((item) => (
          <img
            alt={item}
            height="300px"
            key={item}
            src={`/castle/${item}.png`}
          />
        ))}
      </div>
      <Canvas camera={{ fov: 60 }} shadows>
        <Inner />
      </Canvas>
    </div>
  )
}

const Inner = () => {
  const ref = useRef(null)
  const { gl, scene, camera } = useThree()
  const [position] = useState({ x: 0.5, y: 0.2, z: 1.7 })
  const isOutline = false
  const headItem = useAtomValue(Character.headItem)
  const faceItem = useAtomValue(Character.faceItem)

  useEffect(() => {
    gsap.timeline().to(camera.position, {
      duration: 0.5,
      repeat: 0,
      x: 0.5,
      y: 0.2,
      z: 1.7,
      ease: 'power3.inOut',
    })
  }, [])

  const setCurrentImage = useSetAtom(UI.currentImage)
  const shareStatus = useAtomValue(UI.shareStatus)
  useEffect(() => {
    gl.render(scene, camera)
    const screenshot = gl.domElement.toDataURL()
    setCurrentImage(screenshot)
  }, [headItem, faceItem, camera.position, position, gl, scene, shareStatus])

  // useEffect(() => {
  //   function cameraAnimate() {
  //     if (ref.current) {
  //       gsap.timeline().to(camera.position, {
  //         duration: 0.5,
  //         repeat: 0,
  //         x: position.x,
  //         y: position.y,
  //         z: position.z,
  //         ease: 'power3.inOut',
  //       })
  //     }
  //   }
  //   cameraAnimate()
  // }, [camera.position, position])

  // useEffect(() => {
  //   function handleOnclick() {
  //     setPosition({ x: 0, y: 0, z: isClick ? 2 : 3 })
  //   }
  //   if (isClick) {
  //     handleOnclick()
  //   }
  // }, [isClick])

  const getItems = useSetAtom(Character.getItems)
  useEffect(() => {
    getItems()
  }, [])

  return (
    <>
      <OrbitControls
        enablePan={true}
        enableZoom={false}
        maxAzimuthAngle={0}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2 - 0.3}
        ref={ref}
        target={[0, 0.6, 0]}
      />
      <ambientLight color={0xd1dcfc} intensity={0.5} />
      <directionalLight
        castShadow
        color={0xffffff}
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
            onClick={() => {
              // setIsClick((prev) => !prev)
              // setEventStep((prev) => (prev + 1) % 2)
            }}
            // onPointerOut={() => setIsClick(false)}
            receiveShadow
          >
            <BaseBody />
            {headItem && HEAD_ITEM[headItem]}
            {faceItem && FACE_ITEM[faceItem]}
            {/* {eventStep !== 2 && EVENT_ITEM[EVENT_ITEM_ARR[eventStep]]} */}
          </group>
        </Select>
      </Selection>
    </>
  )
}

export default ShowRoomNormal
