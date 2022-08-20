import { act, renderHook } from '@/test/testUtils'
import { useBool } from './use-bool'

const setUp = (initialValue: boolean) => renderHook(() => useBool(initialValue))

it('引数が false の時に期待する戻り値が得られる', () => {
  const { result } = setUp(false)

  expect(result.current[0]).toBe(false)
  expect(typeof result.current[1]).toBe('function')
  expect(typeof result.current[2]).toBe('function')
})

it('引数が true の時に期待する戻り値が得られる', () => {
  const { result } = setUp(true)

  expect(result.current[0]).toBe(true)
  expect(result.current[1]).toBeInstanceOf(Function)
  expect(result.current[2]).toBeInstanceOf(Function)
})

it('state を true にできる', () => {
  const { result } = setUp(false)
  const [, open] = result.current

  expect(result.current[0]).toBe(false)

  act(() => {
    open()
  })

  expect(result.current[0]).toBe(true)
})

it('state を false にできる', () => {
  const { result } = setUp(true)
  const [, , close] = result.current

  expect(result.current[0]).toBe(true)

  act(() => {
    close()
  })

  expect(result.current[0]).toBe(false)
})
