import { GetServerSideProps } from 'next'
import { resetServerContext } from 'react-beautiful-dnd'
import Layout from '../components/Layout'
import ListContent from '../components/organisms/ListContent'
import { ItemType } from '../components/organisms/ListContent'

export const getServerSideProps: GetServerSideProps = async () => {
  resetServerContext()

  const initial: ItemType[] = [...Array(10)].map((_, idx) => {
    return {
      id: `id-${idx}`,
      content: `Item ${idx}`
    }
  })

  return { props: { initial } }
}

const DnD = ({ initial }: { initial: ItemType[] }): JSX.Element => {
  return (
    <Layout pageName="react-beautiful-dnd">
      <ListContent initial={initial} />
    </Layout>
  )
}

export default DnD
