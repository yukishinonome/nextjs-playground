import Link from 'next/link'
import { VFC } from 'react'
import styles from './Pagination2.module.scss'

type Props = {
  currentPage: number // 現在のページ
  totalPages: number // 総ページ数
  createHref: (page: number) => string // 各ページのリンクを生成する
}

// 常に表示する前後のページ数
const aroundPages = 2

const Pagination2: VFC<Props> = ({ currentPage, totalPages, createHref }) => {
  // 表示するページの範囲
  const fromPage = currentPage - aroundPages < 1 ? 1 : currentPage - aroundPages
  const toPage =
    currentPage + aroundPages > totalPages
      ? totalPages
      : currentPage + aroundPages

  const pageElements = []

  // 省略記号が追加済みか識別する
  let isAddedPreviousEllipsis = false
  let isAddedFollowingEllipsis = false

  for (let page = 1; page <= totalPages; page++) {
    if (page >= fromPage && page <= toPage) {
      // 現在のページとその前後のページ
      pageElements.push(
        <li key={page} className={styles.pagination_item}>
          <Link href={createHref(page)}>
            <a>{page}</a>
          </Link>
        </li>
      )
    } else if (page === 1 || page === totalPages) {
      // 最初と最後のページ
      pageElements.push(
        <li key={page} className={styles.pagination_item}>
          <Link href={createHref(page)}>
            <a>{page}</a>
          </Link>
        </li>
      )
    } else if (!isAddedPreviousEllipsis && page < fromPage) {
      // 最初のページからの省略記号
      pageElements.push(
        <li key="PreviousEllipsis" className={styles.pagination_item}>
          ...
        </li>
      )
      isAddedPreviousEllipsis = true
    } else if (!isAddedFollowingEllipsis && page > toPage) {
      // 最後のページまでの省略記号
      pageElements.push(
        <li key="FollowingEllipsis" className={styles.pagination_item}>
          ...
        </li>
      )
      isAddedFollowingEllipsis = true
    }
  }

  return (
    <ul className={styles.pagination}>
      {currentPage !== 1 && (
        <li key="PreviousButton" className={styles.pagination_item}>
          <Link href={createHref(currentPage - 1)}>
            <a>＜</a>
          </Link>
        </li>
      )}
      {pageElements}
      {currentPage !== totalPages && (
        <li key="FollowingButton" className={styles.pagination_item}>
          <Link href={createHref(currentPage + 1)}>
            <a>＞</a>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default Pagination2
