// import React from 'react'
import "./Cursor.scss";
import { useEffect } from "react";
import { initiateCursorAnimation } from "../../utils/util.ts";

export default function Cursor() {
  useEffect(() => {
    console.log("useEffect of App.tsx")
    initiateCursorAnimation();
  }, []);

  return (
    <>
      <div className="cursor">
        <div className="cursor_inner" />
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="gooey">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="3.2"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}
