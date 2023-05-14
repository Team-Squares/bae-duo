import { useEffect, useRef } from 'react'

// ? useInterval hook
export const useInterval = (callback: any, delay: number) => {
  const savedCallback: any = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
