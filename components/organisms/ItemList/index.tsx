import Item from '../../atoms/ItemCard'
import { ItemType } from '../ListContent'

const ItemList = ({ items }: { items: ItemType[] }): JSX.Element => (
  <>
    {items.map((item) => (
      <Item item={item} key={item.id} />
    ))}
  </>
)

export default ItemList
