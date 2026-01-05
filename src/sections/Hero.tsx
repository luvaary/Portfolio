import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xPos = (clientX / innerWidth - 0.5) * 20
      const yPos = (clientY / innerHeight - 0.5) * 20

      hero.style.setProperty('--mouse-x', `${xPos}px`)
      hero.style.setProperty('--mouse-y', `${yPos}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={heroRef} className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-name">luvaary</h1>
        <p className="hero-roles">developer · ui/ux · open source</p>
        <p className="hero-tagline">
          I build clean systems, expressive interfaces,
          <br />
          and projects worth contributing to.
        </p>
      </div>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          --mouse-x: 0px;
          --mouse-y: 0px;
        }

        .hero::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) translate(var(--mouse-x), var(--mouse-y));
          pointer-events: none;
          transition: transform 0.3s var(--transition-smooth);
        }

        .hero-content {
          text-align: center;
          z-index: 1;
          animation: fadeInUp 1s var(--transition-smooth);
        }

        .hero-name {
          margin-bottom: var(--spacing-sm);
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-roles {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: var(--text-tertiary);
          margin-bottom: var(--spacing-lg);
          letter-spacing: 0.1em;
          text-transform: lowercase;
        }

        .hero-tagline {
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.5;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
