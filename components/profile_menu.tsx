import Image from "next/image";
import { useState } from "react";

export default function ProfileMenu() {
  const [dropDownProfile, setDropDownProfile] = useState(false);
  return (
    <>
      <div
        className="mx-7 mt-6 bg-[#464449] hover:bg-[#4D4B52] rounded-[15px] "
        role="button"
        onClick={() => {
          dropDownProfile
            ? setDropDownProfile(false)
            : setDropDownProfile(true);
        }}
      >
        <div className="flex m-2 mx-4">
          <div className="relative m-auto w-[3rem] h-[3rem] mr-3">
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
          <div className="m-auto">
            <svg
              className={`w-4 h-4 ${!dropDownProfile && "rotate-90"}`}
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        {/* Droplist */}
          <div
            //  {/*Ini gabisa mgentot */}
            className={`${
              dropDownProfile ? "block" : "hidden"
            } z-10 w-fill rounded m-auto mb-2 text-center mx-4`}
          >
            {/* <div className="py-1.5 text-xs text-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 rounded-[8px]">
              <a
                href="/"
                className="block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Profile
              </a>
            </div> */}
            <div className="py-1.5 text-xs text-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 rounded-[8px]">
              <a
                href="/"
                className="block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </div>
            <div className="py-1.5 text-xs text-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 rounded-[8px]">
              <a
                href="/"
                className="block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Log Out
              </a>
            </div>
          </div>
        
      </div>
    </>
  );
}
