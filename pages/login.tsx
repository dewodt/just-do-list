import Image from "next/image";
import Link from "next/link";
import Logo from "../components/logo";
import { useState } from "react";

export default function Login() {
  const [loginPage, setLoginPage] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function checked(tes: boolean) {
    tes ? setLoginPage(false) : setLoginPage(true);
  }

  return (
    <div className="flex">
      <Logo />
      <div className="flex flex-col gap-4 my-auto ">
        <div className="font-bold text-2xl text-center">Just Do List!</div>
        <div className="flex text-center justify-center">
          <nav className="flex font-semibold text-sm justify-center gap-4">
              <Link
                href="/"
                onClick={() => setLoginPage(true)}
                className="border-b-2 hover:text-[#3182CE] hover:border-[#3182CE]"
              >
                Log In
              </Link>
              <Link
                href="/"
                onClick={() => setLoginPage(false)}
                className="border-b-2 hover:text-[#3182CE] hover:border-[#3182CE]"
              >
                Sign Up
              </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-4 ">
          {!loginPage && <input type="text" placeholder="Name"></input>}
          <input type="text" placeholder="Username" className="caret-stone-200s"></input>
          <input type="password" placeholder="Password"></input>
        </div>
        <button className="bg-[#54A1EA] hover:bg-[#1E4F82] text-white font-bold py-2 px-2 rounded-xl">
          {loginPage ? "Log In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
