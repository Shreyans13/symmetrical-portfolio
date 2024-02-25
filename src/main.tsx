import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.sass'

// import { useBoundStore } from "./store/state.ts";
// const [theme, setTheme] = useState('dark');


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <p> theme == {util.theme}</p> */}
    <App />
  </React.StrictMode>,
)
