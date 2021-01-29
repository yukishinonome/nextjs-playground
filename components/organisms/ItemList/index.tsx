import ItemCard from '../../atoms/ItemCard'
import { ItemType } from '../ListContent'

const ItemList = ({ items }: { items: ItemType[] }): JSX.Element => (
  <>
    {items.map((item, index) => (
      <ItemCard item={item} index={index} key={item.id} />
    ))}
  </>
)

export default ItemList
