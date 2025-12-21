import React, { Suspense, lazy } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';

// Lazy-loaded sections
const Home = lazy(() => import('./Components/Home/Home'));
const About = lazy(() => import('./Components/About/About'));
const TechStack = lazy(() => import('./Components/TechStack/TechStack'));
const WorkExperience = lazy(() => import('./Components/WorkExperience/WorkExperience'));
const Education = lazy(() => import('./Components/Education/Education'));
const Projects = lazy(() => import('./Components/Projects/Projects'));

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Suspense
        fallback={<div className="initial-loader" aria-hidden="true" />}
      >
        <Home />
        <About />
        <TechStack />
        <WorkExperience />
        <Education />
        <Projects />
      </Suspense>
    </div>
  );
}

export default App;
