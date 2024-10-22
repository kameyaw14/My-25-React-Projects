import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Accordion from "./components/accordion/accordion";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/accordion/NavBar";
import Rappers from "./Pages/Rappers";
import Home from "./Pages/Home";
import RapperInfo from "./Pages/RapperInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rappers" element={<Rappers />} />
        <Route path="/rappers/genres/:genre" element={<Rappers />} />
        <Route path="/rappers/:rapper" element={<RapperInfo />} />
      </Routes>
    </div>
  );
}

export default App;
