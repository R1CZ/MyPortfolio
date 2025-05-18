import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Import images directly
import drexImg from "../assets/drex.jpg";
import bossingImg from "../assets/Bossing.jpg";

const collaborations = [
  {
    id: 1,
    profile: "Drexel Mingo",
    role: "Frontend Developer",
    company: "Creative Lab",
    github: "https://github.com/imoncrack27",
    image: drexImg, // ✅ use imported image
  },
  {
    id: 2,
    profile: "Junrey Lañas",
    role: "Web Developer",
    company: "Accenture Company",
    github: "https://github.com/Drakkarrr",
    image: bossingImg,
  },
  // Optional future entry:
  // {
  //   id: 3,
  //   profile: "Clee Arr Canillas",
  //   role: "FullStack Developer",
  //   company: "CreativeLabs",
  //   github: "https://github.com/alexjohnson",
  //   image: "/assets/profile3.jpg",
  // },
];

const Collaboration = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-neutral-950 py-24 overflow-hidden" id="collaboration">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-500 mb-4">
            Collaborators
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Talented professionals I've had the pleasure to work with
          </p>
        </div>

        {/* Collaborations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collaborations.map((collab, index) => (
            <div
              key={collab.id}
              className="group relative rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Glass effect */}
              <div className="relative h-full bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-500 group-hover:border-green-400/30 group-hover:shadow-lg group-hover:shadow-green-400/20">
                <div className="p-8 flex flex-col items-center text-center h-full">
                  {/* Profile image */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-500 -z-10"></div>
                    <img
                      src={collab.image}
                      alt={collab.profile}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white-500 group-hover:border-green-400/50 transition-all duration-500"
                    />
                  </div>

                  {/* Profile info */}
                  <h3 className="text-2xl font-bold text-white mb-2">{collab.profile}</h3>
                  <p className="text-green-400 font-medium mb-1">{collab.role}</p>
                  <p className="text-blue-400 mb-6">{collab.company}</p>

                  {/* GitHub link */}
                  <a
                    href={collab.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto px-6 py-2 bg-gradient-to-r from-green-400/10 to-blue-400/10 text-green-400 rounded-full border border-green-400/30 hover:bg-gradient-to-r hover:from-green-400/20 hover:to-blue-400/20 hover:text-white hover:border-green-400/50 transition-all duration-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.7,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Collaboration;
