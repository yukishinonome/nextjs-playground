import { VFC } from 'react'
import Layout from '../components/Layout'
import DndImageList from '../components/organisms/DndImageList'

const Animation: VFC = () => {
  return (
    <Layout pageName="dnd-image">
      <DndImageList />
    </Layout>
  )
}

export default Animation
