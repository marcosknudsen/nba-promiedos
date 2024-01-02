import { useEffect, useState } from "react";
import "./Today.css";
import League from "./components/League/League";
import order from "../order.json";

function Yesterday() {
  const [matches, setMatches] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let today = new Date();
    today.setDate(today.getDate()-1)
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
        setLeagues(
          [...new Set(games.map((m) => m.league_key))].sort(
            (a, b) => getOrder(a, order.leagues) - getOrder(b, order.leagues)
          )
        );
      })
      .then(() => setLoading(false))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div className="banner">
        <a href="/">
          <img src="https://promiedos.nyc3.cdn.digitaloceanspaces.com/menu/logo2.jpg"></img>
        </a>
      </div>
      <div id="principal" style={{ display: "flex", justifyContent: "center" }}>
        <div
          id="menu"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            transform:"translateX(80px)"
          }}
        >
          <div id="titulo1">
            PARTIDOS
            <br />
            AYER
          </div>
          <div id="bman">
            <a href="/">
              <img src="https://www.promiedos.com.ar/images/menu/arrow-right.png"></img>
              <br />
              Hoy
            </a>
          </div>
        </div>
        {loading && (
          <div className="content">
            <div className="loader"></div>
          </div>
        )}
        {!loading &&
          leagues.map((l) => {
            return (
              <div>
                <League
                  matches={matches.filter((m) => m.league_key == l)}
                  id={l}
                  key={l}
                ></League>
              </div>
            );
          })}
      </div>
    </>
  );
}
export default Yesterday;

function getOrder(value, array) {
  if (!array.includes(value)) return 60000;
  else return array.indexOf(value);
}
