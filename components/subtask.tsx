export default function SubTask() {
  const circleCheckIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[0.92rem]"
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
        className="fill-white opacity-80 w-[0.92rem]"
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
        className="fill-white opacity-80 w-[1rem] h-[1rem] m-auto"
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

  return (
    <div className="w-[23.475vw] bg-[#323232]">
      <div className="flex flex-col flex-1 m-[2.6525vw] gap-4">
        <div className="bg-[#424242]">
          <div className="flex flex-col m-[1.4vw] gap-2">
            <div className="text-lg font-semibold">Task 1</div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <div className="m-auto">{circleCheckIcon()}</div>
                <div className="flex-1 mr-2 border-b-2">subtask</div>
              </div>
              <div className="flex gap-4">
                <div className="m-auto">{circleCheckIcon()}</div>
                <div className="flex-1 mr-2 border-b-2">subtask</div>
              </div>
              <div className="flex gap-4">
                <div className="m-auto">{circleCheckIcon()}</div>
                <div className="flex-1 mr-2 border-b-2">subtask</div>
              </div>
            </div>

            <div className="mt-1 flex gap-2 font-semibold">
              <div className="m-auto">{plusIcon()}</div>
              <div className="flex-1">New Sub Task</div>
            </div>
          </div>
        </div>
        <div className="bg-[#424242] ">
          <div className="flex p-[0.78vw] gap-4 ">
            <div className="m-auto">{calenderIcon()}</div>
            <div className="flex-1">Add due date </div>
          </div>
        </div>
      </div>
    </div>
  );
}
