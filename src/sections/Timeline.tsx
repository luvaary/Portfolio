import MotionWrapper from '../components/MotionWrapper'

interface TimelineEvent {
  period: string
  title: string
  description: string
}

const events: TimelineEvent[] = [
  {
    period: 'Late 2025',
    title: 'Started building and learning in public',
    description: 'First projects, Linux exploration, and web fundamentals. Discovered a passion for systems thinking and interface design.',
  },
  {
    period: 'Q4 2025',
    title: 'Deep dive into TypeScript and React',
    description: 'Built first component library. Learned about state management, accessibility, and performance optimization.',
  },
  {
    period: 'Q1 2026',
    title: 'Systems programming and databases',
    description: 'Started exploring Rust and database internals. Built NexusDB to understand storage engines and query execution.',
  },
  {
    period: 'Now',
    title: 'Contributing and collaborating',
    description: 'Actively contributing to open source. Building tools that matter. Always learning.',
  },
]

export default function Timeline() {
  return (
    <section className="timeline" id="timeline">
      <MotionWrapper>
        <h2 className="timeline-title">Growth Timeline</h2>
        <p className="timeline-subtitle">
          The journey so far. Early days, but building momentum.
        </p>
      </MotionWrapper>
      <div className="timeline-list">
        {events.map((event, index) => (
          <MotionWrapper key={event.period} delay={index * 0.15}>
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-period">{event.period}</span>
                <h3 className="timeline-event-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
      <style>{`
        .timeline {
          padding-top: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
        }

        .timeline-title {
          margin-bottom: var(--spacing-sm);
        }

        .timeline-subtitle {
          margin-bottom: var(--spacing-lg);
          font-size: 1.125rem;
        }

        .timeline-list {
          position: relative;
          padding-left: var(--spacing-md);
        }

        .timeline-list::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--accent) 0%, transparent 100%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: var(--spacing-lg);
          display: flex;
          gap: var(--spacing-md);
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: calc(var(--spacing-md) * -1 - 6px);
          top: 6px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--accent);
          border: 3px solid var(--bg-primary);
          z-index: 1;
        }

        .timeline-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .timeline-period {
          font-size: 0.875rem;
          color: var(--accent);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .timeline-event-title {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin: 0;
        }

        .timeline-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .timeline-list {
            padding-left: var(--spacing-sm);
          }

          .timeline-marker {
            left: calc(var(--spacing-sm) * -1 - 6px);
          }
        }
      `}</style>
    </section>
  )
}
