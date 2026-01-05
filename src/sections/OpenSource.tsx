import MotionWrapper from '../components/MotionWrapper'
import Card from '../components/Card'

export default function OpenSource() {
  return (
    <section className="opensource" id="opensource">
      <MotionWrapper>
        <h2 className="opensource-title">Open Source & Collaboration</h2>
      </MotionWrapper>
      <div className="opensource-content">
        <MotionWrapper delay={0.1}>
          <Card hover={false} className="opensource-card">
            <h3 className="card-heading">Built for Contributors</h3>
            <p className="card-text">
              Every project is designed with contributors in mind. Clear documentation,
              good-first-issues, and transparent roadmaps. Code should invite collaboration,
              not gatekeep it.
            </p>
          </Card>
        </MotionWrapper>
        <MotionWrapper delay={0.2}>
          <Card hover={false} className="opensource-card">
            <h3 className="card-heading">Learning in Public</h3>
            <p className="card-text">
              Sharing progress, mistakes, and learnings. Building things worth using
              while documenting the journey. Open source is as much about the process
              as the product.
            </p>
          </Card>
        </MotionWrapper>
        <MotionWrapper delay={0.3}>
          <Card hover={false} className="opensource-card">
            <h3 className="card-heading">Looking to Contribute</h3>
            <p className="card-text">
              Actively seeking projects that value clean architecture and thoughtful UX.
              Interested in systems programming, developer tooling, and anything that
              makes engineers' lives easier.
            </p>
          </Card>
        </MotionWrapper>
      </div>
      <style>{`
        .opensource {
          padding-top: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
          background: linear-gradient(180deg, transparent 0%, var(--bg-secondary) 50%, transparent 100%);
        }

        .opensource-title {
          text-align: center;
          margin-bottom: var(--spacing-lg);
        }

        .opensource-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-md);
        }

        .opensource-card {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .card-heading {
          font-size: 1.375rem;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }

        .card-text {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .opensource-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
