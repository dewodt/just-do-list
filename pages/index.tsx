import { Montserrat } from "@next/font/google";
import PageHead from "../components/pagehead";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "public/logo-app.png";
import axios from 'axios';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  const [loginPage, setLoginPage] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [popUp, setPopUp] = useState("");
  const [popUpSuccess, setPopUpSuccess] = useState();

  function handleLoginTab() {
    setLoginPage(true);
    setName("");
    setUsername("");
    setPassword("");
    setPopUp("")
  }

  function handleSignupTab() {
    setLoginPage(false);
    setName("");
    setUsername("");
    setPassword("");
    setPopUp("");
  }

  function handleLogin() {
    axios.post(`/api/login`, {
      username: username,
      password: password,
    })
      .then(res => {
        setPopUp(res.data.msg);
        setPopUpSuccess(res.data.success)
        if (res.data.success) {
          window.location.href = "/tasks"
        }
      })
  }

  function handleSignUp() {
    axios.post("/api/signup", {
      name: name,
      username: username,
      password: password,
    })
      .then(res => {
        setPopUp(res.data.msg);
        setPopUpSuccess(res.data.success);
        if (res.data.success) {
          setName("")
          setUsername("")
          setPassword("")
          setLoginPage(true);
        }
      })
  }

  return (
    <>
      <PageHead title="Login / Signup" />
      <div className="flex flex-col justify-center py-[8vh] w-[100vw] min-h-[100vh] items-center sm:flex-row">
        <Image className="w-[50vw] sm:w-[35vw] lg:w-[25vw] xl:w-[20vw] sm:mr-[4vw]" src={Logo} alt="Logo Just Do List" />
        <div className="flex flex-col gap-y-4 lg:gap-y-8 w-[60vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw]">
          <p className={`font-bold text-[2rem] text-center ${montserrat.className}`}>Just Do List!</p>
          <nav className="flex text-center font-[550] text-[1.17rem] justify-center">
            <div className={`w-[50%] pb-2 border-b-[2px] ${loginPage && "text-[#3182CE] border-b-[#3182CE]"}`}>
              <Link className="hover:text-[#3182CE]" href="/" onClick={handleLoginTab}>Log In</Link>
            </div>
            <div className={`w-[50%] pb-2 border-b-[2px] ${!loginPage && "text-[#3182CE] border-b-[#3182CE]"}`}>
              <Link className="hover:text-[#3182CE]" href="/" onClick={handleSignupTab}>Sign Up</Link>
            </div>
          </nav>
          <form>
            <div className="flex flex-col gap-y-4 lg:gap-y-5">
              {!loginPage && (
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-[100%] text-black text-xs py-2.5 px-6 rounded-[10px] bg-white outline-none placeholder:text-gray-600"
                  />
              )}
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-[100%] text-black text-xs py-2.5 px-6 rounded-[10px] bg-white outline-none placeholder:text-gray-600"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[100%] text-black text-xs py-2.5 px-6 rounded-[10px] bg-white outline-none placeholder:text-gray-600"
              />
            </div>
          </form>
          <Link href="">
            <button
              disabled={
                loginPage
                  ? !username || !password
                  : !username || !password || !name
              }
              className="w-[100%] rounded-[10px] hover:bg-[#1E4F82] text-white font-[500] py-[0.4rem] bg-[#54A1EA] disabled:bg-[#a3edf7]"
              onClick={loginPage ? handleLogin : handleSignUp}
            >
              {loginPage ? "Log In" : "Sign Up"}
            </button>
          </Link>
          <p className={`${popUpSuccess ? "text-green-600" : "text-red-600"} text-sm font-bold text-center sm:text-base`}>{popUp}</p>
        </div>
      </div>
    </>
  );
}
