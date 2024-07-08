"use client";
import MyFooter from "./components/MyFooter";
import CallRandomArrow from "./components/CallRandomArrow";
import CallBackGroundSwitch from "./components/CallBackGroundSwitch";

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
    <CallRandomArrow />
    <CallBackGroundSwitch />
    <MyFooter />
  </div>
);

export default Home;
