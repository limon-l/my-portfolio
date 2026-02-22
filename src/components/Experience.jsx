export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Tech Startup Inc.",
      role: "Frontend Developer Intern",
      date: "June 2023 - August 2023",
      description: [
        "Developed responsive web interfaces using React and modern CSS",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Improved website performance by 40% through code optimization",
      ],
    },
    {
      id: 2,
      company: "Digital Solutions Agency",
      role: "Full Stack Developer Intern",
      date: "January 2023 - May 2023",
      description: [
        "Built RESTful APIs using Node.js and Express",
        "Designed and implemented MongoDB databases for multiple projects",
        "Mentored 2 junior developers on best practices and code standards",
      ],
    },
    {
      id: 3,
      company: "University Computer Lab",
      role: "Teaching Assistant",
      date: "September 2022 - December 2022",
      description: [
        "Assisted 50+ students in learning web development fundamentals",
        "Created educational materials and coding tutorials",
        "Graded assignments and provided constructive feedback",
      ],
    },
    {
      id: 4,
      company: "Freelance Projects",
      role: "Freelance Web Developer",
      date: "Ongoing",
      description: [
        "Developed custom websites for small businesses and startups",
        "Managed full project lifecycle from design to deployment",
        "Maintained 100% client satisfaction rate with timely delivery",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <h3>{exp.company}</h3>
            <p className="role">{exp.role}</p>
            <p className="date">{exp.date}</p>
            <ul>
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
