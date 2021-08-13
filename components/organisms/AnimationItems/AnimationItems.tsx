import { FC, useState, useEffect } from 'react'
import styles from './AnimationItems.module.scss'

const AnimationItems: FC = () => {
  const [isAnimationA, setAnimationA] = useState(false)
  const [isAnimationB, setAnimationB] = useState(false)

  useEffect(() => {
    const element = document.getElementById('animation-b')
    const handler = () => {
      setAnimationB(false)
    }

    element.addEventListener('animationend', handler)

    return () => {
      element.removeEventListener('animationend', handler)
    }
  }, [])

  return (
    <>
      <section>
        <div
          className={
            isAnimationA
              ? styles['animation-a-green']
              : styles['animation-a-red']
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
      <section>
        <div
          id="animation-b"
          className={`${styles['animation-b']} ${
            isAnimationB ? styles['animation-b-running'] : ''
          }`}
        ></div>
        <button
          className={styles['button']}
          onClick={() => setAnimationB(true)}
        >
          Click
        </button>
      </section>
    </>
  )
}

export default AnimationItems
