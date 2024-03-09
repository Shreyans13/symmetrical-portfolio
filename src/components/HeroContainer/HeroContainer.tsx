// import React from 'react'
// import PropTypes from 'prop-types'

function HeroContainer() {
  return (
    <div className="">
      {/* <img className="inline border-solid border-2 border-white" src="https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@main/portfolio/images/command-line1.png" alt="commandline_image" /> */}
      {/* <div className=" h-14 bg-orange-600"><span>some text which I will change in some time </span> </div> */}

      <div className="float-right inline-flex items-center ">
        <img
          src="https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@main/portfolio/images/command-line1.png"
          alt=""
          className="z-10 h-12 self-center border-2 border-solid border-white shadow-[black_12px_0px_12px_2px]"
        />
        <div className=" h-8 w-48 rounded-r bg-orange-600 px-2 leading-8 sm:w-60 md:w-64 lg:w-72 ">
          <span className="whitespace-nowrap px-4 font-JosefinSlab font-black">
            FULL STACK ENGINEER
          </span>
        </div>
      </div>

      <br />
      <br />
      <br />
      {/* <img className="inline" src="https://images.unsplash.com/photo-1518112166137-85f9979a43aa?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div> */}
      <div className="grid grid-cols-4 gap-0">
        <div className="col-span-3 inline-block">
          <img
            className="m-4 hidden h-52 rotate-[16deg] align-top sm:h-56 md:h-60 lg:h-64 xl:inline-block "
            src="https://images.unsplash.com/photo-1518112166137-85f9979a43aa?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <span className="font-FranchiseFree text-7xl uppercase sm:text-9xl md:text-11xl lg:text-13xl">
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
          <span className="m-4 font-FranchiseFree text-7xl uppercase sm:text-9xl md:text-11xl lg:text-13xl">
            Jain
          </span>
        </div>
      </div>
    </div>
  );
}

// HeroContainer.propTypes = {}

export default HeroContainer;
