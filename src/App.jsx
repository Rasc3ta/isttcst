import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-w-[400px] ">
      <div className="relative z-[5]">
        <Navbar></Navbar>
      </div>
      <div className="h-[80px]"></div>
      <div className="relative z-[1]">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
