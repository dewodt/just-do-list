import { useEffect, useRef, useState } from "react";
import Layout from "../components/layout";

export default function Notes() {
  const notesIcon = () => {
    return (
      <svg
        className="fill-white w-[1.8vh] sm:w-[2.45vh] m-auto opacity-80"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
      </svg>
    );
  };
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

  const checkIcon = (display: string) => {
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

  const plusIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[3.5vh] sm:w-[5vh] h-[3.5vh] sm:h-[5vh] m-auto hover:opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>
    );
  };

  type ObjectTask = {
    title: string;
    id: string;
    description: string;
    dateCreated: string;
  };
  // Khusus bagian variabel kerja
  const uniqid = require("uniqid"); // * to generate id from npm
  const [subNotesPreview, setSubNotesPreview] = useState(false);
  const [dateToday, setDateToday] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState<ObjectTask[]>([]);
  const [dateClick, setDateClick] = useState("");
  const [timeClick, setTimeClick] = useState("");
  const currentTimeDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentTimeButton = document.getElementById('current-time-button') as HTMLButtonElement;
    currentTimeButton.addEventListener('click', () => {
      const currentTime = new Date();
      currentTimeDiv.current!.innerHTML = currentTime.toString();
    });
  }, []);

  const dateNow = () => {
    return dateToday.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  const timeNow = () => {
    return dateToday.toLocaleTimeString("en-GB", {
      hour: "numeric",
      minute: "numeric",
    });
  };

  function addNotes() {
    setNotes([
      ...notes,
      {
        id: uniqid("note_"),
        title: title,
        description: description,
        dateCreated: "",
      },
    ]);

    setTitle("");
    setDescription("");
    setSubNotesPreview(false);
    setDateClick("");
    setTimeClick("");
  }

  function handleNewNotesPreview() {
    setSubNotesPreview(true);
    setDateClick(dateNow());
    setTimeClick(timeNow());
  }

  return (
    <>
      <Layout>
        <div className="flex flex-1">
          <div className="flex flex-col flex-1 pt-[2vh] lg:px-[3.8vh] lg:pt-[3.8vh] px-[3.4vh] ">
            <div className="flex  items-center gap-x-2">
              <span>{notesIcon()}</span>
              <p className="font-semibold text-[2.5vh] sm:text-[3.8vh]">
                Notes{" "}
              </p>
            </div>
            <div
              className="flex flex-wrap justify-center mt-8 overflow-y-scroll gap-x-[8.71vw] gap-y-[2.97vh] xl:gap-x-[4.31vw] sm:gap-y-[6vh]"
              id="no-scrollbar"
            >
              {notes.map((note, index) => (
                <>
                  <div
                    role="button"
                    onClick={() => {
                      subNotesPreview
                        ? setSubNotesPreview(false)
                        : setSubNotesPreview(true);
                    }}
                    className="flex bg-[#424242] rounded-[10px] sm:rounded-[20px] h-[20.83vh] w-[30.411vw] sm:w-[20.83vw] sm:h-[30.411vh] hover:opacity-80 px-[2vw] py-[1.8vh] cursor-pointer "
                  >
                    <div className="flex flex-col flex-1 justify-center my-[0.3vh] mx-[1.8vw] sm:my-[1.1vh] sm:mx-[1vw]">
                      <p className="font-semibold text-[2vh] sm:text-[2.9vh] lg:mb-[2vh] mb-[0.5vh] lg:mt-1">
                        {note.title}
                      </p>
                      <p className="flex flex-1 break-all text-[1.3vh] sm:text-[2.1vh] text-justify text-[#CECECE] line-clamp-4">
                        {note.description}
                      </p>
                      <p className="text-[1.3vh] sm:text-[2.1vh] text-[#CECECE]">
                        {note.dateCreated}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              handleNewNotesPreview();
            }}
            className="flex items-center justify-center bg-blue-400 hover:scale-[1.15] duration-300 ease-in-out absolute sm:bottom-[6vh] sm:right-[4vw] bottom-[4vh] right-[10vw] rounded-full w-[4.5vh] sm:w-[7vh] h-[4.5vh] sm:h-[7vh]"
          >
            {plusIcon()}
          </button>
        </div>
        {/* // ! NOTESPREVIEW SECTION */}
        {subNotesPreview && (
          <>
            {" "}
            <div className="flex flex-col w-[100vw] lg:w-[81vw] right-0  absolute z-10 bg-[#323232]  h-[94vh] md:h-[90.5vh]">
              <div className="flex flex-col  flex-1 mx-4 pt-[1vh] lg:px-[3.8vh] px-[3.4vh] gap-y-[1.6vh] sm:gap-y-[2.2vh]">
                <div className="flex flex-center">
                  <button>{backIcon()}</button>
                  <button
                    className="ml-auto"
                    onClick={() => {
                      addNotes();
                    }}
                  >
                    {checkIcon("flex")}
                  </button>
                </div>

                {/* // * TITLE */}
                <div className="flex items-center gap-x-3 mt-1">
                  {/* Input title */}
                  <input
                    className="font-semibold text-[2.5vh] sm:text-[3.4vh] w-[65vw] bg-transparent outline-none"
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                    value={title}
                    type="text"
                    placeholder="Title"
                  />
                </div>
                {/* //* Time Subnotes Created */}
                <p className="text-[1.7vh] sm:text-[2.2vh] mt-1 sm:mt-2 text-slate-300">
                  {/* Date */}
                  {dateClick}
                  {/* Time */}
                  <span className="ml-1">
                    {"|"} {timeClick}
                  </span>
                </p>
                {/* // * SUBNOTES */}
                <div className="flex flex-1 items-start mb-[4vh]">
                  <textarea
                    id="descriptionInput"
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                    className="flex-1 h-full items-start break-all overflow-y-visible outline-none bg-transparent text-[1.4vh] sm:text-[2.1vh]"
                    placeholder="Mulai mengetik..."
                  ></textarea>
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
}
