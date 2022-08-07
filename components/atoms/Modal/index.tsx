import { useDisableScroll } from '@/hooks/use-disable-scroll'
import { useFocusTrap } from '@/hooks/use-focus-trap'
import { FC, memo, ReactNode, useRef } from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'

type Props = {
  children: ReactNode
  isOpen: boolean
  ariaLabelledby: string
  ariaDescribedby: string
  onClose: () => void
}

const Modal: FC<Props> = (props) => {
  const ref = useRef<HTMLDivElement>(null)
  useFocusTrap({ ref, isOpen: props.isOpen, onClose: props.onClose })
  useDisableScroll(ref, props.isOpen)

  if (!props.isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={props.ariaLabelledby}
      aria-describedby={props.ariaDescribedby}
      ref={ref}
      className={styles.opened}
    >
      {props.children}
    </div>,
    document.body
  )
}

export default memo(Modal)
