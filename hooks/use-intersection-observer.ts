import {
  createRef,
  MutableRefObject,
  RefObject,
  useEffect,
  useRef
} from 'react'

/**
 * @template T RefObject の型を明示する必要がある
 * @param numberOfElements 要素の数
 * @param callback IntersectionObserver のインスタンス生成時に渡すコールバック関数
 * @param options IntersectionObserver のインスタンス生成時に渡すオプション
 * @return numberOfElements で指定した数の RefObject
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
