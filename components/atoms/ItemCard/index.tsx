import { ItemType } from '../../organisms/ListContent'
import styles from './ItemCard.module.scss'
import { Draggable } from 'react-beautiful-dnd'

const ItemCard = ({
  item,
  index
}: {
  item: ItemType
  index: number
}): JSX.Element => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          className={styles.container}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.content}
        </div>
      )}
    </Draggable>
  )
}

export default ItemCard
