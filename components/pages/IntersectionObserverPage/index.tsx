import Layout from '@/components/Layout'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { FC } from 'react'
import styles from './IntersectionObserver.module.scss'

const showElements = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(styles.active)
    }
  })
}

const IntersectionObserverPage: FC = () => {
  const refs = useIntersectionObserver<HTMLHeadingElement>(3, showElements)

  return (
    <Layout pageName="intersection-observer">
      <div className="">↓ scroll ↓</div>
      <h2 className={styles.heading} ref={refs.current[0]}>
        Hello 1
      </h2>
      <h2 className={styles.heading} ref={refs.current[1]}>
        Hello 2
      </h2>
      <h2 className={styles.heading} ref={refs.current[2]}>
        Hello 3
      </h2>
    </Layout>
  )
}

export default IntersectionObserverPage
