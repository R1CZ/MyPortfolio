import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiLayers, FiZap } from "react-icons/fi";
import AboutImage from "../assets/aboutme-image.jpg";
import FIGMA from "../assets/FIGMA.png";
import PS from "../assets/PS.png";
import AI from "../assets/AI.png";
import Trello from "../assets/Trello.png";
import Firebase from "../assets/Firebase.png";
import HTML from "../assets/HTML.png";
import CSS3 from "../assets/CSS3.png";

const About = () => {
  const [inView, setInView] = useState(false);
  const [percentages, setPercentages] = useState({
    TimeManagement: 0,
    MultiTask: 0,
    Fastlearner: 0,
  });

  const skillIcons = {
    TimeManagement: <FiClock className="text-blue-400" size={18} />,
    MultiTask: <FiLayers className="text-emerald-400" size={18} />,
    Fastlearner: <FiZap className="text-purple-400" size={18} />,
  };

  const skillNames = {
    TimeManagement: "Time Management",
    MultiTask: "Multi-Tasking",
    Fastlearner: "Fast Learning",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
            resetPercentages();
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector(".progress-bars");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const resetPercentages = () => {
    setPercentages({
      TimeManagement: 0,
      MultiTask: 0,
      Fastlearner: 0,
    });
  };

  useEffect(() => {
    let interval;

    if (inView) {
      interval = setInterval(() => {
        setPercentages((prev) => ({
          TimeManagement: Math.min(prev.TimeManagement + 1, 85),
          MultiTask: Math.min(prev.MultiTask + 1, 80),
          Fastlearner: Math.min(prev.Fastlearner + 1, 90),
        }));
      }, 20);
    }

    return () => clearInterval(interval);
  }, [inView]);

  const techStack = [
    { name: "Figma", icon: FIGMA, category: "Design" },
    { name: "Photoshop", icon: PS, category: "Design" },
    { name: "Illustrator", icon: AI, category: "Design" },
    { name: "Trello", icon: Trello, category: "Productivity" },
    { name: "Firebase", icon: Firebase, category: "Development" },
    { name: "HTML", icon: HTML, category: "Development" },
    { name: "CSS3", icon: CSS3, category: "Development" },
  ];

  return (
    <section id="about" className="relative py-20 bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-400 mb-4">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Passionate designer and developer creating digital experiences
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-md relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-emerald-400/30 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500 -z-10" />
            <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/10 group-hover:border-blue-400/30 transition-all duration-500 -z-10" />
            <img
              src={AboutImage}
              alt="About Me"
              className="w-full h-auto rounded-3xl object-cover shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            {/* About Text */}
            <div className="space-y-6 max-w-2xl mx-auto text-justify">
              <p className="text-gray-300 leading-relaxed text-md md:text-lg font-light">
                I am passionate about web design, specializing in creating engaging landing pages for both mobile and web platforms.
                I have a strong interest in front-end development and continuously explore new technologies and tools to enhance my skills.
                Beyond my profession, I am a fast learner who embraces challenges, always striving for personal and professional growth.
              </p>
            </div>

            {/* Skills / Progress Bars */}
            <div className="space-y-6 progress-bars mt-10">
              {Object.entries(percentages).map(([skill, percentage]) => (
                <div key={skill} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-gray-800/50 rounded-lg">
                        {skillIcons[skill]}
                      </div>
                      <span className="text-sm font-medium text-gray-300">
                        {skillNames[skill]}
                      </span>
                    </div>
                    <span className="text-xs font-medium bg-gray-800/50 text-gray-300 px-2 py-1 rounded-full">
                      {percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className="h-full rounded-full shadow-md"
                      style={{
                        background: `linear-gradient(90deg, 
                          ${percentage < 30 ? '#3b82f6' : 
                            percentage < 60 ? '#8b5cf6' : 
                            '#10b981'}, 
                          ${percentage < 30 ? '#6366f1' : 
                            percentage < 60 ? '#a855f7' : 
                            '#34d399'})`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-12">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-6">
                Skills & Tech Stack
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-3 bg-gray-800/40 rounded-2xl border border-gray-700/40 hover:border-emerald-400/30 transition-all hover:shadow-lg hover:shadow-emerald-500/10 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center mb-2">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" 
                      />
                    </div>
                    <p className="text-xs text-gray-300 font-medium text-center">{tech.name}</p>
                    <span className="text-[10px] text-gray-500 mt-1">{tech.category}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
