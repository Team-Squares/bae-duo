import { useEffect, RefObject } from 'react'

type Event = MouseEvent | TouchEvent

const useClickOutside = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void) => {
  useEffect(() => {
    const listener = (e: Event) => {
      const el = ref?.current

      if (!el || el.contains((e?.target as Node) || null)) {
        return
      }

      handler(e)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useClickOutside
