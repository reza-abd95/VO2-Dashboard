import axios from "axios";
import React, { useEffect, useState } from "react";
import EventItem from "./EventItem";

function Events() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://vo2.ir/api/getEvents");
        setEvent(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full justify-start flex-col items-end ">
      {event.map((event) => (
        <EventItem
          key={event.id}
          name={event.name}
          date={event.event_date}
          location={event.location}
        />
      ))}
    </div>
  );
}

export default Events;
