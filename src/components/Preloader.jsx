import React, { useEffect, useState } from "react";
import "./Preloader.css";

export default function Preloader({ duration = 2000, onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  if (!visible) return null;

  return (
    <div className="preloader">
      <h1 className="preloader-logo">FLIPSTUDIO</h1>
    </div>
  );
}
