import { FC } from 'react'
import PageTitle from '../components/atoms/PageTitle'
import Pagination from '../components/organisms/Pagination'
import BackToHomeButton from '../components/atoms/BackToHomeButton'

const PaginationPage: FC = () => {
  const pageItems = [...Array(102)].map((_, idx) => {
    return 'Item' + (idx + 1)
  })

  return (
    <>
      <PageTitle pageName={'react-paginate'} />
      <Pagination pageItems={pageItems} />
      <BackToHomeButton />
    </>
  )
}

export default PaginationPage
