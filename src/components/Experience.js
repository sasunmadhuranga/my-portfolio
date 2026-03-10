import Image from "next/image";

export default function Experience() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-800 via-slate-800 to-indigo-950 py-16 px-8 md:px-20 lg:px-40">
      <div className="max-w-5xl mx-auto text-gray-100 mt-15">
        
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

        <div className="bg-slate-900/40 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700">
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white">
                AI/ML Intern
              </h3>
              <p className="text-indigo-400 font-medium">
                ARTecX Solutions
              </p>
            </div>

            <span className="text-gray-300">
              Sep 2025 – Feb 2026
            </span>
          </div>

          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Developed and deployed an AI-powered chatbot and machine learning models using Python and FastAPI, achieving 100% task automation.</li>
            <li>Built containerized microservices using Docker and deployed to the Microsoft Azure cloud environment.</li>
            <li>Built location tracking functionality to monitor objects and building positions on interactive maps.</li>
            <li>Collaborated with cross-functional teams to integrate AI models into production-ready applications.</li>
            <li>Worked with Python, FastAPI, Pandas, NumPy, Matplotlib, Node.js, Azure, Docker, etc.</li>
          </ul>

        </div>
      </div>
    </section>
  );
}