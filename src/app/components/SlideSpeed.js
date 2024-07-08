const SlideSpeed = ({ speed, setSpeed, min, max }) => (
  <div className="m-4 flex flex-col justify-center items-center">
    <label className="m-1 text-black font-semibold">Velocidade:</label>
    <input
      type="range"
      min={min}
      max={max}
      value={speed}
      onChange={(e) => setSpeed(Number(e.target.value))}
    />
  </div>
);

export default SlideSpeed;
