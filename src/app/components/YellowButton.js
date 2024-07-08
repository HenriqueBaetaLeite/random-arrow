const YellowButton = ({ text, onClicker }) => {
  return (
    <button
      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-3 transition"
      onClick={() => onClicker()}
    >
      {text}
    </button>
  );
};

export default YellowButton;
