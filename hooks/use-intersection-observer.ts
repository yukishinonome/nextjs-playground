import {
  createRef,
  MutableRefObject,
  RefObject,
  useEffect,
  useRef
} from 'react'

/**
 * @param numberOfElements 要素の数
 * @param callback IntersectionObserverのインスタンス生成時に渡すコールバック関数
 * @param options IntersectionObserverのインスタンス生成時に渡すオプション
 * @returns numberOfElementsで指定した数のRefObject
 */
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
