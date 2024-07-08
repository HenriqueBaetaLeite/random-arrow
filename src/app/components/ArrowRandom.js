import right from "./assets/right2.png";
import up from "./assets/up2.png";
import left from "./assets/left2.png";
import Image from "next/image";

const arrowWidth = 700;

const RightArrow = () => <Image src={right} alt="right" width={arrowWidth} />;

const UpArrow = () => <Image src={up} alt="up" width={350} />;

const LeftArrow = () => <Image src={left} alt="left" width={arrowWidth} />;

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
