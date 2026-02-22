export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <h1>John Doe</h1>
      <p className="subtitle">
        Full Stack Developer | Problem Solver | Tech Enthusiast
      </p>
      <button
        className="cta-button"
        onClick={() => scrollToSection("projects")}>
        View My Work
      </button>
    </section>
  );
}
