import ItemCard from '@/components/atoms/ItemCard'
import { FC } from 'react'
import { ItemType } from '../ListContent'

type Props = { items: ItemType[] }

const ItemList: FC<Props> = ({ items }) => (
  <>
    {items.map((item, index) => (
      <ItemCard item={item} index={index} key={item.id} />
    ))}
  </>
)

export default ItemList
