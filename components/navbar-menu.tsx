import ProfileMenu from "./profile_menu";
import Fitur from "./fitur";
import Projects from "./projects";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavbarMenu() {
  return (
    <div className="hidden lg:flex flex-col bg-[#3D3C40] w-[19vw] border-r-[1px] border-[#959595] gap-2 rounded-[3px]">
      <ProfileMenu />
      <span className="inline-block border-[0.6px] opacity-80 bg-white mx-auto w-[15vw] my-1" />
      <Fitur />
      <span className="inline-block opacity-80 border-[0.6px] bg-white mx-auto w-[15vw]" />
      <Projects />
      <span className="inline-block opacity-80 border-[0.6px] bg-white mx-auto w-[15vw]" />
      {/* Addition Menu */}
      <Link href="/about">
        <div className={`bg-[${useRouter().pathname === '/about' && '#464449'}] hover:bg-[#4D4B52] rounded-[0.5rem] py-2 flex flex-col mx-8 mt-2 mb-6 text-[0.87rem] gap-4`} role="button">
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
            <div className="ml-4 text-[0.8rem]">About</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
