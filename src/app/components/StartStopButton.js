import React from "react";
import GreenButton from "./GreenButton";
import YellowButton from "./YellowButton";

const StartStopButton = ({ isRunning, setIsRunning }) =>
  isRunning ? (
    <YellowButton text={"Parar"} onClicker={() => setIsRunning(false)} />
  ) : (
    <GreenButton text={"Iniciar"} onClicker={() => setIsRunning(true)} />
  );

export default StartStopButton;
