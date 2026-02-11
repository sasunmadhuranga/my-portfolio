export default function Skills() {
  const skills = {
    "Programming Languages": [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "PHP",
      "SQL",
    ],

    "Frontend & Mobile": [
      "React.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    "Backend & APIs": [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "API Integration",
      "Rasa",
    ],
    Databases: ["MongoDB", "MySQL"],

    "Cloud & DevOps": [
      "AWS",
      "Microsoft Azure",
      "IBM Cloud",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Docker",
      "CI/CD",
      "Linux",
    ],
    
    "Security & Architecture": [
      "JWT",
      "Role-Based Access Control",
      "Microservices",
      "OOP",
      "MVC Architecture",
    ],
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-r from-gray-800 via-slate-800 to-indigo-950 py-16 px-8 md:px-20 lg:px-40"
    >
      <h1 className="text-4xl font-bold text-center text-gray-100 mt-5 mb-12">
        Skills
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-delay={index * 100}
            className="bg-white/15 rounded-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-6 transition-all duration-200 ease-in-out"
          >

            <h3 className="text-2xl font-semibold text-gray-100 mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, idx) => (
                <span
                  key={idx}
                  className="text-sm bg-white/20 text-white px-3 py-1 rounded-full border border-white/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
