import {
  DragDropContext,
  Droppable,
  OnDragEndResponder
} from 'react-beautiful-dnd'
import ItemList from '../ItemList'
import { ItemType } from './index'

const ListContent = ({
  onDragEnd,
  items
}: {
  onDragEnd: OnDragEndResponder
  items: ItemType[]
}): JSX.Element => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <ItemList items={items} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ListContent
