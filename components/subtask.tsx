import { useState } from "react";

export default function SubTask() {
  // Khusus bagian icon
  const plusIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.5vh] sm:w-[2vh] h-[1.5vh] sm:h-[2vh] m-auto cursor-pointer hover:opacity-100"
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
        className="fill-white opacity-80 w-[1.5vh] sm:w-[2vh] hover:opacity-100"
        viewBox="0 0 512 512"
      >
        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
    );
  };

  const circleCheckIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.5vh] sm:w-[2vh] hover:fill-[#54A1EA]"
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
        className={`fill-white opacity-80 w-[1.5vh] sm:w-[2vh] hover:fill-[${colorHover}]`}
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
        className="fill-white opacity-80 w-[1.5vh] sm:w-[2vh] h-[1.5vh] sm:h-[2vh] m-auto hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
    );
  };

  const calenderIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.5vh] sm:w-[2vh] h-[1.5vh] sm:h-[2vh] m-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z" />
      </svg>
    );
  };

  const crossIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white opacity-80 w-[2vh] sm:w-[3vh] h-[2vh] sm:h-[3vh] m-auto"
        viewBox="0 0 320 512"
      >
        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
      </svg>
    );
  };
  
  // Bagian variabel program
  const [stepDone, setStepDone] = useState(false);
  const [addStepInputShow, setAddStepInputShow] = useState(false);
  const [dueDatePreview, setDueDatePreview] = useState(false);

  return (
    <div className="flex flex-col w-[70vw] absolute right-0 lg:relative h-[94vh] md:h-[90.5vh] z-10 sm:w-[45vw] lg:w-[24.4375vw] bg-[#323232]">
      <div className="flex flex-col flex-1 p-[2.421vh] gap-3">
        <div className="bg-[#424242] overflow-y-scroll" id="no-scrollbar">
          <div className="flex flex-col m-[3vh] gap-2">
            <div className="flex items-center justify-between">
              <p className="text-[2vh] sm:text-[2.9vh] font-semibold">Task 1</p>
              <div>{crossIcon()}</div>
            </div>
            <div
              className="flex flex-col max-h-[53vh] lg:max-h-[51vh] gap-2.5 overflow-y-scroll"
              id="no-scrollbar"
            >
              <div className="flex gap-3">
                {stepDone ? (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(false);
                    }}
                  >
                    {circleCheckIcon()}
                  </div>
                ) : (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(true);
                    }}
                  >
                    {circleIcon("#54A1EA")}
                  </div>
                )}
                <p className="flex-1 text-[1.4vh] sm:text-[2.2vh] border-b-2 break-all">
                  Bangun tidur kuterus mandi tidak lupa menggosok gigi
                </p>
                <div className="m-auto cursor-pointer">{trashIcon()}</div>
              </div>
              <div className="flex gap-3">
                {stepDone ? (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(false);
                    }}
                  >
                    {circleCheckIcon()}
                  </div>
                ) : (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(true);
                    }}
                  >
                    {circleIcon("#54A1EA")}
                  </div>
                )}
                <p className="flex-1 text-[1.4vh] sm:text-[2.2vh] border-b-2 break-all">
                  Bangun tidur kuterus mandi tidak lupa menggosok gigi
                </p>
                <div className="m-auto cursor-pointer">{trashIcon()}</div>
              </div>
              <div className="flex gap-3">
                {stepDone ? (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(false);
                    }}
                  >
                    {circleCheckIcon()}
                  </div>
                ) : (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(true);
                    }}
                  >
                    {circleIcon("#54A1EA")}
                  </div>
                )}
                <p className="flex-1 text-[1.4vh] sm:text-[2.2vh] border-b-2 break-all">
                  Bangun tidur kuterus mandi tidak lupa menggosok gigi
                </p>
                <div className="m-auto cursor-pointer">{trashIcon()}</div>
              </div>
              <div className="flex gap-3">
                {stepDone ? (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(false);
                    }}
                  >
                    {circleCheckIcon()}
                  </div>
                ) : (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(true);
                    }}
                  >
                    {circleIcon("#54A1EA")}
                  </div>
                )}
                <p className="flex-1 text-[1.4vh] sm:text-[2.2vh] border-b-2 break-all">
                  Bangun tidur kuterus mandi tidak lupa menggosok gigi
                </p>
                <div className="m-auto cursor-pointer">{trashIcon()}</div>
              </div>
              <div className="flex gap-3">
                {stepDone ? (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(false);
                    }}
                  >
                    {circleCheckIcon()}
                  </div>
                ) : (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(true);
                    }}
                  >
                    {circleIcon("#54A1EA")}
                  </div>
                )}
                <p className="flex-1 text-[1.4vh] sm:text-[2.2vh] border-b-2 break-all">
                  Bangun tidur kuterus mandi tidak lupa menggosok gigi
                </p>
                <div className="m-auto cursor-pointer">{trashIcon()}</div>
              </div>
              <div className="flex gap-3">
                {stepDone ? (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(false);
                    }}
                  >
                    {circleCheckIcon()}
                  </div>
                ) : (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(true);
                    }}
                  >
                    {circleIcon("#54A1EA")}
                  </div>
                )}
                <p className="flex-1 text-[1.4vh] sm:text-[2.2vh] border-b-2 break-all">
                  Bangun tidur kuterus mandi tidak lupa menggosok gigi
                </p>
                <div className="m-auto cursor-pointer">{trashIcon()}</div>
              </div>
              <div className="flex gap-3">
                {stepDone ? (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(false);
                    }}
                  >
                    {circleCheckIcon()}
                  </div>
                ) : (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(true);
                    }}
                  >
                    {circleIcon("#54A1EA")}
                  </div>
                )}
                <p className="flex-1 text-[1.4vh] sm:text-[2.2vh] border-b-2 break-all">
                  Bangun tidur kuterus mandi tidak lupa menggosok gigi
                </p>
                <div className="m-auto cursor-pointer">{trashIcon()}</div>
              </div>
              <div className="flex gap-3">
                {stepDone ? (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(false);
                    }}
                  >
                    {circleCheckIcon()}
                  </div>
                ) : (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(true);
                    }}
                  >
                    {circleIcon("#54A1EA")}
                  </div>
                )}
                <p className="flex-1 text-[1.4vh] sm:text-[2.2vh] border-b-2 break-all">
                  Bangun tidur kuterus mandi tidak lupa menggosok gigi
                </p>
                <div className="m-auto cursor-pointer">{trashIcon()}</div>
              </div>
              <div className="flex gap-3">
                {stepDone ? (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(false);
                    }}
                  >
                    {circleCheckIcon()}
                  </div>
                ) : (
                  <div
                    className="m-auto"
                    onClick={() => {
                      setStepDone(true);
                    }}
                  >
                    {circleIcon("#54A1EA")}
                  </div>
                )}
                <p className="flex-1 text-[1.4vh] sm:text-[2.2vh] border-b-2 break-all">
                  Bangun tidur kuterus mandi tidak lupa menggosok gigi
                </p>
                <div className="m-auto cursor-pointer">{trashIcon()}</div>
              </div>
            </div>

            <div
              className="mt-1 flex gap-3 hover:bg-[##323232]"
              onClick={() => {
                !addStepInputShow && setAddStepInputShow(true);
              }}
            >
              <div className="m-auto">
                {addStepInputShow ? circleIcon("none") : plusIcon()}
              </div>

              <input
                className="flex-1 outline-none w-[3vw] bg-transparent font-medium text-[1.4vh] sm:text-[2.2vh] placeholder:text-white placeholder:opacity-70"
                placeholder="Add New Step"
              />
              {addStepInputShow && (
                <div
                  className="m-auto cursor-pointer"
                  onClick={() => {
                    setAddStepInputShow(false);
                  }}
                >
                  {checkIcon()}
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="bg-[#424242] px-2.5 py-2 relative flex justify-center hover:bg-[#4b4b4b]"
          onClick={() => {
            dueDatePreview ? setDueDatePreview(false) : setDueDatePreview(true);
          }}
        >
          <div
            className={`${
              dueDatePreview ? "flex" : "hidden"
            } flex-col flex-1 text-sm absolute z-20 -top-[130px] sm:-top-[125px] md:-top-[225px] lg:-top-[145px] xl:-top-[165px] min-w-[40vw] lg:min-w-[12vw] sm:min-w-[30vw] mx-[2vw] bg-[#313131]`}
          >
            <div className="flex flex-col text-center">
              <div className="hover:bg-[#4b4b4b] cursor-pointer px-[1.8vh] sm:px-[2.6vh] py-[1.3vh] md:py-[2vh] text-[1.4vh] sm:text-[2.2vh] ">
                Today
              </div>
              <div className="hover:bg-[#4b4b4b] cursor-pointer px-[1.8vh] sm:px-[2.6vh] py-[1.3vh] md:py-[2vh] text-[1.4vh] sm:text-[2.2vh] ">
                Tomorrow
              </div>
              <div className="hover:bg-[#4b4b4b] cursor-pointer px-[1.8vh] sm:px-[2.6vh] py-[1.3vh] md:py-[2vh] text-[1.4vh] sm:text-[2.2vh] ">
                Set Due Date
              </div>
            </div>
          </div>
          <div className="flex p-[0.5vh] sm:p-[1vh] gap-4 mr-auto">
            <div className="m-auto">{calenderIcon()}</div>
            <p className="flex-1 cursor-pointer text-[1.4vh] sm:text-[2.2vh]">
              Add due date
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-[3vh]">
        <p className="text-[1.4vh] sm:text-[2.2vh] font-medium">Created day</p>
      </div>
    </div>
  );
}
