import Image from "next/image";
import Link from "next/link";
import Logo from "../components/logo";
import { useState } from "react";

export default function Login() {
  const [loginPage, setLoginPage] = useState(true);
  const [value, setValue] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(event:string){
    setValue(event)
  }

  return (
    <>
      <span
        id="circle"
        className="inline-block bg-[#77E0FC] rotate-[180deg] absolute left-0 top-0"
      ></span>
      <span
        id="circle"
        className="inline-block bg-[#ffffff] absolute right-0 bottom-0"
      ></span>
      <div className="flex w-[50vw] ">
        <Logo />
        <div className="flex flex-col gap-8 m-auto w-[15vw]">
          <div className="font-bold text-[2.1rem] text-center font-['Montserrat']">
            Just Do List!
          </div>
          <div className="flex text-center justify-center ">
            <nav className="flex font-[550] text-[1.17rem] justify-center">
              <div
                className={`w-[7.5vw] pb-2 border-b-[1px] hover:text-[#3182CE] hover:border-b-[#3182CE] ${
                  loginPage && "text-[#3182CE] border-b-[#3182CE]"
                }`}
              >
                <Link href="/" onClick={() => setLoginPage(true)}>
                  Log In
                </Link>
              </div>
              <div
                className={`w-[7.5vw] pb-2 border-b-[1px] hover:text-[#3182CE] hover:border-b-[#3182CE] ${
                  !loginPage && "text-[#3182CE] border-b-[#3182CE]"
                }`}
              >
                <Link href="/" onClick={() => setLoginPage(false)}>
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
          <form>
            <div className="flex flex-col gap-5 ">
              {!loginPage && (
                <input
                  type="text"
                  placeholder="Name"
                  className="indent-5 text-black text-absolute text-left-5 text-xs py-2 rounded-[6px] bg-white placeholder:text-gray-600"
                ></input>
              )}
              <input
                type="text"
                placeholder="Username"
                className="indent-5 text-black text-absolute text-left-5 text-xs py-2 rounded-[6px] bg-white placeholder:text-gray-600"
              ></input>
              <input
                type="password"
                placeholder="Password"
                className="indent-5 text-black text-absolute text-left-5 text-xs py-2 rounded-[6px] bg-white placeholder:text-gray-600"
              ></input>
            </div>
          </form>
          <div className="text-center">
            <button
              disabled={false}
              className="bg-[#54A1EA] hover:bg-[#1E4F82] text-white font-[500] text-s py-[0.4rem] rounded-[10px] disabled:bg-[#a3edf7] w-[12vw]"
            >
              {loginPage ? "Log In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
