"use client";
import React, { useState, useEffect } from "react";
import BackHomeButton from "../components/BackHomeButton";
import MyFooter from "../components/MyFooter";
import SlideSpeed from "../components/SlideSpeed";
import GreenButton from "../components/GreenButton";
import YellowButton from "../components/YellowButton";

import { randomizeBackGround } from "../../../public/utils/randomize";

const BackgroundSwitcher = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [finish, setFinish] = useState(false);
  const [speed, setSpeed] = useState(2500);
  const [background, setBackground] = useState("bg-red-500");

  let interval;

  const clearingTimer = () => {
    clearInterval(interval);
  };

  const finishGame = () => {
    clearingTimer();
    setFinish(true);
    setIsRunning(false);
  };

  const startTimer = () => {
    clearingTimer();
    setFinish(false);

    interval = setInterval(() => {
      setBackground(randomizeBackGround());
    }, speed);
  };

  useEffect(() => {
    if (isRunning) {
      startTimer();
    }
    return () => {
      clearingTimer();
    };
  }, [isRunning, speed]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <SlideSpeed speed={speed} setSpeed={setSpeed} />
      {!isRunning && (
        <div className="flex flex-col items-center justify-center m-3">
          <div>
            <GreenButton
              text={"Iniciar"}
              onClicker={() => setIsRunning(true)}
            />
            <BackHomeButton />
          </div>

          <MyFooter />
        </div>
      )}
      {!finish && isRunning && (
        <div
          className={`w-full h-screen transition-colors duration-500 flex justify-center items-end ${background}`}
        >
          <YellowButton text={"Parar"} onClicker={finishGame} />
        </div>
      )}
    </div>
  );
};

export default BackgroundSwitcher;
