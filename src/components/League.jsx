import Match from "./Match";
import { useEffect, useState } from "react";

export default function League(props) {
  const [flag, setFlag] = useState("");
  const imgStyle = {
    width: "20px",
    height: "100%",
  };

  useEffect(() => {
    if (props.matches[0].country_name=="Europe")
      setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png")
    fetch(
      "https://restcountries.com/v3.1/name/" + props.matches[0].country_name
    )
      .then((response) => response.json())
      .then((response) => response[0].flags.png)
      .then((response) => setFlag(response));
  }, []);

  return (
    <table style={{ marginBottom: "20px", width: "100%" }}>
      <thead>
        <div
          style={{
            background: "#002d29",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          <tr>
            <td>
              <img src={flag} style={imgStyle}></img>
            </td>
            <td>{props.matches[0].league_name}</td>
            <td>
              <img src={flag} style={imgStyle}></img>
            </td>
          </tr>
        </div>
      </thead>
      <tbody>
        {props.matches.map((m) => {
          return (
            <Match
              key={m.event_key}
              team1={m.event_home_team}
              team2={m.event_away_team}
              date={m.event_time}
              team1score={0}
              team2score={0}
              team1logo={m.event_home_team_logo}
              team2logo={m.event_away_team_logo}
              status={m.event_status}
            />
          );
        })}
      </tbody>
    </table>
  );
}
