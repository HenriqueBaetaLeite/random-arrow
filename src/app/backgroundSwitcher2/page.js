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
  const [speed, setSpeed] = useState(1000);
  const [background, setBackground] = useState("bg-red-500");
  const [sound, setSound] = useState("");
  const [soundFinished, setSoundFinished] = useState("");

  let interval;
  let timer;

  const clearingTimer = () => {
    clearInterval(interval);
    clearInterval(timer);
  };

  const finishGame = () => {
    clearingTimer();
    setFinish(true);
    setIsRunning(false);
    soundFinished.play();
  };

  const startTimer = () => {
    clearingTimer();
    setFinish(false);

    interval = setInterval(() => {
      setBackground("bg-black");
      timer = setTimeout(() => {
        setBackground(randomizeBackGround());
        sound.play();
      }, 250);
    }, speed);
  };

  useEffect(() => {
    setSound(document.getElementById("sound"));
    setSoundFinished(document.getElementById("finish"));
    if (isRunning) {
      startTimer();
    }
    return () => {
      clearingTimer();
    };
  }, [isRunning, speed]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <audio id="sound" src="./sounds/button-3.wav"></audio>
      <audio id="finish" src="./sounds/bell-ringing-04.mp3"></audio>
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
          className={`w-full h-screen transition-colors duration-400 flex justify-center items-end ${background}`}
        >
          <YellowButton text={"Parar"} onClicker={finishGame} />
        </div>
      )}
    </div>
  );
};

export default BackgroundSwitcher;
