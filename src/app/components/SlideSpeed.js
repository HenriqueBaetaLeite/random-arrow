const SlideSpeed = ({ speed, setSpeed }) => {
  const marks = [1, 2, 3, 4, 5];

  return (
    <div className="m-4 flex flex-col justify-center items-center">
      {/* <label htmlFor="speedRange" className="mb-2 text-black">
        Velocidade do Slider: {speed / 1000} segundo(s)
      </label> */}
      <div className="relative w-full m-3">
        <input
          id="speedRange"
          className="w-full"
          type="range"
          min={1000}
          max={5000}
          step={1000}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
        <div className="flex justify-between w-full absolute top-4">
          {marks.map((mark) => (
            <span key={mark} className="text-gray-500 text-l m-2">
              {mark}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideSpeed;
