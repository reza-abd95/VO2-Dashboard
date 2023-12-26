import React from "react";
import CtlChart from "./CtlChart";
import Events from "./Events";
import TodayCalender from "./todayCalender";

function Home() {
  return (
    <>
      <TodayCalender />
      <CtlChart />
      <div className="  text-right text-gray-700 mt-3 mb-2">مسابقات آینده</div>
      <div className=" w-full flex flex-col md:flex-row">
        <Events />
        <Events />
      </div>
    </>
  );
}

export default Home;
