// import React from 'react'
// import PropTypes from 'prop-types'

// import Badge from "../Badge/Badge.tsx";
import "./HeroContainer.scss";

function HeroContainer() {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-0">
        <div className="col-span-3 inline-block">
          <img
            className="m-4 hidden h-52 rotate-[16deg] align-top sm:h-56 md:h-60 lg:h-64 xl:inline-block "
            src="https://images.unsplash.com/photo-1518112166137-85f9979a43aa?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <span className=" animatedTextFill font-FranchiseFree text-7xl uppercase sm:text-9xl md:text-11xl lg:text-13xl">
            Shreyans
          </span>
        </div>

        <div className="col-span-1 row-span-2 ">
          <img
            className="hidden h-full xl:inline-block"
            src="https://images.unsplash.com/photo-1518112166137-85f9979a43aa?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <div className="col-span-3">
          <img
            className=" m-4 hidden size-52 rounded border-8  border-white align-top sm:size-56 md:size-60 lg:size-64 xl:inline-block"
            src="https://images.unsplash.com/photo-1614529303797-815a283581cc?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className=" m-4 hidden size-52 rounded border-8  border-white align-top sm:size-56 md:size-60  lg:size-64 xl:inline-block"
            src="https://images.unsplash.com/photo-1614529303797-815a283581cc?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <span className="animatedTextFill m-4 font-FranchiseFree text-7xl uppercase sm:text-9xl md:text-11xl lg:text-13xl">
            Jain
          </span>
        </div>
      </div>
    </div>
  );
}

// HeroContainer.propTypes = {}

export default HeroContainer;
