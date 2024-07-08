"use client";
import React, { useState, useEffect } from "react";
import BackHomeButton from "../components/BackHomeButton";
import ArrowRandom from "../components/ArrowRandom";
import MyFooter from "../components/MyFooter";
import StartStopButton from "../components/StartStopButton";
import SlideSpeed from "../components/SlideSpeed";

const directions = ["up", "left", "right"];

const randomizeDirection = () => {
  return directions[Math.floor(Math.random() * directions.length)];
};

const Home = () => {
  // const sound = new Audio("./sounds/button-3.wav");
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        const randomDirection = randomizeDirection();

        if (randomDirection === direction) {
          // sound.play();
          const randomDirection = randomizeDirection();

          setDirection(randomDirection);
        } else {
          // sound.play();
          setDirection(randomDirection);
        }
      }, 1500 / (speed / 2.5));
    }
    return () => clearInterval(interval);
  }, [isRunning, speed, direction]);

  const startGame = () => {
    setIsRunning(true);
  };

  const stopGame = () => {
    setIsRunning(false);
  };

  return (
    <div
      className={
        "flex flex-col items-center justify-center h-screen bg-gray-200"
      }
    >
      <SlideSpeed speed={speed} setSpeed={setSpeed} />

      {isRunning && <ArrowRandom direction={direction} />}

      <StartStopButton
        isRunning={isRunning}
        startGame={startGame}
        stopGame={stopGame}
      />

      {!isRunning && <BackHomeButton />}
      {!isRunning && <MyFooter />}
    </div>
  );
};

export default Home;
