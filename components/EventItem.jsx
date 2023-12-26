import { Icon } from "@iconify/react";
import React from "react";

function EventItem({ name, date, location }) {
  const monthNum = date.substr(5, 2);
  const day = date.substr(8, 2);
  let monthStr = "";
  switch (monthNum) {
    case "01":
      monthStr = "فروردین";
      break;
    case "02":
      monthStr = "اردیبهشت";
      break;
    case "03":
      monthStr = "خرداد";
      break;
    case "04":
      monthStr = "تیر";
      break;
    case "05":
      monthStr = "مرداد";
      break;
    case "06":
      monthStr = "شهریور";
      break;
    case "07":
      monthStr = "مهر";
      break;
    case "08":
      monthStr = "آبان";
      break;
    case "09":
      monthStr = "آذر";
      break;
    case "10":
      monthStr = "دی";
      break;
    case "11":
      monthStr = "بهمن";
      break;
    case "12":
      monthStr = "اسفند";
      break;
  }

  return (
    <div className="py-2 flex justify-end items-center w-full md:w-[90%] border-b-2 border-solid	border-zinc-100">
      <div className=" mr-4">{name}</div>
      <Icon icon={`twemoji:flag-${location}`} className=" text-3xl mr-4 " />
      <div className="flex">
        <div className=" mx-1">{monthStr}</div>
        <div>{day}</div>
      </div>
    </div>
  );
}

export default EventItem;
