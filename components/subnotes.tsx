import { useEffect, useState } from "react";
import Layout from "./layout";

export default function SubNotes() {
  // Khusus bagian icon

  const backIcon = () => {
    return (
      <div
        role="button"
        className="flex items-center justify-center hover:scale-[1.15] duration-100 ease-in-out rounded-full w-[4vh] sm:w-[6vh] h-[4vh] sm:h-[6vh] mt-1"
      >
        <svg
          className="fill-white opacity-80 w-[2.5vh] sm:w-[4.2vh] h-[2.5vh] sm:h-[4.2vh] m-auto hover:opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </div>  
    );
  };
  

  const checkIcon = (display:string) => {
    return (
      <div
        role="button"
        className={`${display} ml-auto items-center justify-center hover:scale-[1.15] right-0 duration-100 ease-in-out rounded-full w-[4vh] sm:w-[6vh] h-[4vh] sm:h-[6vh] mt-1`}
      >
        <svg
          className="fill-white opacity-80 w-[2.5vh] sm:w-[4.2vh] h-[2.5vh] sm:h-[4.2vh] m-auto hover:opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      </div>
    );
  };

  // Bagian variabel program
  const [dateToday, setDateToday] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col w-[100vw] lg:w-[81vw] right-0  absolute z-10 bg-[#323232]  h-[94vh] md:h-[90.5vh]">
      <div className="flex flex-col  flex-1 mx-4 pt-[1vh] lg:px-[3.8vh] px-[3.4vh] gap-y-[1.6vh] sm:gap-y-[2.2vh]">
        <div className="flex flex-center">
          {backIcon()}
          {checkIcon("flex")}
        </div>

        {/* TITLE */}
        <div className="flex items-center gap-x-3 mt-1">
          {/* Input title */}
          <input
            id="titleInput"
            className="font-semibold text-[2.5vh] sm:text-[3.4vh] w-[65vw] bg-transparent outline-none"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
            type="text"
            placeholder="Title"
          />
        </div>
        {/* Time Subnotes Created */}
        <p className="text-[1.7vh] sm:text-[2.2vh] mt-1 sm:mt-2 text-slate-300">
          {/* Date */}
          {dateToday.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          {/* Time */}
          <span className="ml-1">
            {"|"}{" "}
            {dateToday.toLocaleTimeString("en-GB", {
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
        </p>
        {/* SUBNOTES */}
        <div className="flex flex-1 items-start mb-[4vh]">
          <textarea
            id="descriptionInput"
            className="flex-1 h-full items-start break-all overflow-y-visible outline-none bg-transparent text-[1.4vh] sm:text-[2.1vh]"
            placeholder="Mulai mengetik..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}
