import Layout from '@/components/Layout'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { FC, useRef } from 'react'
import styles from './IntersectionObserver.module.scss'

const showElements = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(styles.active)
    }
  })
}

const IntersectionObserverPage: FC = () => {
  const ref1 = useRef<HTMLHeadingElement>(null)
  const ref2 = useRef<HTMLHeadingElement>(null)
  const ref3 = useRef<HTMLHeadingElement>(null)

  useIntersectionObserver<HTMLHeadingElement>([ref1, ref2, ref3], showElements)

  return (
    <Layout pageName="intersection-observer">
      <div className="">↓ scroll ↓</div>
      <h2 className={styles.heading} ref={ref1}>
        Hello 1
      </h2>
      <h2 className={styles.heading} ref={ref2}>
        Hello 2
      </h2>
      <h2 className={styles.heading} ref={ref3}>
        Hello 3
      </h2>
    </Layout>
  )
}

export default IntersectionObserverPage
