import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import TechStack from './Components/TechStack/TechStack';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
// import Certifications from './components/Certifications/Certifications';
// import Contact from './components/Contact/Contact';
import FloatingButtons from './Components/FloatingButtons/FloatingButtons';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <FloatingButtons />
      
      <Home />
      <About />
      <TechStack />
      <WorkExperience />
      <Education />
      <Projects />

    </div>
  );
}

export default App;
