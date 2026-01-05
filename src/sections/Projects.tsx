import { useState } from 'react'
import Expandable from '../components/Expandable'
import MotionWrapper from '../components/MotionWrapper'

interface Project {
  name: string
  description: string
  tech: string[]
  status: 'active' | 'learning' | 'experimental'
  contribution: string
  details: string
}

const projects: Project[] = [
  {
    name: 'NexusDB',
    description: 'Lightweight document store with GraphQL interface',
    tech: ['TypeScript', 'Node.js', 'GraphQL'],
    status: 'active',
    contribution: 'Looking for help with query optimization and testing',
    details: 'A minimal document database built to understand storage engines and query planning. Currently supports basic CRUD operations with a GraphQL layer. Working on indexing strategies and transaction support.',
  },
  {
    name: 'Prism UI',
    description: 'Accessible component library with thoughtful defaults',
    tech: ['React', 'TypeScript', 'Tailwind'],
    status: 'active',
    contribution: 'Contributors welcome for components and accessibility audits',
    details: 'Building a component library that prioritizes accessibility and developer experience. All components follow ARIA guidelines and support keyboard navigation. Currently includes form elements, modals, and data display components.',
  },
  {
    name: 'Flux',
    description: 'Real-time collaborative text editor experiment',
    tech: ['React', 'WebSockets', 'CRDT'],
    status: 'experimental',
    contribution: 'Open to collaboration on conflict resolution algorithms',
    details: 'Exploring operational transformation and CRDTs for real-time collaboration. Current implementation uses a simple CRDT approach with vector clocks. Learning about distributed systems and consensus.',
  },
  {
    name: 'Cortex',
    description: 'CLI tool for managing development environments',
    tech: ['Rust', 'Docker'],
    status: 'learning',
    contribution: 'Feedback welcome on UX and feature ideas',
    details: 'A command-line tool to spin up consistent dev environments. Wraps Docker with opinionated defaults and project templates. Learning Rust while building something useful.',
  },
]

const statusColors = {
  active: '#10b981',
  learning: '#f59e0b',
  experimental: '#8b5cf6',
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <MotionWrapper>
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Building in public. Everything is open source and contribution-ready.
        </p>
      </MotionWrapper>
      <div className="projects-list">
        {projects.map((project, index) => (
          <MotionWrapper key={project.name} delay={index * 0.1}>
            <Expandable
              title={project.name}
              preview={project.description}
            >
              <div className="project-details">
                <div className="project-meta">
                  <div className="project-status">
                    <span
                      className="status-dot"
                      style={{ backgroundColor: statusColors[project.status] }}
                    />
                    <span className="status-text">{project.status}</span>
                  </div>
                  <div className="project-tech">
                    {project.tech.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <p className="project-description">{project.details}</p>
                <div className="project-contribution">
                  <strong>Contribution:</strong> {project.contribution}
                </div>
              </div>
            </Expandable>
          </MotionWrapper>
        ))}
      </div>
      <style>{`
        .projects {
          padding-top: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
        }

        .projects-title {
          margin-bottom: var(--spacing-sm);
        }

        .projects-subtitle {
          margin-bottom: var(--spacing-lg);
          font-size: 1.125rem;
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .project-details {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .project-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
        }

        .project-status {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .status-text {
          color: var(--text-secondary);
          text-transform: lowercase;
          font-size: 0.875rem;
        }

        .project-tech {
          display: flex;
          gap: var(--spacing-xs);
          flex-wrap: wrap;
        }

        .tech-tag {
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          font-size: 0.875rem;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .project-contribution {
          padding: var(--spacing-sm);
          background: var(--bg-tertiary);
          border-left: 2px solid var(--accent);
          border-radius: 4px;
          color: var(--text-secondary);
          font-size: 0.9375rem;
        }

        .project-contribution strong {
          color: var(--text-primary);
        }
      `}</style>
    </section>
  )
}
