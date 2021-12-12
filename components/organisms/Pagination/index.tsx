import { VFC } from 'react'
import Pagination, { Props } from './Pagination'

const PaginationContainer: VFC<Props> = ({ pageItems }): JSX.Element => (
  <>
    <Pagination pageItems={pageItems} />
  </>
)

export default PaginationContainer
