export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:kabya@example.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+1234567890";
  };

  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p>
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out through any of the channels below!
        </p>
        <div className="contact-links">
          <button className="contact-link" onClick={handleEmailClick}>
            Send Email
          </button>
          <button className="contact-link" onClick={handlePhoneClick}>
            Call Me
          </button>
        </div>
        <div className="social-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub">
            🐙
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn">
            💼
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter">
            𝕏
          </a>
          <a href="mailto:john@example.com" title="Email">
            ✉️
          </a>
        </div>
      </div>
    </section>
  );
}
