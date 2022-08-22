import { useInput } from '@/hooks/use-input'
import { FC } from 'react'

const SampleForm: FC = () => {
  const [form1Props, resetForm1Value] = useInput('')
  const [form2Props, resetForm2Value] = useInput('hoge')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    resetForm1Value()
    resetForm2Value()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="form 1" required {...form1Props} />
      <input type="text" placeholder="form 2" required {...form2Props} />
      <button>reset</button>
    </form>
  )
}

export default SampleForm
