export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-main">
          <h2 className="footer-title">Let's Build Together</h2>
          <p className="footer-text">
            Open to collaboration on meaningful projects.
            <br />
            Always happy to discuss code, design, or contribute to something interesting.
          </p>
        </div>
        <div className="footer-links">
          
            href="https://github.com/luvaary"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} luvaary. Built with care.
        </p>
      </div>
      <style>{`
        .footer {
          padding: var(--spacing-xl) var(--spacing-md);
          max-width: var(--max-width);
          margin: 0 auto;
          border-top: 1px solid var(--border);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-lg);
        }

        .footer-main {
          flex: 1;
          max-width: 500px;
        }

        .footer-title {
          font-size: 2rem;
          margin-bottom: var(--spacing-sm);
          color: var(--text-primary);
        }

        .footer-text {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 1.0625rem;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          align-items: flex-end;
        }

        .footer-link {
          font-size: 1.125rem;
          color: var(--text-secondary);
          transition: color 0.3s var(--transition-smooth);
          position: relative;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s var(--transition-smooth);
        }

        .footer-link:hover {
          color: var(--accent);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-bottom {
          padding-top: var(--spacing-md);
          border-top: 1px solid var(--border);
        }

        .footer-copyright {
          text-align: center;
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: var(--spacing-md);
          }

          .footer-links {
            align-items: flex-start;
            width: 100%;
          }

          .footer-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </footer>
  )
}
