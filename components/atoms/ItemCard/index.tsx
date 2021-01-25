import { ItemType } from '../../organisms/ListContent'

const Item = ({ item }: { item: ItemType }): JSX.Element => {
  return <div>{item.content}</div>
}

export default Item
