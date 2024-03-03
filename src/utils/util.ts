import { Cursor } from "./cursor";
import { gsap } from "gsap";

const setTheme = (value: "light" | "dark"): void => localStorage.setItem('theme', value);

const getTheme = (): string => localStorage.getItem('theme') ?? "";

const initiateCursorAnimation = () => {
  const cursorElement: HTMLElement = document.querySelector('.cursor')!;

  if (cursorElement) {
    const cursorObj = new Cursor(cursorElement)
    window.addEventListener('click', () => {
      const cellAtCursor = cursorObj.getCellAtCursor();
      if (cellAtCursor && cursorObj.DOM.cells !== null)
        gsap.timeline().addLabel('start', 0).to(cursorObj.DOM.cells, {
          duration: 1,
          ease: "power4",
          opacity: 1,
          stagger: {
            from: Array.from(cursorObj.DOM.cells).indexOf(cellAtCursor),
            each: 0.02,
            grid: [cursorObj.rows, cursorObj.columns]
          }
        }, 'start').to(
          cursorObj.DOM.cells, {
          duration: 1,
          ease: "power1",
          opacity: 0,
          stagger: {
            from: Array.from(cursorObj.DOM.cells).indexOf(cellAtCursor),
            each: 0.03,
            grid: [cursorObj.rows, cursorObj.columns]
          }
        }, 'start+=0.3'
        )
    })
  }
}
export {
  setTheme,
  getTheme,
  initiateCursorAnimation
}
