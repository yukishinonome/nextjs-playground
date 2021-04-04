import { FC } from 'react'
import Pagination, { Props } from './Pagination'

const PaginationContainer: FC<Props> = ({ pageItems }): JSX.Element => (
  <>
    <Pagination pageItems={pageItems} />
  </>
)

export default PaginationContainer
