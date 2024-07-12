import up from "./assets/up2.png";
import left from "./assets/left2.png";
import right from "./assets/right2.png";
import leftUp from "./assets/left-up.png";
import leftDown from "./assets/left-down.png";
import rightUp from "./assets/right-up.png";
import rightDown from "./assets/right-down.png";
import Image from "next/image";

const arrowWidth = 700;
const arrowWidthAlternative = 650;

const RightArrow = () => <Image src={right} alt="right" width={arrowWidth} />;

const UpArrow = () => <Image src={up} alt="up" width={350} />;

const LeftArrow = () => <Image src={left} alt="left" width={arrowWidth} />;

const LeftUpArrow = () => (
  <Image src={leftUp} alt="left-up" width={arrowWidthAlternative} />
);

const LeftDownArrow = () => (
  <Image src={leftDown} alt="left-down" width={arrowWidthAlternative} />
);

const RightUpArrow = () => (
  <Image src={rightUp} alt="right-up" width={arrowWidthAlternative} />
);

const RightDownArrow = () => (
  <Image src={rightDown} alt="right-down" width={arrowWidthAlternative} />
);

const Arrow7 = ({ direction }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div>
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
