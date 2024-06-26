import React from "react";

const RestartTimerButton = ({ restartTimer }) => (
  <button
    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-3"
    onClick={restartTimer}
  >
    Reiniciar
  </button>
);

export default RestartTimerButton;
