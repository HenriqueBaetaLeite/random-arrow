const GreenButton = ({ text, onClicker }) => {
  return (
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-3 transition"
      onClick={() => onClicker()}
    >
      {text}
    </button>
  );
};

export default GreenButton;
