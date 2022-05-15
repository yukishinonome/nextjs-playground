import { useDisableScroll } from '@/hooks/use-disable-scroll'
import { useFocusTrap } from '@/hooks/use-focus-trap'
import { memo, ReactNode, useRef, VFC } from 'react'
import styles from './Modal.module.scss'

type Props = {
  children: ReactNode
  isOpen: boolean
  ariaLabelledby: string
  ariaDescribedby: string
  onClose: () => void
}

const Modal: VFC<Props> = (props) => {
  const ref = useRef<HTMLDivElement>(null)
  useFocusTrap({ ref, isOpen: props.isOpen, onClose: props.onClose })
  useDisableScroll(ref, props.isOpen)

  if (!props.isOpen) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={props.ariaLabelledby}
      aria-describedby={props.ariaDescribedby}
      ref={ref}
      className={styles.opened}
    >
      {props.children}
    </div>
  )
}

export default memo(Modal)
