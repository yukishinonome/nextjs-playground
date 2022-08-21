import { DependencyList, useEffect } from 'react'
import { useTimeoutFn } from './use-timeout-fn'

export type UseDebounceReturn = [() => boolean | null, () => void]

export const useDebounce = (
  fn: Function,
  ms: number = 0,
  deps: DependencyList = []
): UseDebounceReturn => {
  const [isReady, cancel, reset] = useTimeoutFn(fn, ms)

  useEffect(reset, deps)

  return [isReady, cancel]
}
