import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Projects from "./Components/Projects/Projects";  // ← Add this import

const App = () => {
  return (
    <>
      <Sidebar />
      <Projects />  {/* ← Add this line */}
    </>
  );
};

export default App;
