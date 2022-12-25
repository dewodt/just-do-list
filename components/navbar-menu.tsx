import Image from "next/image";
import { useState } from "react";

export default function NavbarMenu() {
  const [tasks, setTasks] = useState("");

  return (
    <div className="flex flex-col bg-[#3D3C40] w-[20vw] border-r-[1px] border-[#959595] gap-2 rounded-[3px]">
      {/*Profile */}
      <div className="mx-7 mt-6 p-1 bg-[#4D4B52] rounded-[15px] ">
        <div className="flex gap-4 m-2 mx-4">
          <div className="relative m-auto w-[3rem] h-[3rem]">
            <Image
              src={"/sample.jpg"}
              layout="fill"
              alt="gambar"
              className="rounded-full  max-w-full h-auto align-middle border-none"
            ></Image>
          </div>
          <div className="flex flex-col flex-1 m-auto">
            <div className="font-semibold">Name</div>
            <div className="text-xs">Username</div>
          </div>
        </div>
      </div>
      {/* Fixed Menu */}
      <div className="flex flex-col mb-2 mx-10 indent-4 text-[0.87rem] gap-1">
        {/* label Title Task */}
        <label className="text-[0.7rem] font-semibold">TASKS</label>
        {/* Component 1 : Today */}
        <div
          // id="today"
          // onClick={() => setTasks(id)}
          className="hover:bg-[#54A1EA] rounded-[0.5rem] flex mt-1"
        >
          <div className="ml-4 py-1.5">
            <svg
              className="fill-white opacity-80 w-[1rem] m-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>
          </div>
          <div className="flex-1 m-auto text-[0.67rem]">Today</div>
        </div>
        {/* Component 2 : Important */}
        <div className="hover:bg-[#54A1EA] rounded-[0.5rem] flex">
          <div className="ml-4 py-1.5">
            <svg
              className="fill-white opacity-80 w-[1rem] m-auto"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
            </svg>
          </div>
          <div className="flex-1 m-auto text-[0.67rem]">Important</div>
        </div>
        {/* Component 3 : Planned */}
        <div className="hover:bg-[#54A1EA] rounded-[0.5rem] flex">
          <div className="ml-4 py-1.5">
            <svg
              className="fill-white opacity-80 w-[1rem] h-[1rem] m-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
            </svg>
          </div>
          <div className="flex-1 m-auto text-[0.67rem]">Planned</div>
        </div>
        {/* Component 4 : Notes */}
        <div className="hover:bg-[#54A1EA] rounded-[0.5rem] flex">
          <div className="ml-4 py-1.5">
            <svg
              className="fill-white opacity-80 w-[1rem] h-[1rem] m-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
          </div>
          <div className="flex-1 m-auto text-[0.67rem]">Notes</div>
        </div>
      </div>
      <span className="inline-block border-[1px] bg-white mx-auto w-[15vw]" />
      {/* Project */}
      <div className="flex flex-col flex-1 m-2 rounded-[0.8rem] text-[0.87rem] overflow-auto">
        <div>Project1</div>
        <div>Project2</div>
        <div>Project 3</div>
        <div>Project 3</div>
        <div>Project 3</div>
        <div>Project 3</div>
        <div>Project 3</div>
        <div>Project 3</div>
        <div>Project 3</div>
        <div>Project 3</div>
        <div>Project1</div>
        <div>Project2</div>
        <div>Project 3</div>
        {/* Making navbar on here*/}
      </div>
      <span className="inline-block border-[1px] bg-white mx-auto w-[15vw]" />
      {/* Addition Menu */}
      <div className="flex flex-col mx-4 my-2 mb-6 text-[0.87rem] gap-4">
        <div className="flex mx-8">
          <div>
            <svg
              className="fill-white opacity-80 w-[1.1rem]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" />
            </svg>
          </div>
          <div className="ml-4 text-[0.8rem]">Settings</div>
        </div>
        <div className="flex mx-8">
          <div>
            <svg
              className="fill-white opacity-80 w-[1.1rem]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z" />
            </svg>
          </div>
          <div className="ml-4 text-[0.8rem]">Help</div>
        </div>
      </div>
    </div>
  );
}
