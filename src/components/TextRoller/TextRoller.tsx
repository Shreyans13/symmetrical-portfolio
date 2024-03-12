// import React from "react";
import "./TextRoller.scss";

export default function TextRoller() {
  return (
    <>
      <div className="my-2 text-right text-3xl md:container md:mx-auto md:text-4xl">
        <span className="bg-red-500">console</span>
        <span className="bg-text-white">.</span>
        <span className="bg-sky-500">log</span>
        <span className="bg-text-white">("</span>
        <span className="inline-flex h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] flex-col  overflow-hidden text-indigo-500 md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))]">
          <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
            <li>
              <span className="bg-lime-500">Software Engineer</span>
            </li>

            <li>
              <span className="	bg-cyan-500	">Product Engineer</span>
            </li>
            <li>
              <span className="bg-orange-500	">Frontend Developer</span>
            </li>


            <li>
              <span className="	bg-indigo-500	">Backend Developer</span>
            </li>
            <li>
              <span className="bg-amber-500	">Coder</span>
            </li>
            <li aria-hidden="true">
              <span className="bg-lime-500">Software Engineer</span>
            </li>
          </ul>
        </span>
        <span className="bg-text-white">")</span>
      </div>
    </>
  );
}
