import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-800 via-slate-800 to-indigo-950 py-16 px-8 md:px-20 lg:px-40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mt-25">

        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
          <Image
            src="/profile.png"
            alt="Sasun Madhuranga"
            width={160}
            height={160}
            className="rounded-full object-cover w-full h-full"
          />
        </div>

        <div className="text-gray-100 prose prose-invert prose-lg max-w-4xl text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>

          <p className="text-lg leading-relaxed">
            I’m <span className="font-semibold">Sasun Madhuranga</span>, a
            <span className="text-blue-300"> B.Sc. in IT graduate (GPA: 3.64, Second Class Upper Division)</span>,
            with hands-on experience building scalable software and cloud-native systems.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            I develop modern full-stack applications using{" "}
            <span className="font-semibold">
              React, Next.js, Node.js, Express, MongoDB, and TypeScript
            </span>
            , with experience designing secure REST APIs, authentication systems,
            and responsive user experiences.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            I also work with{" "}
            <span className="font-semibold">
              AWS, Docker, Kubernetes (EKS), Terraform, and CI/CD pipelines
            </span>{" "}
            to deploy applications, automate workflows, and improve scalability,
            reliability, and delivery speed.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            My goal is to contribute as a{" "}
            <span className="font-semibold">
              Software Engineer, Full-Stack Developer, Cloud Engineer, or DevOps Engineer
            </span>{" "}
            while continuing to grow across both development and infrastructure.
          </p>

          <a
            href="/sasun_madhuranga_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:brightness-110 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}