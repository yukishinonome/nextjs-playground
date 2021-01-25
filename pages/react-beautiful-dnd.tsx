import PageTitle from '../components/atoms/PageTitle'
import BackToHomeButton from '../components/atoms/BackToHomeButton'
import ListContent from '../components/organisms/ListContent'

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
