import { FC } from 'react'

type Props = {
  value: number
}

const ProgressBar: FC<Props> = ({ value }) => {
  return (
    <progress value={value} max={100}>
      {value}%
    </progress>
  )
}

export default ProgressBar
