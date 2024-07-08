const SlideSpeed = ({ speed, setSpeed }) => (
  <div className="m-4 flex flex-col justify-center items-center">
    <label className="m-1 text-black font-semibold">Speed:</label>
    <input
      type="range"
      min="1"
      max="5"
      value={speed}
      onChange={(e) => setSpeed(Number(e.target.value))}
    />
  </div>
);

export default SlideSpeed;
