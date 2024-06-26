"use client";

import React, { useState, useEffect } from "react";

function Arrow({ direction }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-9xl text-white-800 font-bold">
        {direction === "up" && "↑"}
        {direction === "left" && "←"}
        {direction === "right" && "→"}
      </div>
    </div>
  );
}

function Home() {
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const directions = ["up", "left", "right"];

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        const randomDirection =
          directions[Math.floor(Math.random() * directions.length)];
        if (direction == "") {
          setDirection(randomDirection);
        } else {
          setDirection("");
        }
      }, 1500 / (speed / 2));
    }
    return () => clearInterval(interval);
  }, [isRunning, speed, directions]);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-gray-700 ${
        darkMode && "dark"
      }`}
    >
      <div className="m-4 flex flex-col justify-center items-center">
        <label className="m-1">Velocidade:</label>
        <input
          type="range"
          min="1"
          max="4"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>
      {isRunning && <Arrow direction={direction} />}
      <button
        className="m-6 px-4 py-2 bg-green-500 dark:text-white rounded hover:bg-green-700 transition"
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
{/* 
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button> */}
      <small className="text-gray-500 dark:text-gray-400">
        Feito por{" "}
        <a
          href="https://www.linkedin.com/in/henriquebaetaleite/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 dark:text-blue-300"
        >
          Henrique Baêta
        </a>
      </small>
    </div>
  );
}

export default Home;
