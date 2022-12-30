import Layout from "../components/layout";

import React, { useEffect, useState } from "react";
import SubTask from "../components/subtask";

export default function Today() {
  const starIcon = () => {
    return (
      <svg
        className="fill-white  w-[1rem] m-auto opacity-80 hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
      </svg>
    );
  };
  const plusIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1rem] h-[1rem] m-auto"
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
        className="fill-white opacity-80 w-[1rem]"
        viewBox="0 0 512 512"
      >
        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
    );
  };

  const circleCheckIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1rem]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
      </svg>
    );
  };

  const circleIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1rem]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
      </svg>
    );
  };

  const [dateToday, setDateToday] = useState(new Date());
  const [addStatus, setaddStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateToday(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Layout>
        <div className="flex flex-1">
          <div className="flex flex-col flex-1 m-[2.4vw] gap-1">
            <div className="font-semibold text-2xl">Today</div>
            <div className="font-semibold">
              {dateToday.toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <div className="flex flex-col flex-1 my-4 gap-3">
              <div className="bg-[#424242] flex p-[0.7vw]">
                <div className="flex flex-1 mx-3 gap-4">
                  <div className="m-auto">{circleIcon()}</div>
                  <div className="flex-1">list1</div>
                  <div className="m-auto">{starIcon()}</div>
                </div>
              </div>
            </div>
            
            <div>
              <div
                className="bg-[#424242] flex p-[0.7vw]"
                onClick={() => {
                  addStatus && setaddStatus(false);
                }}
              >
                <div className="flex flex-1 mx-3 gap-4">
                  {addStatus ? (
                    <div className="m-auto">{plusIcon()}</div>
                  ) : (
                    <div className="m-auto">{circleIcon()}</div>
                  )}
                  <input
                    className="flex-1 outline-none bg-transparent placeholder:text-white placeholder:opacity-70"
                    placeholder="New Task"
                  />
                  {!addStatus && (
                    <div
                      className="m-auto cursor-pointer"
                      onClick={() => {
                        setaddStatus(true);
                      }}
                    >
                      {checkIcon()}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubTask />
      </Layout>
    </>
  );
}
