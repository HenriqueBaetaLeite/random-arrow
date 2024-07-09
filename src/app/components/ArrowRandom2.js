import right from "./assets/right2.png";
import up from "./assets/up2.png";
import left from "./assets/left2.png";
import leftUp from "./assets/left-up.png";
import leftDown from "./assets/left-down.png";
import rightUp from "./assets/right2.png";
import rightDown from "./assets/right2.png";
import Image from "next/image";

const arrowWidth = 700;

const RightArrow = () => <Image src={right} alt="right" width={arrowWidth} />;

const UpArrow = () => <Image src={up} alt="up" width={350} />;

const LeftArrow = () => <Image src={left} alt="left" width={arrowWidth} />;

const LeftUpArrow = () => (
  <Image src={leftUp} alt="left-up" width={arrowWidth} />
);

const LeftDownArrow = () => (
  <Image src={leftDown} alt="left-down" width={arrowWidth} />
);

const RightUpArrow = () => {
  <Image src={rightUp} alt="right-up" width={arrowWidth} />;
};

const RightDownArrow = () => {
  <Image src={rightDown} alt="right-down" width={arrowWidth} />;
};

const Arrow7 = ({ direction }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div>
        {console.log("onde", direction)}
        {direction === "up" && <UpArrow />}
        {direction === "left" && <LeftArrow />}
        {direction === "right" && <RightArrow />}
        {direction === "left-up" && <LeftUpArrow />}
        {direction === "left-down" && <LeftDownArrow />}
        {direction === "right-up" && <RightUpArrow />}
        {direction === "right-down" && <RightDownArrow />}
      </div>
    </div>
  );
};

export default Arrow7;
