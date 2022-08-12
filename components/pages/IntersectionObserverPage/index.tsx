import Layout from '@/components/Layout'
import { createRef, FC, useEffect, useRef } from 'react'
import styles from './IntersectionObserver.module.scss'

const IntersectionObserverPage: FC = () => {
  const els = useRef([...Array(3)].map(() => createRef<HTMLHeadingElement>()))

  useEffect(() => {
    const observerRefValueList: HTMLHeadingElement[] = []

    const observer = new IntersectionObserver(showElements)

    els.current.forEach((el) => {
      if (el.current) {
        observer.observe(el.current)
        observerRefValueList.push(el.current)
      }
    })

    return () => {
      observerRefValueList.forEach((value) => {
        observer.unobserve(value)
      })
    }
  })

  const showElements = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(styles.active)
      }
    })
  }

  return (
    <Layout pageName="intersection-observer">
      <div className="">↓ scroll ↓</div>
      <h2 className={styles.heading} ref={els.current[0]}>
        Hello 1
      </h2>
      <h2 className={styles.heading} ref={els.current[1]}>
        Hello 2
      </h2>
      <h2 className={styles.heading} ref={els.current[2]}>
        Hello 3
      </h2>
    </Layout>
  )
}

export default IntersectionObserverPage
