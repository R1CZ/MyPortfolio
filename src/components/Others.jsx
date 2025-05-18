import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    title: "UI Designer (OJT)",
    company: "ResponsivcodeTechSolution",
    location: "Cebu City, Philippines",
    description: "Designed user interfaces for a Barangay Appointment System Management platform, focusing on creating intuitive workflows and modern visual design.",
    imageUrl: "https://i.imghippo.com/files/nDdq1443QYU.jpg",
    icon: "🎨",
    date: { start: "2024-02-05", end: "2024-05-03" },
    links: [
      {
        url: "https://github.com/your-username/your-project",
        icon: <FaGithub />,
        label: "View on GitHub"
      }
    ],
    tags: ["UI/UX", "Figma", "Wireframing", "Prototyping"]
  },
  {
    id: 2,
    title: "IT NOC Specialist",
    company: "Misamis Cable Internet",
    location: "Misamis Occidental, Philippines",
    description: "Monitored network infrastructure and performed troubleshooting to ensure stable internet connectivity using advanced script commands and network diagnostic tools.",
    imageUrl: "",
    icon: "🖥️",
    date: { start: "2023-11-03", end: "2024-05-03" },
    links: [],
    tags: ["Network Monitoring", "Troubleshooting", "Command Script", "Linux", "Windows"]
  }
];

const ExperienceCard = ({ experience, index, onSeeExamples }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const formattedStartDate = new Date(experience.date.start).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  });

  const formattedEndDate = new Date(experience.date.end).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-full"
    >
      <div
        className={`h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 ${
          isHovered ? 'shadow-xl shadow-green-400/20' : 'shadow-lg'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className="text-4xl flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-400/20 backdrop-blur-sm"
              animate={{
                scale: isHovered ? [1, 1.1, 1] : 1,
                rotate: isHovered ? [0, 5, -5, 0] : 0
              }}
              transition={{ duration: 0.6 }}
            >
              {experience.icon}
            </motion.div>

            <div className="text-xs font-medium bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full">
              {formattedStartDate} - {formattedEndDate}
            </div>
          </div>

          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
            <div className="text-green-400 font-medium text-sm mb-2">{experience.company}</div>
            <div className="text-gray-400 text-xs mb-4 flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {experience.location}
            </div>

            <motion.p
              className="text-gray-300 text-sm mb-6 leading-relaxed"
              animate={{ opacity: isHovered ? 1 : 0.9 }}
            >
              {experience.description}
            </motion.p>

            {experience.tags && experience.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {experience.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-800/50 text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/50">
            <div className="flex space-x-2">
              {experience.imageUrl && (
                <motion.button
                  onClick={() => onSeeExamples(experience.imageUrl)}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg font-medium text-xs hover:scale-[1.03] transition-transform flex items-center"
                  whileTap={{ scale: 0.95 }}
                >
                  View Picture <FaExternalLinkAlt className="ml-2" size={12} />
                </motion.button>
              )}
            </div>

            <div className="flex space-x-2">
              {experience.links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg hover:bg-gray-700/50 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-gray-900 border border-gray-800 rounded-xl max-w-4xl w-full mx-4 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-white bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>

            <div className="p-1">
              <img
                src={imageUrl}
                alt="Project example"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ExperienceSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleOpenModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="experience" className="relative py-20 bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-400 mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My journey through different roles and the skills I've acquired along the way
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              onSeeExamples={handleOpenModal}
            />
          ))}
        </div>
      </div>

      <ExperienceModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        imageUrl={selectedImage}
      />
    </section>
  );
};

export default ExperienceSection;
