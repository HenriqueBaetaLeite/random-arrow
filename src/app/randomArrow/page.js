"use client";
import React, { useState, useEffect } from "react";
import BackHomeButton from "../components/BackHomeButton";
import ArrowRandom from "../components/ArrowRandom";
import MyFooter from "../components/MyFooter";
import StartStopButton from "../components/StartStopButton";
import SlideSpeed from "../components/SlideSpeed";
import { intervalTimer } from "../../../public/utils/randomizeDirection";

const RandomArrow = () => {
  // const sound = new Audio("./sounds/button-3.wav");
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        intervalTimer(setDirection, direction);
      }, 1500 / (speed / 2.5));
    }
    return () => clearInterval(interval);
  }, [isRunning, speed, direction]);

  return (
    <div
      className={
        "flex flex-col items-center justify-center h-screen bg-gray-200"
      }
    >
      <SlideSpeed speed={speed} setSpeed={setSpeed} min={1} max={5} />

      {isRunning && <ArrowRandom direction={direction} />}

      <StartStopButton isRunning={isRunning} setIsRunning={setIsRunning} />

      {!isRunning && <BackHomeButton />}
      {!isRunning && <MyFooter />}
    </div>
  );
};

export default RandomArrow;
