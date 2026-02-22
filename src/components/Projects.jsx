export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with payment integration and user authentication.",
      icon: "🛒",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates and team features.",
      icon: "✓",
      tags: ["React", "Firebase", "Tailwind CSS"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application showing current conditions and 7-day forecast.",
      icon: "🌤️",
      tags: ["React", "API Integration", "Chart.js"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      id: 4,
      title: "Social Learning Platform",
      description:
        "A platform where users can share knowledge and learn from each other.",
      icon: "📚",
      tags: ["React", "Express.js", "PostgreSQL", "Socket.io"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "This responsive portfolio showcasing my projects and skills with modern design.",
      icon: "💼",
      tags: ["React", "Vite", "CSS3"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "A mobile-friendly app to track workouts and monitor fitness progress.",
      icon: "💪",
      tags: ["React", "REST API", "Chart Library"],
      links: {
        github: "#",
        demo: "#",
      },
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">{project.icon}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.links.github}>GitHub</a>
                <a href={project.links.demo}>Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
