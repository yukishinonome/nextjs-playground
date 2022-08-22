import { act, fireEvent, render, renderHook } from '@/test/testUtils'
import { useInput } from './use-input'

const setUp = (initialValue: string) => renderHook(() => useInput(initialValue))

test('期待する戻り値である', () => {
  const { result } = setUp('hoge')

  expect(result.current.length).toBe(2)
  expect(result.current[0].value).toBe('hoge')
  expect(typeof result.current[0].onChange).toBe('function')
  expect(typeof result.current[1]).toBe('function')
})

test('入力した値で更新されて、戻り値の関数で更新された値を初期化できる', () => {
  const { result } = setUp('')
  const [form1Props, resetFormValue] = result.current

  const { container } = render(
    <>
      <input type="text" placeholder="form" required {...form1Props} />
      <button onClick={resetFormValue}>reset</button>
    </>
  )

  const input = container.querySelector('input')
  const button = container.querySelector('button')

  act(() => {
    fireEvent.change(input!, { target: { value: 'hello' } })
  })

  expect(result.current[0].value).toBe('hello')

  act(() => {
    fireEvent.click(button!)
  })

  expect(result.current[0].value).toBe('')
})
