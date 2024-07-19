"use client";
import React, { useState, useEffect } from "react";
import BackHomeButton from "../components/BackHomeButton";
import ArrowRandom from "../components/ArrowRandom";
import MyFooter from "../components/MyFooter";
import StartStopButton from "../components/StartStopButton";
import SlideSpeed from "../components/SlideSpeed";
import { intervalTimer } from "../../../public/utils/randomize";

const RandomArrow = () => {
  // const sound = new Audio("./sounds/button-3.wav");
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [direction, setDirection] = useState("");
  const [sound, setSound] = useState("");

  useEffect(() => {
    setSound(document.getElementById("audio"));
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        intervalTimer(setDirection, direction, sound);
      }, speed);
    }
    return () => clearInterval(interval);
  }, [isRunning, speed, direction]);

  return (
    <div
      className={
        "flex flex-col items-center justify-center h-screen bg-gray-200"
      }
    >
      <audio preload="auto" id="audio">
        {/* <source src="./sounds/button-3.wav" type="audio/wav"></source> */}
        <source
          src="https://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg"
          type="audio/ogg"
        ></source>
      </audio>
      <SlideSpeed speed={speed} setSpeed={setSpeed} />

      {isRunning && <ArrowRandom direction={direction} />}

      <div className="flex flex-col items-center justify-center m-3">
        <div>
          <StartStopButton isRunning={isRunning} setIsRunning={setIsRunning} />
          {!isRunning && <BackHomeButton />}
        </div>
        {!isRunning && <MyFooter />}
      </div>
    </div>
  );
};

export default RandomArrow;
