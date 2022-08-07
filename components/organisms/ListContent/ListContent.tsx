import { FC } from 'react'
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder
} from 'react-beautiful-dnd'
import ItemList from '../ItemList'
import { ItemType } from './index'

type Props = {
  onDragEnd: OnDragEndResponder
  items: ItemType[]
}

const ListContent: FC<Props> = ({ onDragEnd, items }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <>
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <ItemList items={items} />
            </div>
            {provided.placeholder}
          </>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ListContent
