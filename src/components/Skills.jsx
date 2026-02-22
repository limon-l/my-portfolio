export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["React", "JavaScript", "HTML/CSS", "Vite", "Responsive Design"],
    },
    {
      category: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Database Design",
        "MongoDB",
      ],
    },
    {
      category: "Tools & Technologies",
      skills: ["Git & GitHub", "VS Code", "npm/yarn", "Webpack", "Linux"],
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Project Management",
        "Quick Learner",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
