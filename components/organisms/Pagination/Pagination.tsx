import { FC, useState } from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

export type Props = {
  pageItems: string[]
}

const Pagination: FC<Props> = ({ pageItems }) => {
  const [offset, setOffset] = useState(0)
  const perPage = 4

  const handlePageChange = (data: { selected: number }) => {
    const page_number = data['selected']
    setOffset(page_number * perPage)

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  return (
    <>
      <div>
        {pageItems.slice(offset, offset + perPage).map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
            </div>
          )
        })}
      </div>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'・・・'}
        pageCount={Math.ceil(pageItems.length / perPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        disabledClassName={styles.pagination__disabled}
        breakLinkClassName={styles.breakLink}
      />
    </>
  )
}

export default Pagination
