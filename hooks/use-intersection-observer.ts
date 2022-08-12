import { createRef, useEffect, useRef } from 'react'

export const useIntersectionObserver = <T extends HTMLElement>(
  intersectionObserverCallback: (entries: IntersectionObserverEntry[]) => void,
  numberOfElements: number
) => {
  const els = useRef([...Array(numberOfElements)].map(() => createRef<T>()))

  useEffect(() => {
    const observerRefValueList: T[] = []
    const observer = new IntersectionObserver(intersectionObserverCallback)

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

  return els
}
