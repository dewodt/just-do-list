import Image from "next/image";
import Link from "next/link";
import Logo from "../components/logo";
import { useState } from "react";

export default function Login() {
  const [loginPage, setLoginPage] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <span
        id="circle"
        className="inline-block bg-[#77E0FC] rotate-[180deg] absolute left-0 top-0"
      />
      <span
        id="circle"
        className="inline-block bg-[#ffffff] absolute right-0 bottom-0"
      />
      <div className="flex w-[50vw] gap-20">
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
                <Link
                  href="/"
                  onClick={() => {
                    setLoginPage(true);
                    setName("");
                    setUsername("");
                    setPassword("");
                  }}
                >
                  Log In
                </Link>
              </div>
              <div
                className={`w-[7.5vw] pb-2 border-b-[1px] hover:text-[#3182CE] hover:border-b-[#3182CE] ${
                  !loginPage && "text-[#3182CE] border-b-[#3182CE]"
                }`}
              >
                <Link
                  href="/"
                  onClick={() => {
                    setLoginPage(false);
                    setName("");
                    setUsername("");
                    setPassword("");
                  }}
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
          <form>
            <div className="flex flex-col gap-5 ">
              {!loginPage && (
                <div className="py-2 rounded-[10px] bg-white flex flex-col ">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-black text-xs bg-transparent outline-none ml-6 mr-6 placeholder:text-gray-600"
                  ></input>
                </div>
              )}
              <div className="py-2 rounded-[10px] bg-white flex flex-col ">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="text-black text-xs bg-transparent outline-none ml-6 mr-6 placeholder:text-gray-600"
                ></input>
              </div>
              <div className="py-2 rounded-[10px] bg-white flex flex-col ">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-black text-xs bg-transparent outline-none ml-6 mr-6 placeholder:text-gray-600"
                ></input>
              </div>
            </div>
          </form>
          <div className="text-center">
            <button
              disabled={
                loginPage
                  ? !username || !password
                  : !username || !password || !name
              }
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
