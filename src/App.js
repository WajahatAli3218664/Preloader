import React, { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader duration={3000} onFinish={() => setLoaded(true)} />}

      <div className={`site ${loaded ? "visible" : "hidden"}`}>
        <Navbar />

        <main style={{ textAlign: "center", paddingTop: "120px" }}>
          <h1
            style={{
              color: "white",
              fontFamily: "FlipPrimary, FlipSecondary, sans-serif",
              fontSize: "42px",
              marginBottom: "16px",
            }}
          >
            FLIPSTUDIO
          </h1>

          <p
            style={{
              color: "#aaa",
              fontFamily: "FlipSecondary, sans-serif",
              fontSize: "16px",
            }}
          >
            Preloader finished. Now your main site content starts here.
          </p>
        </main>
      </div>
    </>
  );
}

export default App;
