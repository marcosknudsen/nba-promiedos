import { useEffect, useState } from "react";
import "./App.css";
import League from "./components/League/League";
import order from "../order.json";

function App() {
  const [matches, setMatches] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [subscribedLeagues, setSuscribedLeagues] = useState([12]);

  useEffect(() => {
    let today = new Date();
    today =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://apiv2.allsportsapi.com/basketball/?met=Fixtures&APIkey=${
        import.meta.env.REACT_APP_TOKEN
      }&from=${today}&to=${today}&timezone=America/Argentina/Buenos_Aires`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const games = result.result;
        setMatches(games);
        setLeagues([...new Set(games.map((m) => m.league_key))].sort((a,b)=>getOrder(a,order.leagues)-getOrder(b,order.leagues)));
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div className="banner">
        <a href="/">
          <img src="https://promiedos.nyc3.cdn.digitaloceanspaces.com/menu/logo2.jpg"></img>
        </a>
      </div>
      <div className="accordian"></div>
      <div id="principal" style={{ display: "flex", justifyContent: "center" }}>
        <div
          id="menu"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
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
              <League
                matches={matches.filter((m) => m.league_key == l)}
                id={l}
                key={l}
              ></League>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default App;

function getOrder(value,array){
  if (!array.includes(value))
    return 60000
  else
    return array.indexOf(value)
}