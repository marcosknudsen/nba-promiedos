import { Routes, Route } from "react-router-dom";
import "./App.css"
import Today from "./Today.jsx";
import Tomorrow from "./Tomorrow.jsx";
import Yesterday from "./Yesterday.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Today/>} />
        <Route path="/tomorrow" element={<Tomorrow/>} />
        <Route path="/yesterday" element={<Yesterday/>} />
      </Routes>
    </>
  );
}

export default App;
