import { FC } from 'react'
import BackToHomeButton from '../atoms/BackToHomeButton'
import PageTitle from '../atoms/PageTitle'
import styles from './layout.module.scss'

type Props = {
  pageName: string
  children: React.ReactNode
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
