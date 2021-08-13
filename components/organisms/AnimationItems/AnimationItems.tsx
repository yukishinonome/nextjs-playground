import { FC, useState } from 'react'
import styles from './AnimationItems.module.scss'

const AnimationItems: FC = () => {
  const [isBoxAFlag, setBoxAFlag] = useState(true)
  return (
    <>
      <div
        className={isBoxAFlag ? styles['box-a-red'] : styles['box-a-green']}
        data-testid="stretch"
      ></div>
      <button
        className={styles['button']}
        onClick={() => setBoxAFlag(!isBoxAFlag)}
      >
        Click
      </button>
    </>
  )
}

export default AnimationItems
