import React from "react";
import "./Preloader.css";

export default function Preloader() {
  return (
    <div className="preloader">
      <h1 className="logo">
        <span className="flip">
          {["F", "L", "I", "P"].map((letter, i) => (
            <span key={i} className="letter" style={{ animationDelay: `${i * 0.15}s` }}>
              {letter}
            </span>
          ))}
        </span>
        <span className="studio">
          {["S", "T", "U", "D", "I", "O"].map((letter, i) => (
            <span
              key={i}
              className="letter"
              style={{ animationDelay: `${(i + 4) * 0.15}s` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </h1>
    </div>
  );
}

