import { FC, useState, useEffect } from 'react'
import styles from './AnimationItems.module.scss'

const AnimationItems: FC = () => {
  const [isAnimationA, setAnimationA] = useState(false)
  const [isAnimationB, setAnimationB] = useState(false)
  const [isAnimationC, setAnimationC] = useState(false)

  useEffect(() => {
    const elementB = document.getElementById('animation-b')

    const handlerB = () => {
      setAnimationB(false)
    }

    elementB.addEventListener('animationend', handlerB)

    return () => {
      elementB.removeEventListener('animationend', handlerB)
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
      <section>
        <div
          id="animation-c"
          className={`${styles['animation-c']} ${
            isAnimationC ? styles['-visible'] : ''
          }`}
        >
          <span>T</span>
          <span>E</span>
          <span>X</span>
          <span>T</span>
          <span>&nbsp;</span>
          <span>A</span>
          <span>N</span>
          <span>I</span>
          <span>M</span>
          <span>A</span>
          <span>T</span>
          <span>I</span>
          <span>O</span>
          <span>N</span>
        </div>
        <button
          className={styles['button']}
          onClick={() => setAnimationC(!isAnimationC)}
        >
          Click
        </button>
      </section>
    </>
  )
}

export default AnimationItems
