import { FC } from 'react'
import styles from './layout.module.scss'
import PageTitle from '../atoms/PageTitle'
import BackToHomeButton from '../atoms/BackToHomeButton'

type Props = {
  pageName: string
}

const Layout: FC<Props> = ({ children, pageName }) => {
  return (
    <>
      <PageTitle pageName={pageName} />
      <div className={styles.container}>{children}</div>
      <BackToHomeButton />
    </>
  )
}

export default Layout
