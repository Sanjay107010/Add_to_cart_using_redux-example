import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Cards from "./component/Cards";
import CradsDetails from "./component/CradsDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cards/:id" element={<CradsDetails />} />
      </Routes>
    </>
  );
}

export default App;
