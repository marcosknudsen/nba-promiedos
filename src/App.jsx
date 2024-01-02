import { Routes, Route } from "react-router-dom";
import "./App.css"
import Today from "./Today.jsx";
import Tomorrow from "./Tomorrow.jsx";
import Yesterday from "./Yesterday.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/nba-promiedos/" element={<Today/>} />
        <Route path="/nba-promiedos/tomorrow" element={<Tomorrow/>} />
        <Route path="/nba-promiedos/yesterday" element={<Yesterday/>} />
      </Routes>
    </>
  );
}

export default App;
