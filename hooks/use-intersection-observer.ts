import {
  createRef,
  MutableRefObject,
  RefObject,
  useEffect,
  useRef
} from 'react'

export const useIntersectionObserver = <T extends HTMLElement>(
  numberOfElements: number,
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
): MutableRefObject<RefObject<T>[]> => {
  const els = useRef([...Array(numberOfElements)].map(() => createRef<T>()))

  useEffect(() => {
    const observerRefValueList: T[] = []
    const observer = new IntersectionObserver(callback, options)

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
