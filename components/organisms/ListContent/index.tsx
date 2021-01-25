import ItemList from '../ItemList'

export type ItemType = {
  id: string
  content: string
}

const ListContent = (): JSX.Element => {
  const initial: ItemType[] = [...Array(10)].map((_, idx) => {
    return {
      id: `id-${idx}`,
      content: `Item ${idx}`
    }
  })
  return <ItemList items={initial} />
}

export default ListContent
