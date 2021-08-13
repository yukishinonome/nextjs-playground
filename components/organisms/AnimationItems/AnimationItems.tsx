import { FC, useState } from 'react'
import styles from './AnimationItems.module.scss'

const AnimationItems: FC = () => {
  const [isAnimationA, setAnimationA] = useState(true)
  return (
    <>
      <section>
        <div
          className={
            isAnimationA
              ? styles['animation-a-red']
              : styles['animation-a-green']
          }
          data-testid="stretch"
        ></div>
        <button
          className={styles['button']}
          onClick={() => setAnimationA(!isAnimationA)}
        >
          Click
        </button>
      </section>
    </>
  )
}

export default AnimationItems
