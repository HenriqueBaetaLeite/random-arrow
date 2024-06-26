const Arrow = ({ direction }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-9xl text-white-800 font-bold">
        {direction === "up" && "↑"}
        {direction === "left" && "←"}
        {direction === "right" && "→"}
      </div>
    </div>
  );
};

export default Arrow;
