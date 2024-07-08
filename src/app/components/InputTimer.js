const InputTimer = ({ timer, setTimer }) => (
  <div className="flex flex-col justify-center items-center">
    <label htmlFor="timer" className="text-black">Tempo (em segundos):</label>
    <input
      className="text-black max-w-10 text-center"
      autoComplete="off"
      id="timer"
      type="text"
      value={timer}
      onChange={(e) => setTimer(e.target.value)}
    />
  </div>
);

export default InputTimer;
