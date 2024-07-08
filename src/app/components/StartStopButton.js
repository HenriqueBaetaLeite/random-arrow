import React from "react";

const StartStopButton = ({ isRunning, startGame, stopGame }) => {
  return (
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-3 transition"
      onClick={isRunning ? () => stopGame() : () => startGame()}
    >
      {isRunning ? "Stop" : "Start"}
    </button>
  );
};
export default StartStopButton;
