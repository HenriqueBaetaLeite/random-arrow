"use client";
import React, { useState, useEffect } from "react";
import BackHomeButton from "../components/BackHomeButton";
import ArrowRandom from "../components/ArrowRandom";
import MyFooter from "../components/MyFooter";

const Home = () => {
  const sound = new Audio("./sounds/button-3.wav");
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState("");

  const directions = ["up", "left", "right"];

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        const randomDirection =
          directions[Math.floor(Math.random() * directions.length)];

        if (randomDirection === direction) {
          const randomDirection =
            directions[Math.floor(Math.random() * directions.length)];

          setDirection(randomDirection);
          sound.play();
        } else {
          setDirection(randomDirection);
          sound.play();
        }
      }, 1500 / (speed / 2));
    }
    return () => clearInterval(interval);
  }, [isRunning, speed, directions]);

  const startGame = () => {
    setIsRunning(true);
  };

  const stopGame = () => {
    setIsRunning(false);
  };

  return (
    <div
      className={
        "flex flex-col items-center justify-center h-screen bg-gray-700"
      }
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
      {isRunning && <ArrowRandom direction={direction} />}

      <button
        className="m-6 px-4 py-2 bg-green-500 dark:text-white rounded hover:bg-green-700 transition"
        onClick={isRunning ? () => stopGame() : () => startGame()}
      >
        {isRunning ? "Stop" : "Start"}
      </button>

      <BackHomeButton />
      <MyFooter />
    </div>
  );
};

export default Home;
