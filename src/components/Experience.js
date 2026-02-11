import Image from "next/image";
export default function Experience() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-800 via-slate-800 to-indigo-950 py-16 px-8 md:px-20 lg:px-40">
      <div className="max-w-5xl mx-auto text-gray-100 mt-15">
        
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

        <div className="bg-slate-900/40 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700">
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <h3 className="text-xl font-semibold text-white">
              AI/ML Intern
            </h3>
            <span className="text-gray-300">
              Sep 2025 – Feb 2026
            </span>
          </div>

          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Developed AI-powered chatbot and ML automation workflows.</li>
            <li>Deployed containerized microservices using Docker and Microsoft Azure.</li>
            <li>Integrated AI models into production-ready web applications.</li>
            <li>Implemented real-time location tracking with interactive mapping systems.</li>
          </ul>

        </div>
      </div>
    </section>
  );
}
