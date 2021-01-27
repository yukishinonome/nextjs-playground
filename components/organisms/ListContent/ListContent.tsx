import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import ItemList from '../ItemList'
import { ItemType } from './index'
import { OnDragEndResponder } from 'react-beautiful-dnd'

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
