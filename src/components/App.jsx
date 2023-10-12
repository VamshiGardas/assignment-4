import React, { useState, useEffect } from "react";
import "./App.css"; //  CSS file
function App() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const newTime = new Date().toLocaleTimeString();
      setCurrentTime(newTime);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h1>Current Time: </h1>
      <h2>{currentTime}</h2>
    </div>
  );
}
export default App;
