import { useEffect, useRef, useState } from 'react'

const technologies = [
  { name: 'TypeScript', category: 'language' },
  { name: 'React', category: 'framework' },
  { name: 'Node.js', category: 'runtime' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Docker', category: 'tool' },
  { name: 'Git', category: 'tool' },
  { name: 'Linux', category: 'platform' },
  { name: 'Tailwind', category: 'styling' },
  { name: 'Rust', category: 'language' },
  { name: 'GraphQL', category: 'api' },
]

export default function Stack() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="stack" id="stack">
      <h2 className="stack-title">Tech Stack</h2>
      <div className={`stack-grid ${isVisible ? 'visible' : ''}`}>
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="stack-item"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <span className="stack-name">{tech.name}</span>
            <span className="stack-category">{tech.category}</span>
          </div>
        ))}
      </div>
      <style>{`
        .stack {
          padding-top: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
        }

        .stack-title {
          margin-bottom: var(--spacing-lg);
          color: var(--text-primary);
        }

        .stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: var(--spacing-md);
        }

        .stack-item {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: var(--spacing-md);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
          transition: all 0.3s var(--transition-smooth);
          opacity: 0;
          transform: translateY(20px);
        }

        .stack-grid.visible .stack-item {
          animation: fadeInUp 0.6s var(--transition-smooth) forwards;
        }

        .stack-item:hover {
          background: var(--bg-tertiary);
          border-color: var(--accent);
          transform: translateY(-4px);
        }

        .stack-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .stack-category {
          font-size: 0.875rem;
          color: var(--text-tertiary);
          text-transform: lowercase;
        }

        @media (max-width: 768px) {
          .stack-grid {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: var(--spacing-sm);
          }
        }
      `}</style>
    </section>
  )
}
