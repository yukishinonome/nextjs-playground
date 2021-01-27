import { GetStaticProps } from 'next'
import PageTitle from '../components/atoms/PageTitle'
import BackToHomeButton from '../components/atoms/BackToHomeButton'
import ListContent from '../components/organisms/ListContent'
import { ItemType } from '../components/organisms/ListContent'
import { resetServerContext } from 'react-beautiful-dnd'

export const getStaticProps: GetStaticProps = async () => {
  const initial: ItemType[] = [...Array(10)].map((_, idx) => {
    return {
      id: `id-${idx}`,
      content: `Item ${idx}`
    }
  })

  resetServerContext()

  return { props: { initial } }
}

const DnD = ({ initial }: { initial: ItemType[] }): JSX.Element => {
  return (
    <>
      <PageTitle pageName={'react-beautiful-dnd'} />
      <ListContent initial={initial} />
      <BackToHomeButton />
    </>
  )
}

export default DnD
