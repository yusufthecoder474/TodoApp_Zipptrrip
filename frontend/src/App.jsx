import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Todos from "./pages/Todos";
import About from "./pages/About";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  console.log("Dark Mode:", darkMode);

  return (
    <div
      className={darkMode ? "dark" : "light"}
      style={{
        background: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "white" : "black",
        minHeight: "100vh"
      }}
    >

      <BrowserRouter>

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/todos"
            element={<Todos />}
          />

          <Route
            path="/about"
            element={<About />}
          />

        </Routes>

      </BrowserRouter>

<ToastContainer
  position="top-right"
  autoClose={2000}
  theme="colored"
/>

</div>
  );
}

export default App;