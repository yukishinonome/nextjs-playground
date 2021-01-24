import styles from './PageTitle.module.scss'

const PageTitle = ({ pageName }: { pageName: string }): JSX.Element => {
  return <div className={styles.title}>{pageName}</div>
}

export default PageTitle
