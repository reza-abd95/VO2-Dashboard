import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function TodayCalender() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://vo2.ir/api/getEvents");
        setEvent(response.data.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  let today = new Date()
    .toLocaleDateString("fa-IR-u-nu-latn")
    .replaceAll("/", "-");

  const date1 = new Date(today);
  const date2 = new Date(event.event_date);

  const timeDifference = date2 - date1;

  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const daysDifference = parseInt(timeDifference / millisecondsInADay / 7);

  return (
    <div className="flex sm:w-52 justify-end items-center mt-2 px-2 py-1 text-base bg-[#F1EFF9] rounded-2xl">
      <div>{event.name}</div>
      <Icon icon={`twemoji:flag-${event.location}`} className="mx-2 text-xl" />
      <div>هفته تا</div>
      <div>{daysDifference}</div>
    </div>
  );
}

export default TodayCalender;
