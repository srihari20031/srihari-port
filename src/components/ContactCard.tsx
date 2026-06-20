export function ContactCard() {
  return (
    <div className="contact-card reveal">
      <span className="tag">// let&apos;s talk</span>
      <h2>Looking for a full-stack or AI engineer who ships? Let&apos;s talk.</h2>
      <div className="contact-links">
        <a href="mailto:sriharivelayutham.28@gmail.com" className="btn btn-primary magnetic">
          sriharivelayutham.28@gmail.com
        </a>
        <a href="tel:+919566836902" className="btn btn-ghost magnetic">
          +91 95668 36902
        </a>
        <a href="https://linkedin.com/in/sriharinarayanv" target="_blank" rel="noopener noreferrer" className="btn btn-ghost magnetic">
          LinkedIn
        </a>
        <a href="https://github.com/srihari20031" target="_blank" rel="noopener noreferrer" className="btn btn-ghost magnetic">
          GitHub
        </a>
        <a href="/Srihari.pdf" download className="btn btn-ghost magnetic">
          Download Resume
        </a>
      </div>
    </div>
  );
}
