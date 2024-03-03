import { useEffect } from 'react';
import './App.scss'
import { initiateCursorAnimation } from './utils/util';
import Header from './components/Header/Header';
import Cursor from './components/Cursor/Cursor';






function App() {
  useEffect(() => {
    initiateCursorAnimation();
  }, []);

  return (
    <div className='md:container md:mx-auto'>
      <Header />
      <h1 className="font-FranchiseFree lg:text-12xl md:text-10xl sm:text-8xl text-6xl">
        SHREYANS JAIN

      </h1>

      <Cursor />
    </div>
  )
}

export default App
