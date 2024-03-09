import { useEffect } from "react";
import "./App.scss";
import { initiateCursorAnimation } from "./utils/util.ts";
import Header from "./components/Header/Header.tsx";
import Cursor from "./components/Cursor/Cursor.tsx";
import HeroContainer from "./components/HeroContainer/HeroContainer.tsx";

function App() {
  useEffect(() => {
    initiateCursorAnimation();
  }, []);

  return (
    <div className="md:container md:mx-auto">
      <Header />
      <HeroContainer />
      <Cursor />
    </div>
  );
}

export default App;
