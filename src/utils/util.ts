import { gsap } from "gsap";
import Cursor from "./cursor.ts";

const setTheme = (value: "light" | "dark"): void =>
  localStorage.setItem("theme", value);

const getTheme = (): string => localStorage.getItem("theme") ?? "";

const initiateCursorAnimation = () => {
  const cursorElement: HTMLElement = document.querySelector(".cursor")!;

  if (cursorElement) {
    const cursorObj = new Cursor(cursorElement);
    window.addEventListener("click", () => {
      const cellAtCursor = cursorObj.getCellAtCursor();
      if (cellAtCursor && cursorObj.DOM.cells !== null)
        gsap
          .timeline()
          .addLabel("start", 0)
          .to(
            cursorObj.DOM.cells,
            {
              duration: 1,
              ease: "power4",
              opacity: 1,
              stagger: {
                from: Array.from(cursorObj.DOM.cells).indexOf(cellAtCursor),
                each: 0.02,
                grid: [cursorObj.rows, cursorObj.columns],
              },
            },
            "start",
          )
          .to(
            cursorObj.DOM.cells,
            {
              duration: 1,
              ease: "power1",
              opacity: 0,
              stagger: {
                from: Array.from(cursorObj.DOM.cells).indexOf(cellAtCursor),
                each: 0.03,
                grid: [cursorObj.rows, cursorObj.columns],
              },
            },
            "start+=0.3",
          );
    });
  }
};
// TODO: Refator to suppoer multiple elements
const add3DTextAnimation = () => {
  const domElement = document.getElementById("anim-3dText");
  domElement?.addEventListener("mousemove", (e) => {
    const rXP = e.pageX - domElement.offsetLeft - domElement.offsetWidth / 2;
    const rYP = e.pageY - domElement.offsetTop - domElement.offsetHeight / 2;

    domElement.style.textShadow = `${rYP / 10}px ${rXP / 80}px rgba(255,255,255,.8), 
                   ${rYP / 8}px ${rXP / 60}px rgba(255,237,0,1), 
                   ${rXP / 70}px ${rYP / 12}px rgba(0,159,227,.7)`;
  });
};

export { setTheme, getTheme, initiateCursorAnimation, add3DTextAnimation };
