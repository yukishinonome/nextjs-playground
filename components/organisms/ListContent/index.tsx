import { useState } from 'react'
import ListContent from './ListContent'
import { OnDragEndResponder } from 'react-beautiful-dnd'

export type ItemType = {
  id: string
  content: string
}

const reorder = (
  list: ItemType[],
  startIndex: number,
  endIndex: number
): ItemType[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const ListContentContainer = ({
  initial
}: {
  initial: ItemType[]
}): JSX.Element => {
  const [items, setItems] = useState(initial)

  const onDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    setItems(reorder(items, result.source.index, result.destination.index))
  }

  return <ListContent onDragEnd={onDragEnd} items={items}></ListContent>
}

export default ListContentContainer
