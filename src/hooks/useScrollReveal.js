import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

export const useScrollReveal = (animProps = {}) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(el, {
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 800,
            ease: 'outExpo',
            ...animProps
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export const useStaggerReveal = (childSelector = '*', animProps = {}) => {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = container.querySelectorAll(childSelector)
          children.forEach(el => { el.style.opacity = '0' })
          animate(children, {
            opacity: [0, 1],
            translateY: [30, 0],
            delay: stagger(120),
            duration: 700,
            ease: 'outExpo',
            ...animProps
          })
          observer.unobserve(container)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return ref
}
