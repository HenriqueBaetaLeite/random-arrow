import React from "react";
import GreenButton from "./GreenButton";

const RestartTimerButton = ({ restartTimer }) => (
  <GreenButton text={"Reiniciar"} onClicker={restartTimer} />
);

export default RestartTimerButton;
