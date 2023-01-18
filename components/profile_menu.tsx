import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

interface typeUserData {
  username: string;
  name: string;
}

export default function ProfileMenu({ userData }: { userData: typeUserData }) {
  const [dropDownProfile, setDropDownProfile] = useState(false);

  function handleLogout() {
    axios.post("http://localhost:3000/api/logout", {})
      .then(() => {
        window.location.href = "http://localhost:3000/";
      });
  }

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
        <div className="flex mx-4 mb-1">
          <div className="relative m-auto w-[3rem] h-[3rem] mr-3 my-2">
            <Image
              src={"/sample.jpg"}
              layout="fill"
              alt="gambar"
              className="rounded-full  max-w-full h-auto align-middle border-none"
            />
          </div>
          <div className="flex flex-col flex-1 m-auto">
            <div className="font-semibold text-[2.2vh] 2xl:text-[2.5vh]">{userData.name}</div>
            <div className="text-[1.7vh] 2xl:text-[1.9vh]">{userData.username}</div>
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
              />
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
            <div className="py-1.5 text-xs text-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 rounded-[8px]">
              <Link
                href="/"
                className="block text-[1.7vh] 2xl:text-[2vh] px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleLogout}
              >
                Log Out
              </Link>
            </div>
          </div>
      </div>
    </>
  );
}
