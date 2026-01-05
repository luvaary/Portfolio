import { useEffect, useRef, useState, ReactNode } from 'react'

interface MotionWrapperProps {
  children: ReactNode
  delay?: number
  threshold?: number
}

export default function MotionWrapper({ children, delay = 0, threshold = 0.1 }: MotionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`motion-wrapper ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
      <style>{`
        .motion-wrapper {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s var(--transition-smooth), transform 0.6s var(--transition-smooth);
        }

        .motion-wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
