import { useEffect } from 'react';
import './App.scss'
import { initiateCursorAnimation } from './utils/util';

function App() {
  useEffect(() => {
    initiateCursorAnimation();
  });

  return (
    <>
      <div className="content">
        <h2><i>S</i>hreyans <i>J</i>ain</h2>
      </div>
      <div className="cursor">
        <div className="cursor_inner">
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="gooey">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="3.2" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>

    </>
  )
}

export default App
