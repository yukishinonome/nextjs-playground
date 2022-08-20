import { renderHook } from '@/test/testUtils'
import { usePrevious } from './use-previous'

const setUp = () =>
  renderHook(({ state }) => usePrevious(state), { initialProps: { state: 0 } })

it('初期値は undefined', () => {
  const { result } = setUp()

  expect(result.current).toBeUndefined()
})

it('変更前の値を得ることができる', () => {
  const { result, rerender } = setUp()

  rerender({ state: 2 })
  expect(result.current).toBe(0)

  rerender({ state: 4 })
  expect(result.current).toBe(2)

  rerender({ state: 6 })
  expect(result.current).toBe(4)
})
