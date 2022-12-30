import { useState } from "react";

export default function SubTask() {
  const circleCheckIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[0.92rem] hover:fill-[#54A1EA]"
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
        className={`fill-white opacity-80 w-[0.92rem] hover:fill-[${colorHover}]`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
      </svg>
    );
  };

  const plusIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[0.92rem] h-[0.92rem] m-auto cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>
    );
  };

  const calenderIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1rem] h-[1rem] m-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z" />
      </svg>
    );
  };

  const trashIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1rem] h-[1rem] m-auto hover:opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
    );
  };

  const checkIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white opacity-80 w-[1rem] "
        viewBox="0 0 512 512"
      >
        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
    );
  };

  const [stepDone, setStepDone] = useState(false);
  const [addStepInputShow, setAddStepInputShow] = useState(false);
  const [dueDatePreview, setDueDatePreview] = useState(false);

  return (
    <div className="flex flex-col w-[23.4375vw] bg-[#323232] ">
      <div className="flex flex-col flex-1 mx-[2.6vw] mt-[2.6vw] gap-4">
        <div className="bg-[#424242]  overflow-y-scroll">
          <div className="flex flex-col m-[1.4vw] gap-2">
            <div className="text-lg font-semibold">Task 1</div>
            <div className="flex flex-col gap-2 ">
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
                <div className="flex-1 border-b-2 break-all">Step1</div>
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
                className="flex-1 outline-none w-[3vw] bg-transparent font-medium placeholder:text-white placeholder:opacity-70"
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
        <div className="bg-[#424242] hover:bg-zinc-600" onClick={()=>{dueDatePreview?setDueDatePreview(false):setDueDatePreview(true)}}>
          <div className="flex p-[0.78vw] gap-4 ">
            <div className="m-auto">{calenderIcon()}</div>
            <div className="flex-1 cursor-pointer">Add due date </div>
          </div>
        </div>
        <div className={`${dueDatePreview?'flex':'hidden'} flex-col text-sm mx-[2vw] bg-[#424242] `}>
          <div className="flex flex-col text-center">
            <div className="hover:bg-zinc-600 cursor-pointer p-2">Today</div>
            <div className="hover:bg-zinc-600 cursor-pointer p-2">Tomorrow</div>
            <div className="hover:bg-zinc-600 cursor-pointer p-2">Set Due Date</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-[1.2vw]">
        <div className="flex gap-[2vw]">
          <div className="m-auto">Created day</div>
        </div>
      </div>
    </div>
  );
}
