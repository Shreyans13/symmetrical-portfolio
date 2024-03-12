// import React from 'react'
import { useEffect } from "react";
import "./OnScrollFilter.scss"
import { initiateOnScrollFilterAnimation } from "../../utils/util.ts";


export default function OnScrollFilter() {


  useEffect(() => {
    console.log("useEffect of onScrollFilter")
    initiateOnScrollFilterAnimation();
  }, []);



  return (
    <div className="body">
      <div className="content-wrap">
        <div className="content">
          <div className="title-wrap">
            <span className="title title--up">About</span>
            <span className="title title--down">Me</span>
          </div>
        </div>
        <div className="content content--layout content--layout-3">
          <svg className="content__img content__img--3" width={1000} height={560} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 560">
            <defs>
              <filter id="displacementFilter3">
                <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="80" result="displacement" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <mask id="pathMask">
                <path d="M 0 280 Q 500 280 1000 280 Q 500 280 0 280" data-value-final="M 0 280 Q 500 800 1000 280 Q 500 -200 0 280" fill="white" className="mask" style={{ filter: 'url(#displacementFilter3)' }} />
              </mask>
            </defs>
            <image xlinkHref="https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/images/doctor-strange.jpg" width={1000} height={560} mask="url(#pathMask)" />
          </svg>
          <p className="content__text">The Forbidden Planet was not merely an ancient world lost to time—it was a prison, a gateway to realms beyond their understanding. They had unwittingly set loose a force that threatened not only their lives but the very fabric of the universe itself. The desert planet, a riddle waiting to be unraveled, held its secrets close, leaving the crew with a lingering sense of awe and dread, a constant reminder of their insignificance in the face of an unforgiving universe.</p>
        </div>
      </div>
    </div>
  )
}
