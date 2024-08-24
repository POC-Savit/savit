import { AppScreen } from '@stackflow/plugin-basic-ui'
import { useAtom } from 'jotai'
import { useState } from 'react'

import BuyItemDrawer from '~/components/common/BuyItemDrawer'
import SquareButton from '~/components/common/SquareButton'
import Tab from '~/components/common/Tab'
import Tag from '~/components/common/Tag'
import { Character } from '~/stores'
import Shop from '~/template/layer/Shop'

import * as css from './ShopActivity.css'

interface ShopActivityProps {}

const TAB_TEXT = {
  BUY_ITEMS: '구매한 아이템',
  WHOLE_ITEMS: '모든 아이템',
}
const TAGS = ['전체', '머리', '얼굴']

const HEAD_ITEMS: Character.HeadType[] = [
  'BeachHat',
  'Bulb',
  'Cake',
  'Coin',
  'Crown',
  'Flowers',
  'Heart',
  'Purse',
  'Tulip',
]
const FACE_ITEMS: Character.FaceType[] = [
  'Band',
  'Bubble',
  'Earphone',
  'Glasses',
  'Headphones',
  'Sunglasses',
]

const ShopActivity = ({}: ShopActivityProps) => {
  const [headItem, setHeadItem] = useAtom(Character.headItem)
  const [faceItem, setFaceItem] = useAtom(Character.faceItem)

  const [selectedTag, setSelectedTag] = useState(TAGS[0])

  const [selectedTabItem, setSelectedTabItem] = useState(TAB_TEXT.WHOLE_ITEMS)
  const isOnlyBuyItems = selectedTabItem === TAB_TEXT.BUY_ITEMS

  return (
    <AppScreen appBar={{ title: '상점', backgroundColor: '#E3ECFF' }}>
      <div className={css.container}>
        <Shop />
        <Tab
          items={[TAB_TEXT.BUY_ITEMS, TAB_TEXT.WHOLE_ITEMS]}
          onSelect={setSelectedTabItem}
          selectedItem={selectedTabItem}
        />
        <div className={css.tags}>
          {TAGS.map((item) => (
            <Tag
              key={item}
              onClick={() => setSelectedTag(item)}
              selected={item === selectedTag}
              title={item}
            />
          ))}
        </div>
        <div className={css.buttons}>
          {selectedTag !== '얼굴' &&
            HEAD_ITEMS.map((item) =>
              !isOnlyBuyItems ? (
                <SquareButton
                  isSelected={item === headItem}
                  key={item}
                  onClick={() => setHeadItem(item === headItem ? null : item)}
                  title={item}
                />
              ) : (
                item === headItem && (
                  <SquareButton
                    isSelected={item === headItem}
                    key={item}
                    onClick={() => setHeadItem(item === headItem ? null : item)}
                    title={item}
                  />
                )
              )
            )}
          {selectedTag !== '머리' &&
            FACE_ITEMS.map((item) =>
              !isOnlyBuyItems ? (
                <SquareButton
                  isSelected={item === faceItem}
                  key={item}
                  onClick={() => setFaceItem(item === faceItem ? null : item)}
                  title={item}
                />
              ) : (
                item === faceItem && (
                  <SquareButton
                    isSelected={item === faceItem}
                    key={item}
                    onClick={() => setFaceItem(item === faceItem ? null : item)}
                    title={item}
                  />
                )
              )
            )}
        </div>
        <BuyItemDrawer />
      </div>
    </AppScreen>
  )
}

export default ShopActivity
