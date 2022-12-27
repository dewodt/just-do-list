export default function Tasks() {
  return (
    <div className="flex flex-col mb-2 mx-10 indent-4 text-[0.87rem] gap-1">
      {/* label Title Task */}
      <label className="text-[0.7rem] font-semibold">TASKS</label>
      {/* Component 1 : Today */}
      <div
        // id="today"
        // onClick={() => setTasks(id)}
        className="hover:bg-[#54A1EA] rounded-[0.5rem] flex mt-1 cursor-pointer"
      >
        <div className="ml-4 py-1.5 ">
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
      <div className="hover:bg-[#54A1EA] rounded-[0.5rem] flex cursor-pointer">
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
      <div className="hover:bg-[#54A1EA] rounded-[0.5rem] flex cursor-pointer">
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
        <div className="flex-1 m-auto text-[0.67rem] cursor-pointer">Notes</div>
      </div>
    </div>
  );
}
