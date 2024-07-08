import right from "./right.png";
import up from "./up.png";
import left from "./left.png";
import Image from "next/image";

const RightArrow = () => <Image src={right} alt="right" width={300} />;

const UpArrow = () => <Image src={up} alt="up" width={300} />;

const LeftArrow = () => <Image src={left} alt="left" width={300} />;

const Arrow = ({ direction }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div>
        {direction === "up" && <UpArrow />}
        {direction === "left" && <LeftArrow />}
        {direction === "right" && <RightArrow />}
      </div>
    </div>
  );
};

export default Arrow;
