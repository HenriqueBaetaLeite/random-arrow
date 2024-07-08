"use client";
import React, { useState, useEffect } from "react";
import BackHomeButton from "../components/BackHomeButton";
import RestartTimerButton from "../components/RestartTimerButton";
import MyFooter from "../components/MyFooter";
import SlideSpeed from "../components/SlideSpeed";
import GreenButton from "../components/GreenButton";

const oneMinute = 60000;

const BackgroundSwitcher = () => {
  const [isRed, setIsRed] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [finish, setFinish] = useState(false);
  const [speed, setSpeed] = useState(2500);
  // const sound = new Audio("./sounds/button-3.wav");
  // const soundFinished = new Audio("./sounds/bell-ringing-04.mp3");

  let switchTimeOut;
  let interval;

  const clearingTimer = () => {
    clearInterval(interval);
    clearTimeout(switchTimeOut);
  };

  const finishGame = () => {
    clearingTimer();
    setFinish(true);
    // soundFinished.play();
  };

  const startTimer = () => {
    clearingTimer();
    setFinish(false);

    interval = setInterval(() => {
      setIsRed((prevIsRed) => !prevIsRed);
      // sound.play();
    }, speed);

    switchTimeOut = setTimeout(() => {
      finishGame();
    }, oneMinute);
  };

  useEffect(() => {
    if (isRunning) {
      startTimer();
    }
    return () => {
      clearingTimer();
    };
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      {!isRunning && (
        <div className="flex flex-col items-center justify-center m-3">
          <div>
            <SlideSpeed
              speed={speed}
              setSpeed={setSpeed}
              min={1000}
              max={5000}
            />
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
          className={`w-full h-screen transition-colors duration-500 flex justify-center items-end ${
            isRed ? "bg-red-500" : "bg-blue-500"
          }`}
        ></div>
      )}
      {finish && (
        <div className="flex flex-col items-center justify-center m-3">
          <h1 className="text-5xl m-5 text-black font-bold">
            Round finalizado!
          </h1>

          <div>
            <SlideSpeed
              speed={speed}
              setSpeed={setSpeed}
              min={1000}
              max={5000}
            />

            <RestartTimerButton restartTimer={startTimer} />
            <BackHomeButton />
          </div>
          <MyFooter />
        </div>
      )}
    </div>
  );
};

export default BackgroundSwitcher;
