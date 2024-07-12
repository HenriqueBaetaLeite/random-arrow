const SlideSpeed = ({ speed, setSpeed }) => {
  const marks = [1, 2, 3, 4, 5];

  return (
    <div className="m-4 flex flex-col justify-center items-center w-3/12">
      <label htmlFor="speedRange" className="text-black text-2xl m-2">
        {speed / 1000} {speed === 1000 ? "segundo" : "segundos"}
      </label>
      <div className="relative w-full">
        <input
          id="speedRange"
          className="w-full text-black cursor-pointer"
          type="range"
          min={1000}
          max={5000}
          step={500}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          list="steplist"
        />
        <datalist id="steplist">
          <option>1500</option>
          <option>2500</option>
          <option>3500</option>
          <option>4500</option>
        </datalist>
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
