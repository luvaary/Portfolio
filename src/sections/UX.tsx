import MotionWrapper from '../components/MotionWrapper'
import Card from '../components/Card'

const experiments = [
  {
    title: 'Micro-interactions',
    description: 'Exploring subtle animations that enhance user feedback without distraction',
  },
  {
    title: 'Dark Mode Patterns',
    description: 'Research on color palettes and contrast ratios that reduce eye strain',
  },
  {
    title: 'Motion Accessibility',
    description: 'Respecting prefers-reduced-motion while maintaining visual hierarchy',
  },
  {
    title: 'Type Scale Systems',
    description: 'Building fluid typography that scales naturally across devices',
  },
]

export default function UX() {
  return (
    <section className="ux" id="ux">
      <MotionWrapper>
        <h2 className="ux-title">UI/UX & Experiments</h2>
        <p className="ux-subtitle">
          Interface design as a form of communication. Learning through iteration.
        </p>
      </MotionWrapper>
      <div className="ux-grid">
        {experiments.map((exp, index) => (
          <MotionWrapper key={exp.title} delay={index * 0.1}>
            <Card>
              <h3 className="experiment-title">{exp.title}</h3>
              <p className="experiment-description">{exp.description}</p>
            </Card>
          </MotionWrapper>
        ))}
      </div>
      <style>{`
        .ux {
          padding-top: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
        }

        .ux-title {
          margin-bottom: var(--spacing-sm);
        }

        .ux-subtitle {
          margin-bottom: var(--spacing-lg);
          font-size: 1.125rem;
        }

        .ux-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-md);
        }

        .experiment-title {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-sm);
          color: var(--text-primary);
        }

        .experiment-description {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .ux-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
