export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav>
        <div className="logo">Portfolio</div>
        <ul className="nav-links">
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}>
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}>
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}>
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
              }}>
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
