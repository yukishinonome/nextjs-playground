import { GetServerSideProps } from 'next'
import { resetServerContext } from 'react-beautiful-dnd'
import PageTitle from '../components/atoms/PageTitle'
import BackToHomeButton from '../components/atoms/BackToHomeButton'
import ListContent from '../components/organisms/ListContent'

export const getServerSideProps: GetServerSideProps = async () => {
  resetServerContext()

  return { props: {} }
}

const DnD = (): JSX.Element => {
  return (
    <>
      <PageTitle pageName={'react-beautiful-dnd'} />
      <ListContent />
      <BackToHomeButton />
    </>
  )
}

export default DnD
