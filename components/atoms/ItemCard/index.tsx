import { ItemType } from '../../organisms/ListContent'
import styles from './ItemCard.module.scss'

const Item = ({ item }: { item: ItemType }): JSX.Element => {
  return <div className={styles.container}>{item.content}</div>
}

export default Item
