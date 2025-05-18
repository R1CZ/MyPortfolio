import React, { useState, useEffect } from 'react';
import { FaFacebookMessenger, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import HeroImage from '../assets/hero_image.jpg';
import './Hero.css';

const socialLinks = [
  {
    icon: FaFacebookMessenger,
    label: 'Messenger',
    href: 'https://www.facebook.com/riczy.08/', 
    gradient: 'from-blue-400 to-blue-500',
  },
  {
    icon: FaFileAlt,
    label: 'Resume',
    href: '/My_Resume.pdf',
    gradient: 'from-blue-400 to-green-400',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/YOUR_USERNAME', 
    gradient: 'from-gray-700 to-black',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jonric-manisan-33905a28a/', 
    gradient: 'from-blue-600 to-blue-800',
  },
];

const Hero = () => {
  const controls = useAnimation();
  const [typewriterText, setTypewriterText] = useState('World!');
  const fullText = ''; 
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypewriterText((prevText) => prevText + fullText[index]);
      index += 1;
      if (index === fullText.length) clearInterval(timer);
    }, typingSpeed);
    return () => clearInterval(timer);
  }, [fullText]);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 0, y: 20 });
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    };
    sequence();
  }, [controls]);

  return (
    <div className="relative hero-section overflow-hidden min-h-screen">
      {/* Background Blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-green-400/20 rounded-full blur-3xl z-0"
        animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
        style={{ top: '-200px', left: '-200px' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl z-0"
        animate={{ x: [0, -150, 150, 0], y: [0, 150, -150, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
        style={{ bottom: '-150px', right: '-200px' }}
      />

      {/* Left Lottie + Typewriter */}
      <motion.div
        className="absolute flex flex-col items-start top-60 left-4 z-10 pointer-events-none lottie-text-container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="lottie-wrapper">
          <DotLottieReact
            src="https://lottie.host/599a10bd-dbe9-4a9a-8be5-06b741d2987b/QqfyDWNHOh.lottie"
            loop
            autoplay
            style={{ background: 'transparent' }}
          />
        </div>
        <div className="top-left-name mt-2 ml-2">
          <span className="static-text">Hello!</span>
          <span className="typewriter-text">{typewriterText}</span>
        </div>
      </motion.div>

      {/* Right Lottie */}
      <motion.div
        className="right-lottie-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="lottie-wrapper-right">
          <DotLottieReact
            src="https://lottie.host/e66a72cf-9cad-4c21-967b-603ef7579777/CEyX584JVg.lottie"
            loop
            autoplay
            style={{ background: 'transparent' }}
          />
        </div>
        <motion.div
          className="scroll-down-hint"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0.6, 1, 0.6], y: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.6,
          }}
        >
          <span className="scroll-text">Scroll down</span>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="hero-content text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <motion.img
          src={HeroImage}
          alt="Welcome!"
          className="mx-auto mb-6 w-40 h-40 rounded-full object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
        />
        <motion.h1
          className="text-3xl font-semibold text-white mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          Jonric Manisan
        </motion.h1>
        <motion.h2
          className="text-xl text-gray-300 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          UI/UX Designer | Networking
        </motion.h2>
        <motion.p
          className="text-md text-gray-400 max-w-md mx-auto mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          Web designer with NOC specialist in network monitoring and uptime.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center items-center space-x-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          {socialLinks.map(({ icon: Icon, label, href, gradient }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <button
                className={`bg-gradient-to-r ${gradient} text-white p-3 rounded-full text-xl`}
              >
                <Icon />
              </button>
              <span className="text-white text-xs mt-1">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
