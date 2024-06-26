"use client";
import React, { useState, useEffect } from "react";
import BackHomeButton from "../components/BackHomeButton";
import RestartTimerButton from "../components/RestartTimerButton";
import MyFooter from "../components/MyFooter";

const oneMinute = 60000;

const BackgroundSwitcher = () => {
  const [isRed, setIsRed] = useState(true);
  const [finish, setFinish] = useState(false);
  // const sound = new Audio("./sounds/button-3.wav");
  // // const soundFinished = new Audio("./sounds/bell-ringing-04.mp3");

  let switchTimeOut;
  let interval;

  const restartTimer = () => {
    startTimer();
  };

  const finishGame = () => {
    setFinish(true);
    // soundFinished.play();
    clearTimeout(switchTimeOut);
    clearInterval(interval);
  };

  const startTimer = () => {
    clearInterval(interval);
    clearTimeout(switchTimeOut);
    setFinish(false);

    interval = setInterval(() => {
      setIsRed((prevIsRed) => !prevIsRed);
      // sound.play();
    }, 2500);

    switchTimeOut = setTimeout(() => {
      finishGame();
    }, oneMinute);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
      clearTimeout(switchTimeOut);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700">
      {!finish && (
        <div
          className={`w-full h-screen transition-colors duration-500 ${
            isRed ? "bg-red-500" : "bg-blue-500"
          }`}
        ></div>
      )}
      {finish && (
        <div className="flex flex-col items-center justify-center m-3">
          <h1 className="text-2xl m-5">Round finalizado!</h1>

          <div>
            <RestartTimerButton restartTimer={restartTimer} />

            <BackHomeButton />
          </div>
        </div>
      )}
      <MyFooter />
    </div>
  );
};

export default BackgroundSwitcher;
