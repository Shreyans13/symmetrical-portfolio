import { gsap } from "gsap";

const getWinSize = () => ({ width: window.innerWidth, height: window.innerHeight, });
const getMousePos = (e: MouseEvent) => ({ x: e.clientX, y: e.clientY, });
const isFirefox = () => navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const updateMousePosition = (event: MouseEvent) => { mousePosition = getMousePos(event); }


let winSize = getWinSize()
let mousePosition = { x: 0, y: 0 };

window.addEventListener('mousemove', updateMousePosition);
window.addEventListener('pointermove', updateMousePosition, { passive: true })
window.addEventListener('resize', () => { winSize = getWinSize(); })

export class Cursor {
  DOM: {
    element: HTMLElement | null,
    inner: HTMLElement | null,
    cells: HTMLCollectionOf<Element> | null,
  } = {
      element: null,
      inner: null,
      cells: null
    }
  cellSize: number = 0;
  rows: number = 0;
  columns: number = 0;
  cellsTotal: number = 0;
  setting: { ttl: number } = {
    ttl: 0.2
  }
  cachedCell!: Element;

  constructor(DOM_element: HTMLElement) {
    this.DOM.element = DOM_element;
    this.DOM.inner = this.DOM.element.querySelector('.cursor_inner');
    this.setting.ttl = Number(this.DOM.element.getAttribute('data-ttl')) || this.setting.ttl;

    if (!isFirefox()) this.DOM.inner!.style.filter = 'url("#gooey")'


    const layout = () => {
      this.columns = Number(getComputedStyle(DOM_element).getPropertyValue('--columns'));
      this.cellSize = winSize.width / this.columns;
      this.rows = Math.ceil(winSize.height / this.cellSize);
      this.cellsTotal = this.rows * this.columns;
      this.DOM.inner!.innerHTML = '';

      const customColorAttributes = DOM_element.getAttribute('data-custom-colors');
      const customColorArray = customColorAttributes ? customColorAttributes.split(',') : [];
      const customColorLength = customColorAttributes ? customColorArray.length : 0;
      let innerHTMLSTR = '';
      for (let i = 0; i <= this.cellsTotal; i++)
        innerHTMLSTR = innerHTMLSTR + (customColorLength === 0 ?
          '<div class="cursor_inner_box"> </div>' :
          `<div class="cursor_inner_box" style="transform: scale(${gsap.utils.random(0.5, 2)}); background=${customColorArray[Math.round(gsap.utils.random(0, customColorLength - 1))]}"></div>`)

      this.DOM.inner!.innerHTML = innerHTMLSTR;
      this.DOM.cells = this.DOM.inner!.children;
    }

    layout();
    window.addEventListener('resize', () => layout());

    const handleMouseMovement = () => {
      const cell = this.getCellAtCursor();
      if (cell === null || this.cachedCell === cell) return;
      this.cachedCell = cell;

      gsap.set(cell, { opacity: 1 });
      gsap.set(cell, { opacity: 0, delay: this.setting.ttl });
    }

    window.addEventListener('mousemove', handleMouseMovement);
    window.addEventListener('pointermove', handleMouseMovement, { passive: true })


  }

  getCellAtCursor(): Element | null {
    const columnIndex = Math.floor(mousePosition.x / this.cellSize);
    const rowIndex = Math.floor(mousePosition.y / this.cellSize);
    const cellIndex = rowIndex * this.columns + columnIndex;

    return ((cellIndex < 0 || cellIndex >= this.cellsTotal)) ?
      null : this.DOM.cells![cellIndex];

  }
}
