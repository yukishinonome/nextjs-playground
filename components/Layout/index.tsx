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
      <header className={styles['title']}>
        <PageTitle pageName={pageName} />
      </header>
      <main>{children}</main>
      <footer className={styles['back-to-home-button']}>
        <BackToHomeButton />
      </footer>
    </>
  )
}

export default Layout
