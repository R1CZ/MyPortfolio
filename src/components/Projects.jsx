import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import h1 from "../assets/h1.png";
import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";
import Fashion from "../assets/Fashion.jpg";
import h6 from "../assets/h6.png";
import Nike from "../assets/Nike.png";
import h14 from "../assets/h14.png";
import h35 from "../assets/h35.png";
import h28 from "../assets/h28.png";
import UIUX from "../assets/UIUX.png";

const projects = [
  {
    id: 1,
    name: "Modern Design Page",
    software: "Figma",
    images: [h1, h2, h3, h6, Fashion, h14, h35, h28],
    category: "UI Design"
  },
  {
    id: 2,
    name: "Graphics Design",
    software: "Photoshop",
    images: [Nike],
    category: "Digital Art"
  },
  {
    id: 3,
    name: "Wireframe",
    software: "Figma",
    images: [],
    category: "UX Design"
  },
  {
    id: 4,
    name: "Mobile App UI",
    software: "Figma",
    images: [],
    category: "Mobile Design"
  },
  {
    id: 5,
    name: "Up Skills",
    software: "Courses",
    images: [UIUX],
    category: "Certificates"
  },

];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen || fullScreenImage ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isModalOpen, fullScreenImage]);

  const openModal = (project) => {
    if (project.images.length === 0) return;
    
    setSelectedProject(project);
    setIsModalOpen(true);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const categories = ["All", ...new Set(projects.map(project => project.category))];
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="relative bg-neutral-950 py-24 overflow-hidden" id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-500 mb-4">
           Projects & Certificates
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of my design and development work
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openModal(project)}
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glass morphism effect */}
              <div className={`relative h-full bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 ${
                project.images.length > 0 
                  ? "group-hover:border-green-400/30 group-hover:shadow-lg group-hover:shadow-green-400/20 cursor-pointer" 
                  : "opacity-70"
              }`}>
                <div className="relative h-64 overflow-hidden">
                  {project.images.length > 0 ? (
                    <>
                      <img
                        src={project.images[0]}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <div className="text-center p-6">
                        <svg className="w-12 h-12 mx-auto text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-400">Coming Soon</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    <span className="px-2 py-1 bg-gray-800/80 text-green-400 rounded-md text-xs font-medium">
                      {project.software}
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Gallery Modal */}
      {isModalOpen && selectedProject && (
        <>
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4">
            <div className="relative bg-gray-900/80 border border-gray-700/50 rounded-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">{selectedProject.name}</h3>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">
                    {selectedProject.software}
                  </span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {selectedProject.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative group rounded-xl overflow-hidden"
                    onClick={() => setFullScreenImage(img)}
                  >
                    <img
                      src={img}
                      alt={`${selectedProject.name} preview ${idx + 1}`}
                      className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-medium">Click to view</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800/50"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Fullscreen Image */}
      {fullScreenImage && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setFullScreenImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <img
              src={fullScreenImage}
              alt="Fullscreen Preview"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-6 left-0 right-0 text-center text-gray-400 text-sm">
              Click anywhere to close
            </div>
          </div>
        </div>
      )}

     
    </section>
  );
};

export default Projects;
