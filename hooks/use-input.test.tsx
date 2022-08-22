import { act, fireEvent, render, renderHook, screen } from '@/test/testUtils'
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

  render(
    <>
      <input type="text" placeholder="form" required {...form1Props} />
      <button onClick={resetFormValue}>reset</button>
    </>
  )

  act(() => {
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'hello' }
    })
  })

  expect(result.current[0].value).toBe('hello')

  act(() => {
    fireEvent.click(screen.getByRole('button'))
  })

  expect(result.current[0].value).toBe('')
})
