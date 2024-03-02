import { useEffect } from 'react';
import './App.scss'
import { initiateCursorAnimation } from './utils/util';
import Header from './components/Header/Header';

function App() {
  useEffect(() => {
    initiateCursorAnimation();
  });

  return (
    <>
      <main className="container-fluid">
        <Header />
        <div className="content">
          <div className='left'>
            <img className="content-left-image" src='https://images.unsplash.com/photo-1648649459257-f8fb0bce6ec9?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <h2>SHREYANS</h2>
          </div>
          <div className='right'>
            <img src='https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </div>
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
      </main>
    </>
  )
}

export default App
