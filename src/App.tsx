import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useStore } from "./store/state.ts";


import './App.sass'

function App() {
  const [count, setCount] = useState(0)
  const util = useStore().util


  return (
    <div data-theme="light" className='pico'>
      {util.theme}
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React = {util.theme}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit ewfwe:w <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
