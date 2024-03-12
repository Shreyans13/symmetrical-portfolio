import { useEffect } from "react";
import "./App.scss";
import { initiateCursorAnimation } from "./utils/util.ts";
import Header from "./components/Header/Header.tsx";
import Cursor from "./components/Cursor/Cursor.tsx";
import HeroContainer from "./components/HeroContainer/HeroContainer.tsx";
import TextRoller from "./components/TextRoller/TextRoller.tsx";
import OnScrollFilter from "./components/OnScrollFilter/OnScrollFilter.tsx";

function App() {
  useEffect(() => {
    console.log("useEffect of App.tsx")
    initiateCursorAnimation();
  }, []);

  return (
    <div className="">
      <Header />
      <TextRoller />
      <HeroContainer />
      <Cursor />
      <p className="text-center font-JosefinSlab">
        Scroll moderately to <br />
        fully <span className="font-black">expereince</span> the
        <br />
        <span className="font-black">animations</span>
        <br />
        <span className="font-black">|</span>
      </p>
      <OnScrollFilter />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
