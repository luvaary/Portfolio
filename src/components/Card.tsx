import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`card ${hover ? 'card-hover' : ''} ${className}`}>
      {children}
      <style>{`
        .card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: var(--spacing-md);
          transition: all 0.4s var(--transition-smooth);
        }

        .card-hover:hover {
          background: var(--bg-tertiary);
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .card {
            padding: var(--spacing-sm);
          }
        }
      `}</style>
    </div>
  )
}
