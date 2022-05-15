import { createFocusTrap } from 'focus-trap'
import { RefObject, useEffect } from 'react'

type UseFocusTrapOptions = {
  ref: RefObject<HTMLElement>
  isOpen: boolean
  onClose: () => void
}

export const useFocusTrap = ({
  ref,
  isOpen,
  onClose
}: UseFocusTrapOptions): void => {
  useEffect(() => {
    if (!isOpen || ref.current === null) {
      return
    }

    const trap = createFocusTrap(ref.current, {
      clickOutsideDeactivates: true,
      escapeDeactivates: true,
      returnFocusOnDeactivate: true,
      onDeactivate: onClose
    })

    trap.activate()

    return () => {
      trap.deactivate()
    }
  }, [ref, isOpen, onClose])
}
