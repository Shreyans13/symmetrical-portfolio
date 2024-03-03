import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { getTheme, setTheme } from './utils/util.ts';

const theme = getTheme();

if (theme == "") {
  setTheme("dark");
}

// setTheme("light")
setTheme("dark")
// set elemental css to the first html tag to set the theme
document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)




