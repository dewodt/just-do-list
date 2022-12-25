import Image from "next/image";

export default function NavbarTitle() {
  return (
    <div className="flex justify-center gap-24 bg-[#3E3E3E] border-b-[1px] border-[#959595]">
      <div className="flex gap-3 ml-8 my-1">
        <div className="relative m-auto w-[2.75rem] h-[2.75rem]">
          <Image
            src={"/logo-app.png"}
            layout="fill"
            alt="gambar"
            className="rounded-full  max-w-full h-auto align-middle border-none"
          ></Image>
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-bold text-[1.05rem] font-['Montserrat']">
            Just Do List!
          </div>
          <div className="text-[0.55rem] text-[#908787]">
            by our team project
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center  my-1">
        <div className="py-[0.15rem] rounded-[15px] bg-white flex flex-1 ">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/fontawesome.min.css" integrity="sha512-giQeaPns4lQTBMRpOOHsYnGw1tGVzbAIHUyHRgn7+6FmiEgGGjaG0T2LZJmAPMzRCl+Cug0ItQ2xDZpTmEc+CQ==" crossOrigin="anonymous"/>
          <input
            placeholder="Search ..."
            className="font-[FontAwesome,Inter] w-[40vw] text-black text-xs m-auto text-center bg-transparent outline-none placeholder:text-gray-600 placeholder:text-[0.7rem]"
          ></input>
          <div className="w-[1.2rem] relative right-[3vw]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
          </div>
        </div>
      </div>
      <div className="flex mr-8 my-1">
        <div className="relative m-auto w-[2.75rem] h-[2.75rem]">
          <Image
            src={"/logo-app.png"}
            layout="fill"
            alt="gambar"
            className="rounded-full  max-w-full h-auto align-middle border-none"
          ></Image>
        </div>
        <div className="relative m-auto w-[2.75rem] h-[2.75rem]">
          <Image
            src={"/logo-app.png"}
            layout="fill"
            alt="gambar"
            className="rounded-full  max-w-full h-auto align-middle border-none"
          ></Image>
        </div>
        <div className="relative m-auto w-[2.75rem] h-[2.75rem]">
          <Image
            src={"/logo-app.png"}
            layout="fill"
            alt="gambar"
            className="rounded-full  max-w-full h-auto align-middle border-none"
          ></Image>
        </div>
      </div>
    </div>
  );
}
