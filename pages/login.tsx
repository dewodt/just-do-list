import Image from "next/image";
import Link from "next/link";
import Logo from "../components/logo";
import { useState } from "react";

export default function Login() {
  const [loginPage, setLoginPage] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function handleChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }
  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
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
                  value={name}
                  onChange={handleChangeName}
                  className="indent-5 text-black text-absolute text-left-5 text-xs py-2 rounded-[6px] bg-white placeholder:text-gray-600"
                  ></input>
                  )}
              <input
                type="text"
                placeholder="Username"
                value={username}  
                onChange={handleChangeUsername}
                className="indent-5 text-black text-absolute text-left-5 text-xs py-2 rounded-[6px] bg-white placeholder:text-gray-600"
                ></input>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
                className="indent-5 text-black text-absolute text-left-5 text-xs py-2 rounded-[6px] bg-white placeholder:text-gray-600"
                ></input>
            </div>
          </form>
          <div className="text-center">
            <button
              disabled={(name.length > 0) || (username.length > 0) || (password.length > 0 )? false : true}
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
