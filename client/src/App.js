import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Sidebar />
      
      <ScrollToTop
        smooth
        component={<FaArrowUp />}
        style={{
          backgroundColor: "#f97316",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 25px rgba(249, 115, 22, 0.6)",
          border: "2px solid rgba(255, 255, 255, 0.2)",
        }}
        className="scroll-to-top-btn"
      />
    </div>
  );
}

export default App;
