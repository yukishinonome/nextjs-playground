import { RefObject, useEffect } from 'react'

/**
 * @param refs RefObject の配列
 * @param callback IntersectionObserver のインスタンス生成時に渡すコールバック関数
 * @param options IntersectionObserver のインスタンス生成時に渡すオプション
 * @return numberOfElements で指定した数の RefObject
 */
export const useIntersectionObserver = (
  refs: RefObject<HTMLElement>[],
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
): void => {
  useEffect(() => {
    const observerRefValueList: HTMLElement[] = []
    const observer = new IntersectionObserver(callback, options)

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
        observerRefValueList.push(ref.current)
      }
    })

    return () => {
      observerRefValueList.forEach((value) => {
        observer.unobserve(value)
      })
    }
  })
}
