const directions = ["up", "left", "right"];

export const randomizeDirection = () => {
  return directions[Math.floor(Math.random() * directions.length)];
};

export const intervalTimer = (setDirection, direction, _sound) => {
  const randomDirection = randomizeDirection();

  if (randomDirection === direction) {
    // sound.play();
    const randomDirection = randomizeDirection();

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
