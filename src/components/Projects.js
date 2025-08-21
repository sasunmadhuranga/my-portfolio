"use client";
import { FaGithub } from 'react-icons/fa';
import Slider from "react-slick";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Instagram Clone",
      images: [
        "/assets/insta/1.png",
        "/assets/insta/2.png",
        "/assets/insta/3.png",
        "/assets/insta/4.png",
        "/assets/insta/5.png",
        "/assets/insta/6.png",
      ],
      summary:
        "A full-stack, responsive social media platform built using the MERN stack and Tailwind CSS. It replicates core Instagram functionality, providing an interactive and scalable user experience across devices.",
      features: [
        "Authentication: Secure login, registration, and logout using JWT-based token authentication.",
        "Navigation: Intuitive routing between Home/Feed, Profile, and other core pages.",
        "Search & Discovery: Find users, view their profiles, and follow/unfollow them.",
        "Recommendations: Discover and follow recommended users via the right sidebar.",
        "Profile Management: Edit personal info, update profile picture, manage followers.",
        "Post Handling: Create posts with captions, locations, and interaction settings.",
        "Engagement: Like, comment, save, and manage posts and interactions.",
        "Saved & Shared Posts: View/manage saved and shared content from your profile.",
      ],
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "JWT",
        "REST APIs",
      ],
      link: "https://github.com/sasunmadhuranga/instagram-clone-app",
      video: "https://drive.google.com/file/d/1_ZLObQCkDT8SROI8D-M2bB6YLGngR_uG/view?usp=drive_link",
    },

    {
      title: "Legal Assistance Platform",
      images: [
      "/assets/legal/1.png",
      "/assets/legal/2.png",
      "/assets/legal/3.png",
      "/assets/legal/4.png",
      "/assets/legal/5.png",
      ],
      summary:
        "A web-based platform connecting clients with legal professionals for consultations, document preparation, and case management. Built with role-based access, the system creates a comprehensive ecosystem for legal services.",
      features: [
        "Role-Based Access Control for Admins (verify and manage professionals, generate reports), Clients (register, book services, track progress, communicate), and Legal Professionals (manage profiles and services, deliver services, engage with clients).",
        "AI Chatbot (Rasa): Provides intelligent, conversational support for legal guidance and instructions.",
        "Professional Directory: Search and filter legal experts by service type, law domain, document type, location, and more.",
        "Booking & Payment: Book consultations or case/document services with payment verification.",
        "Case & Document Management: Upload/share documents, track case progress, manage multi-phase cases.",
        "Admin Dashboard: Visual analytics and usage reports",
        "Client Feedback: Ratings and reviews of completed services.",
        "Notifications: Keeps clients and professionals updated.",
      ],
      tech: ["React", "HTML", "CSS", "JavaScript", "Python", "PHP", "Rasa"],
    },
    {
      title: "Book Finder App",
      summary:
        "A responsive web application that allows users to search for books in real time using the Google Books API, with features for detailed browsing and smooth user experience.",
      features: [
        "Real-time book search using the Google Books API.",
        "Paginated results for efficient browsing through large data sets.",
        "Book detail view including cover image, authors, description, and preview link.",
        "State-preserving navigation back to previous search results.",
        "Responsive layout and components using Chakra UI.",
      ],
      tech: ["React", "React Router", "Chakra UI", "Axios", "API"],
      link: "https://github.com/sasunmadhuranga/book-finder-app",
    },
    {
      title: "Inventory Management System",
      images: [
        "/assets/inventory/1.png",
        "/assets/inventory/3.png",
      ],
      summary:
        "A B2B web application that allows companies to manage inventory across multiple warehouses, display products to wholesale clients, and enable direct online purchasing eliminating the need for physical store visits. Developed as a collaborative group project involving three team members.",
      features: [
        "User Registration & Access Control: Different roles for admins and buyers.",
        "User Management: Add, edit, or remove user accounts and permissions.",
        "Product Management: Manage product listings, categories, and stock levels.",
        "Order Processing: Enable customers to place, track, and review wholesale orders.",
      ],
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },

    {
      title:
        "University Hostel Registration and Payment Management System",
      summary:
        "A web-based system designed to digitize and streamline the hostel registration and payment process in state universities. The platform allows students to register for rooms, manage personal profiles, and manage payments significantly reducing manual paperwork and administrative burden. The project was inspired by my personal experience at the University of Peradeniya and Masaryk University, where I identified a need for a digital hostel management system.",
      features: [
        "Hostel Room Registration: Students can browse available rooms and apply online.",
        "Profile Management: Allows students to manage personal and accommodation information.",
        "Payment Processing: Secure and trackable hostel fee transactions.",
        "Admin Tools: Manage student records, room allocations, and payment verification.",
      ],
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-800 via-slate-800 to-indigo-950 py-16 px-8 md:px-20 lg:px-40">
      <h1 className="text-4xl font-bold text-center text-gray-100 mt-5 mb-10">
        Projects
      </h1>
      <div className="flex flex-col space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/15 rounded-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-6 transition-all duration-200 ease-in-out"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-200 mb-2">
                {project.title}
              </h2>

              {project.images && project.images.length > 0 && (
                <Slider {...sliderSettings} className="mb-4 rounded-lg overflow-hidden">
                  {project.images.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      width={800}
                      height={400}
                      className="rounded-lg object-cover w-full height-[600px]"
                    />
                  ))}
                </Slider>
              )}


              {project.summary && (
                <p className="text-gray-200 mb-3 text-justify">
                  {project.summary}
                </p>
              )}

              {project.features && (
                <ul className="list-disc list-inside text-gray-200 mb-4 text-justify space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-white/20 text-white px-3 py-1 rounded-full border border-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

           {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-700 py-1 px-4 rounded-lg hover:bg-blue-800 transition"
            >
              <FaGithub className="text-xl text-gray-200" />
              <span className="text-gray-200">GitHub</span>
            </a>
          )}

          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-200 hover:underline pt-5"
            >
              ▶ Watch Demo
            </a>
          )}

          </div>
        ))}
      </div>
    </section>
  );
}
