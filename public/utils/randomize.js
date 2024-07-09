const directions = ["up", "left", "right"];

const sevenArrows = [
  "up",
  "left",
  "right",
  "left-up",
  "left-down",
  "right-up",
  "right-down",
];

export const randomizeDirection = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const intervalTimer = (setDirection, direction, _sound) => {
  const randomDirection = randomizeDirection(directions);

  if (randomDirection === direction) {
    // sound.play();
    const randomDirection = randomizeDirection(directions);

    setDirection(randomDirection);
  } else {
    // sound.play();
    setDirection(randomDirection);
  }
};

export const intervalTimer2 = (setDirection, direction, _sound) => {
  const randomDirection = randomizeDirection(sevenArrows);

  if (randomDirection === direction) {
    // sound.play();
    const randomDirection = randomizeDirection(sevenArrows);

    setDirection(randomDirection);
  } else {
    // sound.play();
    setDirection(randomDirection);
  }
};

const backGrounds = ["bg-red-500", "bg-blue-500"];

export const randomizeBackGround = () => {
  return backGrounds[Math.floor(Math.random() * backGrounds.length)];
};
