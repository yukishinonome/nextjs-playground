import { FC } from 'react'
import Layout from '../components/Layout'
import Pagination from '../components/organisms/Pagination'

const PaginationPage: FC = () => {
  const pageItems = [...Array(102)].map((_, idx) => {
    return 'Item' + (idx + 1)
  })

  return (
    <Layout pageName="react-paginate">
      <Pagination pageItems={pageItems} />
    </Layout>
  )
}

export default PaginationPage
