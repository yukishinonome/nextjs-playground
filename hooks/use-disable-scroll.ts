import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import { RefObject, useEffect } from 'react'

export const useDisableScroll = (
  ref: RefObject<HTMLElement>,
  isOpen: boolean
): void => {
  useEffect(() => {
    if (!isOpen || ref.current === null) {
      return
    }

    disableBodyScroll(ref.current)

    return clearAllBodyScrollLocks
  }, [ref, isOpen])
}
