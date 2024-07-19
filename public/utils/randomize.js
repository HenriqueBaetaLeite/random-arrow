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

export const intervalTimer = (setDirection, direction, sound) => {
  const randomDirection = randomizeDirection(directions);

  if (randomDirection === direction) {
    const randomDirection = randomizeDirection(directions);
    setDirection(randomDirection);
    sound.play();
  } else {
    setDirection(randomDirection);
    sound.play();
  }
};

export const intervalTimer2 = (setDirection, direction, sound) => {
  const randomDirection = randomizeDirection(sevenArrows);

  if (randomDirection === direction) {
    const randomDirection = randomizeDirection(sevenArrows);
    setDirection(randomDirection);
    sound.play();
  } else {
    setDirection(randomDirection);
    sound.play();
  }
};

const backGrounds = ["bg-red-500", "bg-blue-500"];

export const randomizeBackGround = () => {
  return backGrounds[Math.floor(Math.random() * backGrounds.length)];
};
