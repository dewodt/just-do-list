import Image from "next/image";

export default function NavbarMenu() {
  return (
    <div className="flex flex-col bg-[#3D3C40] w-[20vw] border-r-[1px] border-[#959595] gap-2 rounded-[3px]">
      <div className="m-2 mx-3 mb-0 p-1 bg-[#4D4B52] rounded-[15px] ">
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
      <div className="flex flex-col m-2 indent-4 text-[0.87rem] gap-1">
        <div className="hover:bg-[#54A1EA] py-1 rounded-[0.5rem]">Today</div>
        <div className="hover:bg-[#54A1EA] py-1 rounded-[0.5rem]">
          Important
        </div>
        <div className="hover:bg-[#54A1EA] py-1 rounded-[0.5rem]">Planned</div>
        <div className="hover:bg-[#54A1EA] py-1 rounded-[0.5rem]">Notes</div>
      </div>
      <span className="inline-block border-[1px] bg-white mx-auto w-[17vw]" />
      <div className="flex flex-col flex-1 m-2 rounded-[0.8rem] text-[0.87rem]">
        {/* <div>Project1</div>
        <div>Project2</div>
        <div>Project 3</div> */}
        {/* Making navbar on here*/}
      </div>
      <span className="inline-block border-[1px] bg-white mx-auto w-[17vw]" />
      <div className="flex flex-col mx-4 my-2 mb-6 indent-6 text-[0.87rem]">
        <div>Settings</div>
        <div>Help</div>
      </div>
    </div>
  );
}
