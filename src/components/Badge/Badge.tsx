export default function Badge() {
  return (
    <>
      <div className="float-right inline-flex items-center ">
        <img
          src="https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@main/portfolio/images/command-line1.png"
          alt=""
          className="z-10 h-12 self-center border-2 border-solid border-white shadow-[black_12px_0px_12px_2px]"
        />
        <div className=" h-8 w-48 rounded-r bg-[#ee5100] px-2 leading-8 sm:w-60 md:w-64 lg:w-72 ">
          <span className="whitespace-nowrap px-4 font-JosefinSlab font-black">
            FULL STACK ENGINEER
          </span>
        </div>
      </div>
    </>
  );
}
