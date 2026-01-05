import { useState, useRef, useEffect } from 'react'

interface ExpandableProps {
  title: string
  preview: string
  children: React.ReactNode
}

export default function Expandable({ title, preview, children }: ExpandableProps) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [children])

  return (
    <div className="expandable">
      <button
        className="expandable-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="expandable-header">
          <h3 className="expandable-title">{title}</h3>
          <span className={`expandable-icon ${isOpen ? 'open' : ''}`}>→</span>
        </div>
        <p className="expandable-preview">{preview}</p>
      </button>
      <div
        className="expandable-content"
        style={{
          maxHeight: isOpen ? `${height}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="expandable-inner">
          {children}
        </div>
      </div>
      <style>{`
        .expandable {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s var(--transition-smooth);
        }

        .expandable:hover {
          border-color: var(--accent);
        }

        .expandable-trigger {
          width: 100%;
          text-align: left;
          padding: var(--spacing-md);
          cursor: pointer;
          background: none;
          border: none;
          color: inherit;
        }

        .expandable-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-xs);
        }

        .expandable-title {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin: 0;
        }

        .expandable-icon {
          font-size: 1.5rem;
          color: var(--accent);
          transition: transform 0.3s var(--transition-smooth);
          display: inline-block;
        }

        .expandable-icon.open {
          transform: rotate(90deg);
        }

        .expandable-preview {
          color: var(--text-secondary);
          margin: 0;
        }

        .expandable-content {
          overflow: hidden;
          transition: max-height 0.4s var(--transition-smooth), opacity 0.4s var(--transition-smooth);
        }

        .expandable-inner {
          padding: 0 var(--spacing-md) var(--spacing-md);
        }
      `}</style>
    </div>
  )
}
