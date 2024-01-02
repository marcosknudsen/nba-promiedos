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
      <footer>
        Este sitio web es un proyecto personal inspirado en el mítico <a href="https://www.promiedos.com.ar/">Promiedos</a> con la única intencion de aprender a usar las tecnologias implicadas.
      </footer>
    </>
  );
}

export default App;
