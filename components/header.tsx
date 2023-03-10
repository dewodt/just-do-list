import Image from "next/image";
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Header({ search, handleResetSearch, handleSearch }: { search: string, handleResetSearch: any, handleSearch: any }) {
  return (
    <header className="flex items-center justify-between bg-[#3E3E3E] border-b-[1px] border-[#959595] h-[6vh] md:h-[9.5vh] w-full">
      <div className="flex w-[19vw] justify-center items-center">
        <div className="flex relative w-[6vh] sm:w-[8vh] items-center ml-1">
          <Image
            src={"/logo-app.png"}
            width="2000"
            height="2000"
            alt="gambar"
            className="rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
        <div className=" hidden lg:flex lg:flex-col justify-center">
          <p className={`font-bold text-[2.6vh] ${montserrat.className} whitespace-nowrap`}>
            Just Do List
          </p>
          <p className="text-[1.5vh] text-[#908787]">A to do list app</p>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center px-5 md:px-10 ">
        <div className="py-[0.1vh] md:py-[0.4vh] relative px-[5vw] rounded-full bg-white opacity-70 flex w-full">
          <input
            placeholder="Search ..."
            className="w-[20vh] sm:w-[40vw] text-black text-[1.3vh] sm:text-[2vh] m-auto text-center bg-transparent outline-none placeholder:text-gray-600"
            onChange={(event) => handleSearch(event.target.value)}
            value={search}
          />
          {
            !search ? (
              <button className="w-[1.3vh] sm:w-[2vh]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                </svg>
              </button>
            ) : (
              <button className="w-[1.1vh] sm:w-[1.7vh]" onClick={handleResetSearch}>
                <svg className="fill-[#1A1C2B]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
                </svg>
              </button>
            )
          }
        </div>
      </div>
    </header>
  );
}
