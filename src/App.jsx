import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Match from "./components/Match";
import League from "./components/League";
import games from "../games.json";

function App() {
  const [matches, setMatches] = useState([]);
  const [leagues, setLeagues] = useState([]);
  let subscribedLeagues = [12];

  useEffect(() => {
    /*var myHeaders = new Headers();
    myHeaders.append("x-apisports-key", "15190205bc696254f0d1d957a97c7c99");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

         fetch(
      "https://v1.basketball.api-sports.io/games?date=2023-12-25",
      requestOptions
    ) 
      .then((response) => response.json())
      .then((response)=>response.response.filter(g=>g.league.id==12))
      .then((result)=>setMatches(result))
      .catch((error) => console.log("error", error));*/

    let response = games.data;
    //response = response.filter((g) => subscribedLeagues.includes(g.league.id));
    setMatches(response);
    setLeagues([...new Set(matches.map((m) => m.league.id))]);
  }, []);

  return (
    <>
      <div className="banner">
        <a href="/">
          <img src="https://promiedos.nyc3.cdn.digitaloceanspaces.com/menu/logo2.jpg"></img>
        </a>
      </div>
      <div className="accordian"></div>
      <div id="principal">
        <div id="menu">
          <div id="bayer">
            <a href="ayer">
              <img src="https://www.promiedos.com.ar/images/menu/arrow-left.png"></img>
              <br />
              Ayer
            </a>
          </div>
          <div id="titulo1">
            PARTIDOS
            <br />
            HOY
          </div>
          <div id="bman">
            <a href="man">
              <img src="https://www.promiedos.com.ar/images/menu/arrow-right.png"></img>
              <br />
              Man
            </a>
          </div>
        </div>
        <div>
          {leagues.map((l) => {
            return (
              <>
                <League matches={matches.filter(m=>m.league.id==l)} id={l}></League>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
