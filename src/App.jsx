import './App.css';
import { useRef, useState, useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Others from './components/Others';
import Collaboration from './components/Collaboration'; 
import LoadingScreen from './components/LoadingScreen'; // Import LoadingScreen

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0); // loading progress in %

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const othersRef = useRef(null);
  const projectsRef = useRef(null);
  const collaborationRef = useRef(null); 
  const contactRef = useRef(null);

  // Simulate progress and loading completion
  useEffect(() => {
    let percentage = 0;
    const interval = setInterval(() => {
      percentage += 1;
      setProgress(percentage);
      if (percentage >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 200); // slight delay after 100%
      }
    }, 40); // 40ms * 100 = 4 seconds total
    return () => clearInterval(interval);
  }, []);

  if (loading) return <LoadingScreen progress={progress} />;

  return (
    <div>
      <Navbar 
        onHomeClick={() => heroRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onAboutClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onOthersClick={() => othersRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onProjectsClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onCollaborationClick={() => collaborationRef.current?.scrollIntoView({ behavior: 'smooth' })} 
        onContactClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />

      <div ref={heroRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={othersRef}><Others /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={collaborationRef}><Collaboration /></div>
      <div ref={contactRef}><Contact /></div>
      
      <Footer />
    </div>
  );
}

export default App;
