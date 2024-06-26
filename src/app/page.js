"use client";
import MyFooter from "./components/MyFooter";
import CallGameOne from "./components/CallRandomArrow";
import CallBackGroundSwitch from "./components/CallBackGroundSwitch";

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-700">
    <CallGameOne />
    <CallBackGroundSwitch />
    <MyFooter />
  </div>
);

export default Home;
