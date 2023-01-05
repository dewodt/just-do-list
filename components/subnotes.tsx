import { useEffect, useState } from "react";
import Layout from "./layout";

export default function SubNotes() {
  // Khusus bagian icon
  // Bagian variabel program
  const [dateToday, setDateToday] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateToday(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-[81vw] right-0  absolute z-10 bg-[#323232]  h-[94vh] md:h-[90.5vh]">
      <div className="flex flex-col flex-1 pt-[2vh] lg:px-[3.8vh] lg:pt-[3.8vh] px-[3.4vh] ">
        <input className="font-semibold text-[2.5vh] sm:text-[3vh]"></input>
        <p> {dateToday.toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}</p>
              <input className="flex-1 items-start"></input>
      </div>
    </div>
  );
}
