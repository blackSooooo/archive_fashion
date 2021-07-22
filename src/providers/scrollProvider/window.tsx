import { useState, useEffect } from 'react'

const useWindowSize = () => {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const [windowSize, setWindowSize] = useState(getSize())

  useEffect(() => {
    const resizeEventListener = () => {
      setWindowSize(getSize())
    }
    window.addEventListener('resize', resizeEventListener)
    return () => window.removeEventListener('resize', resizeEventListener)
  }, [])
  return windowSize
}

export default useWindowSize
