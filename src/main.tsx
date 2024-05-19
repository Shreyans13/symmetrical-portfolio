import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.tsx";
import "./index.scss";
import { getTheme, setTheme } from "./utils/util.ts";
import Projects from "./pages/Projects.tsx";
import Header from "./components/Header/Header.tsx";
import Cursor from "./components/Cursor/Cursor.tsx";




const theme = getTheme();

if (theme === "") {
  setTheme("dark");
}

// setTheme("light")
setTheme("dark");
// set elemental css to the first html tag to set the theme
document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: []
  },
  {
    path: "/projects",
    element: <Projects />,
    children: []
  }
])




ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Cursor />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
