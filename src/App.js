import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import "./components/Preloader.css";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {!loaded && <Preloader />}

      <div className={`site ${loaded ? "visible" : "hidden"}`}>
        <Navbar />
        <main className="main-content">
          <h1 className="main-logo">
            <span className="flip">FLIP</span>
            <span className="studio">STUDIO</span>
          </h1>


          <p className="intro-text">
            Preloader finished. Now your main site content starts here.
          </p>
        </main>
      </div>
    </>
  );
}

export default App;
