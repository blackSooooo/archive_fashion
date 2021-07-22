import React, {
  createContext, useContext, useRef, useEffect, useCallback,
} from 'react'
import useWindowSize from './window'

type scrollCallback = () => void

interface ScrollProviderProps {
    attachScrollCallback : (callback : scrollCallback) => void
    detachScrollCallback : (callback : scrollCallback) => void
    getScrollY : () => number
}

const ScrollContext = createContext<ScrollProviderProps>(null)

export const useScroll = () => useContext(ScrollContext)

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>()
  const size = useWindowSize()
  const data = {
    ease: 0.05,
    curr: 0,
    prev: 0,
    result: 0,
  }

  const callbacks: scrollCallback[] = []

  const attachScrollCallback = (callback: scrollCallback): void => {
    callbacks.push(callback)
  }
  const detachScrollCallback = (callback: scrollCallback): void => {
    callbacks.splice(callbacks.findIndex((child) => child !== callback), 1)
  }
  const notifyScrollCallback = () : void => {
    callbacks.forEach((callback) => {
      callback.call(null)
    })
  }
  const getScrollY = () : number => data.result
  const setBodyHeight = () : void => {
    document.body.style.height = `${
      containerRef.current.getBoundingClientRect().height
    }px`
  }
  const smoothScroll = useCallback(() => {
    requestAnimationFrame(smoothScroll)
    data.curr = window.scrollY
    data.prev += (data.curr - data.prev) * data.ease
    data.result = Math.round(data.prev * 100) / 100
    if (Math.abs(data.result - data.prev) < 1) {
      notifyScrollCallback()
    }
    containerRef.current.style.transform = `translateY(-${data.result}px)`
  }, [data])

  useEffect(() => {
    requestAnimationFrame(smoothScroll)
  }, [])

  useEffect(() => {
    setBodyHeight()
  }, [size.height])

  const value = {
    attachScrollCallback,
    detachScrollCallback,
    getScrollY,
  }
  return (
    <ScrollContext.Provider value={value}>
      <div ref={containerRef}>
        {children}
      </div>
    </ScrollContext.Provider>
  )
}
