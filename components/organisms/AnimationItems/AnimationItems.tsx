import { FC } from 'react'
import styles from './AnimationItems.module.scss'

const AnimationItems: FC = () => {
  return (
    <>
      <div className={styles['box-a']} data-testid="stretch"></div>
    </>
  )
}

export default AnimationItems
