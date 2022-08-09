import { FC, ReactNode } from 'react'

type Props = {
  title: string
  isOpen?: boolean
  children: ReactNode
}

const Accordion: FC<Props> = (props) => {
  return (
    <details open={props.isOpen}>
      <summary>{props.title}</summary>
      {props.children}
    </details>
  )
}

export default Accordion
