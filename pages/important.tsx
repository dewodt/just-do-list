import Layout from "../components/layout";
import React, { useState } from "react";
import SubTask from "../components/subtask";
import getUserData from "../lib/getUserData";

export default function Important({ data } : any) {
  // Khusus bagian icon
  const homeIcon = () => {
    return (
      <svg
        className="fill-white w-[2.2vh] sm:w-[3.5vh] m-auto opacity-80 "
        viewBox="0 0 576 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
      </svg>
    );
  };
  const starLineIcon = () => {
    return (
      <svg
        className="fill-white w-[1.8vh] sm:w-[2.45vh] m-auto opacity-80 hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
      </svg>
    );
  };
  const starFullIcon = () => {
    return (
      <svg
        className="fill-white  w-[1.8vh] sm:w-[2.45vh] m-auto opacity-80 hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg>
    );
  };
  const plusIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] h-[1.8vh] sm:h-[2.45vh] m-auto cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>
    );
  };
  const checkIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] hover:opacity-100"
        viewBox="0 0 512 512"
      >
        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
    );
  };

  const circleCheckIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
      </svg>
    );
  };

  const circleIcon = (colorHover: string) => {
    return (
      <svg
        className={`fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] hover:fill-[${colorHover}]`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
      </svg>
    );
  };

  const trashIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] h-[1.8vh] sm:h-[2.45vh] m-auto hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
    );
  };

  // Khusus bagian variabel kerja
  const [addTaskInputShow, setAddTaskInputShow] = useState(false);
  const [taskDone, setTaskDone] = useState(false);
  const [important, setImportant] = useState(false);
  const [subTaskPreview, setSubTaskPreview] = useState(true);
  const [dropDownFinished, setDropDownFinished] = useState(false);

  return (
    <>
      <Layout name={data.name} username={data.username}>
        <div className="flex flex-1">
          <div className="flex flex-col flex-1 py-[2vh] lg:p-[3.8vh] px-[3.4vh] gap-1">
            <div className="flex  items-center gap-x-3">
              <span>{homeIcon()}</span>
              <p className="font-semibold text-[2.5vh] sm:text-[3.8vh]">
                Important{" "}
              </p>
            </div>

            <div
              className="flex flex-1 flex-col my-3 overflow-y-scroll"
              id="no-scrollbar"
            >
              <div className="flex bg-[#424242] hover:opacity-80 p-[1.4vh] cursor-pointer mb-[1.47vh] ">
                <div className="flex flex-1 items-center justify-center mx-[1vw] gap-3">
                  {taskDone ? (
                    <span
                      onClick={() => {
                        setTaskDone(false);
                      }}
                    >
                      {circleCheckIcon()}
                    </span>
                  ) : (
                    <span
                      onClick={() => {
                        setTaskDone(true);
                      }}
                    >
                      {circleIcon("#54A1EA")}
                    </span>
                  )}
                  <p
                    className="flex break-all flex-1 text-[1.5vh] sm:text-[2.25vh] text-justify"
                    onClick={() => {
                      subTaskPreview
                        ? setSubTaskPreview(false)
                        : setSubTaskPreview(true);
                    }}
                  >
                    list1asdasdasdahoaisjdjaosjdjasuin hassj hdkja dkjhas djkha
                    kjshd si dias
                    ddainduniocauosndoiuzonisunioufousiyfbiurfysbiuodyuiboybiuuoiassybuidybuiasyduiyuiyasbuidbyasuidyb
                  </p>
                  {important ? (
                    <div
                      onClick={() => {
                        setImportant(false);
                      }}
                    >
                      {starLineIcon()}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setImportant(true);
                      }}
                    >
                      {starFullIcon()}
                    </button>
                  )}
                  <button>{trashIcon()}</button>
                </div>
              </div>
              <div className="flex bg-[#424242] hover:opacity-80 p-[1.4vh] cursor-pointer mb-[1.47vh] ">
                <div className="flex flex-1 items-center justify-center mx-[1vw] gap-3">
                  {taskDone ? (
                    <span
                      onClick={() => {
                        setTaskDone(false);
                      }}
                    >
                      {circleCheckIcon()}
                    </span>
                  ) : (
                    <span
                      onClick={() => {
                        setTaskDone(true);
                      }}
                    >
                      {circleIcon("#54A1EA")}
                    </span>
                  )}
                  <p
                    className="flex break-all flex-1 text-[1.5vh] sm:text-[2.25vh] text-justify"
                    onClick={() => {
                      subTaskPreview
                        ? setSubTaskPreview(false)
                        : setSubTaskPreview(true);
                    }}
                  >
                    list1asdasdasdahoaisjdjaosjdjasuin hassj hdkja dkjhas djkha
                    kjshd si dias
                    ddainduniocauosndoiuzonisunioufousiyfbiurfysbiuodyuiboybiuuoiassybuidybuiasyduiyuiyasbuidbyasuidyb
                  </p>
                  {important ? (
                    <div
                      onClick={() => {
                        setImportant(false);
                      }}
                    >
                      {starLineIcon()}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setImportant(true);
                      }}
                    >
                      {starFullIcon()}
                    </button>
                  )}
                  <button>{trashIcon()}</button>
                </div>
              </div>
              <div className="flex bg-[#424242] hover:opacity-80 p-[1.4vh] cursor-pointer mb-[1.47vh] ">
                <div className="flex flex-1 items-center justify-center mx-[1vw] gap-3">
                  {taskDone ? (
                    <span
                      onClick={() => {
                        setTaskDone(false);
                      }}
                    >
                      {circleCheckIcon()}
                    </span>
                  ) : (
                    <span
                      onClick={() => {
                        setTaskDone(true);
                      }}
                    >
                      {circleIcon("#54A1EA")}
                    </span>
                  )}
                  <p
                    className="flex break-all flex-1 text-[1.5vh] sm:text-[2.25vh] text-justify"
                    onClick={() => {
                      subTaskPreview
                        ? setSubTaskPreview(false)
                        : setSubTaskPreview(true);
                    }}
                  >
                    list1asdasdasdahoaisjdjaosjdjasuin hassj hdkja dkjhas djkha
                    kjshd si dias
                    ddainduniocauosndoiuzonisunioufousiyfbiurfysbiuodyuiboybiuuoiassybuidybuiasyduiyuiyasbuidbyasuidyb
                  </p>
                  {important ? (
                    <div
                      onClick={() => {
                        setImportant(false);
                      }}
                    >
                      {starLineIcon()}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setImportant(true);
                      }}
                    >
                      {starFullIcon()}
                    </button>
                  )}
                  <button>{trashIcon()}</button>
                </div>
              </div>
              <div
                onClick={() => {
                  dropDownFinished
                    ? setDropDownFinished(false)
                    : setDropDownFinished(true);
                }}
                className="flex items-center gap-1 bg-[#424242] hover:opacity-80 w-fit pl-[0.6vw] pr-[1vw] py-[0.3vh] cursor-pointer mb-[1.47vh]"
              >
                <span>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      !dropDownFinished && "-rotate-90"
                    }`}
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <p className="text-[1.6vh] font-medium sm:text-[2.25vh]">
                  Finished
                </p>
              </div>
            </div>

            <div
              className="bg-[#424242] opacity-100 flex p-[1.5vh] hover:opacity-80"
              onClick={() => {
                !addTaskInputShow && setAddTaskInputShow(true);
              }}
            >
              <div className="flex flex-1 px-[1.5vw] gap-4 ">
                <div className="m-auto">
                  {addTaskInputShow ? circleIcon("none") : plusIcon()}
                </div>
                <input
                  className="flex-1 outline-none w-[8vw] font-medium text-[1.5vh] sm:text-[2.2vh] bg-transparent placeholder:text-white placeholder:opacity-70"
                  placeholder="Add New Task"
                />
                {addTaskInputShow && (
                  <div
                    className="m-auto cursor-pointer"
                    onClick={() => {
                      setAddTaskInputShow(false);
                    }}
                  >
                    {checkIcon()}
                  </div>
                )}
              </div>
            </div>
          </div>
          {subTaskPreview && <SubTask />}
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const username = ctx.req.headers.cookie.split("=")[0];
  const data = await getUserData(username);
  return {
    props: { data }
  }
}