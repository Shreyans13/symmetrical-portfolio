import { useEffect } from 'react';
import './App.scss'
import { initiateCursorAnimation } from './utils/util';
import Header from './components/Header/Header';
import Cursor from './components/Cursor/Cursor';
import HeroContainer from './components/HeroContainer/HeroContainer';






function App() {
  useEffect(() => {
    initiateCursorAnimation();
  }, []);

  return (
    <div className='md:container md:mx-auto'>
      <Header />
      <HeroContainer />
      <Cursor />
    </div>
  )
}

export default App
