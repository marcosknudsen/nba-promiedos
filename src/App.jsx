import { useEffect, useState } from "react";
import "./App.css";
import League from "./components/League";

function App() {
  const [matches, setMatches] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [subscribedLeagues, setSuscribedLeagues] = useState([12]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://apiv2.allsportsapi.com/basketball/?met=Fixtures&APIkey=${
        import.meta.env.REACT_APP_TOKEN
      }&from=2023-12-26&to=2023-12-26&timezone=America/Argentina/Buenos_Aires`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setMatches(result.result))
      .then(() => setLeagues([...new Set(matches.map((m) => m.league_key))]))
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