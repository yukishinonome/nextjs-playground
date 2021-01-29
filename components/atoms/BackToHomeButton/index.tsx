import Link from 'next/link'
import styles from './BackToHomeButton.module.scss'

const BackToHomeButton = (): JSX.Element => {
  return (
    <Link href="/">
      <a className={styles.back_button}>Back to Home</a>
    </Link>
  )
}

export default BackToHomeButton
