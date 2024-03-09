// import React from 'react'
// import PropTypes from 'prop-types'

function HeroContainer() {
  return (
    <div className="">
      {/* <img className="inline border-solid border-2 border-white" src="https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@main/portfolio/images/command-line1.png" alt="commandline_image" /> */}
      {/* <div className=" h-14 bg-orange-600"><span>some text which I will change in some time </span> </div> */}

      <div className="inline-flex items-center float-right ">
        <img
          src="https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@main/portfolio/images/command-line1.png"
          alt=""
          className="border-solid border-2 border-white self-center h-12 shadow-[black_12px_0px_12px_2px] z-10"
        />
        <div className=" h-8 lg:w-72 md:w-64 sm:w-60 w-48 leading-8 bg-orange-600 rounded-r px-2 ">
          <span className="px-4 font-JosefinSlab font-black whitespace-nowrap">
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
            className="rotate-[16deg] m-4 xl:inline-block hidden lg:h-64 md:h-60 sm:h-56 h-52 align-top "
            src="https://images.unsplash.com/photo-1518112166137-85f9979a43aa?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <span className="font-FranchiseFree lg:text-13xl md:text-11xl sm:text-9xl text-7xl uppercase">
            Shreyans
          </span>
        </div>

        <div className="col-span-1 row-span-2 ">
          <img
            className="xl:inline-block hidden h-full"
            src="https://images.unsplash.com/photo-1518112166137-85f9979a43aa?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <div className="col-span-3">
          <img
            className=" border-8 rounded border-white xl:inline-block hidden  lg:h-64 md:h-60 sm:h-56 h-52 lg:w-64 md:w-60 sm:w-56 w-52 m-4 align-top"
            src="https://images.unsplash.com/photo-1614529303797-815a283581cc?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className=" border-8 rounded border-white xl:inline-block hidden  lg:h-64 md:h-60 sm:h-56 h-52  lg:w-64 md:w-60 sm:w-56 w-52 m-4 align-top"
            src="https://images.unsplash.com/photo-1614529303797-815a283581cc?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <span className="m-4 font-FranchiseFree lg:text-13xl md:text-11xl sm:text-9xl text-7xl uppercase">
            Jain
          </span>
        </div>
      </div>
    </div>
  );
}

// HeroContainer.propTypes = {}

export default HeroContainer;
