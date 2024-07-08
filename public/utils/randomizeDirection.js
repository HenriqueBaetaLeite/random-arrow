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
