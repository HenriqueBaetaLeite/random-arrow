"use client";
import MyFooter from "./components/MyFooter";
import CallRandomArrow from "./components/CallRandomArrow";
// import CallBackGroundSwitch from "./components/CallBackGroundSwitch";
import CallBackGroundSwitchTwo from "./components/CallBackGroundSwitchTwo";
import CallRandomArrowTwo from "./components/CallRandomArrowTwo";

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
    <CallRandomArrow />
    <CallRandomArrowTwo />
    {/* <CallBackGroundSwitch /> */}
    <CallBackGroundSwitchTwo />
    <MyFooter />
  </div>
);

export default Home;
