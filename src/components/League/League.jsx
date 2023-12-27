import Match from "../Match/Match";
import { useEffect, useState } from "react";
import "./League.css";

export default function League(props) {
  const [flag, setFlag] = useState("");

  useEffect(() => {
    if (props.matches[0].country_name == "Europe")
      setFlag(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png"
      );
    else if (props.matches[0].country_name == "Asia")
      setFlag(
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Flag_of_Asia.png"
      );
    else
      fetch(
        "https://restcountries.com/v3.1/name/" + props.matches[0].country_name
      )
        .then((response) => response.json())
        .then((response) => setFlag(response[0]?.flags.png))
        .catch((error) => console.log(error));
  }, []);

  return (
    <table style={{ marginBottom: "20px", width: "100%" }}>
      <thead className="header">
        <tr>
          <td>
            <img src={flag} className="flag"></img>
          </td>
          <td>{props.matches[0].league_name}</td>
          <td>
            <img src={flag} className="flag"></img>
          </td>
        </tr>
      </thead>
      <tbody>
        {props.matches.map((m) => {
          return (
            <Match
              key={m.event_key}
              team1={m.event_home_team}
              team2={m.event_away_team}
              date={m.event_time}
              team1logo={m.event_home_team_logo}
              team2logo={m.event_away_team_logo}
              status={m.event_status}
              scores={m.scores}
            />
          );
        })}
      </tbody>
    </table>
  );
}
