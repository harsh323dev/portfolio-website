import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import TechStack from './Components/TechStack/TechStack';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
      <About />
      <TechStack />
      <WorkExperience />
      <Education />
      <Projects />
      
      {/* Scroll to Top Button */}

    </div>
  );
}

export default App;
