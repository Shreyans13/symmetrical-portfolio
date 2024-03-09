import { useEffect } from "react";
import "./Header.scss";
import { add3DTextAnimation } from "../../utils/util.ts";

function Header() {

  useEffect(() => {
    add3DTextAnimation()
  }, [])




  return (
    <>
      <header className="z-30 flex h-24 w-full items-center sm:h-32">
        <div className="container mx-auto flex items-center justify-between px-6 lg:justify-center">
          <div className="flex items-center text-3xl font-black uppercase">
            <svg
              width="25"
              height="25"
              viewBox="0 0 1792 1792"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"></path>
            </svg>
            <span className="ml-3 mt-1 text-sm lg:hidden">
              SHREYANS.JAIN.13@GMAIL.COM
            </span>
          </div>
          <div className="flex items-center">
            <nav className="font-sen hidden items-center text-xl uppercase  lg:flex">
              <a
                href="#"
                className="flex px-6 py-4 font-JosefinSlab font-black uppercase"
              >
                Home
              </a>
              <a
                href="#"
                className="flex px-6 py-4 font-JosefinSlab font-black uppercase"
              >
                Skills
              </a>
              <p id="anim-3dText" className="px-8 font-FranchiseFree text-6xl uppercase ">
                {" "}
                shreyans jain{" "}
              </p>
              <a
                href="#"
                className="flex px-6 py-4 font-JosefinSlab font-black uppercase"
              >
                Project
              </a>
              <a
                href="#"
                className="flex px-6 py-4 font-JosefinSlab font-black uppercase"
              >
                Resume
              </a>
            </nav>
            <img
              className="inline size-10 lg:hidden"
              src="https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@main/portfolio/images/hamburger.png"
              alt="hamburger"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
