const SlideSpeed = ({ speed, setSpeed }) => (
  <div className="m-4 flex flex-col justify-center items-center">
    {/* <label className="m-1 text-black font-semibold">Velocidade:</label> */}
    <input
      type="range"
      min={1000}
      max={5000}
      value={speed}
      onChange={(e) => setSpeed(Number(e.target.value))}
    />
  </div>
);

export default SlideSpeed;
