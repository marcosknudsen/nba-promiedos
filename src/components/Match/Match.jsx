import { FaSquarePlus } from "react-icons/fa6";
import "./Match.css";

export default function Match(props) {
  let homeScore = 0;
  let awayScore = 0;
  homeScore += parseInt(props.scores["1stQuarter"][0]?.score_home ?? 0);
  homeScore += parseInt(props.scores["2ndQuarter"][0]?.score_home ?? 0);
  homeScore += parseInt(props.scores["3rdQuarter"][0]?.score_home ?? 0);
  homeScore += parseInt(props.scores["4thQuarter"][0]?.score_home ?? 0);

  awayScore += parseInt(props.scores["1stQuarter"][0]?.score_away ?? 0);
  awayScore += parseInt(props.scores["2ndQuarter"][0]?.score_away ?? 0);
  awayScore += parseInt(props.scores["3rdQuarter"][0]?.score_away ?? 0);
  awayScore += parseInt(props.scores["4thQuarter"][0]?.score_away ?? 0);

  return (
    <tr className="match">
      <td
        className={
          (props.status == "" && "date") ||
          ((props.status == "Finished" || props.status == "After Over Time") &&
            "finished date") ||
          "playing date"
        }
      >
        <b>
          {((props.status == "Finished" || props.status == "After Over Time") &&
            "Fin") ||
            (props.status == "" && props.date) ||
            props.status}
        </b>
      </td>
      <td className="team">
        <div>
          <img src={props.team1logo} className="teamLogo"></img>
        </div>
        <div>{props.team1}</div>
      </td>
      <>
        <td className="score">{props.status != "" ? homeScore : "-"}</td>
        <td className="score">{props.status != "" ? awayScore : "-"}</td>
      </>
      <td className="team">
        <div>
          <img src={props.team2logo} className="teamLogo"></img>
        </div>
        <div>{props.team2}</div>
      </td>
      <td className="info">
        <FaSquarePlus></FaSquarePlus>
      </td>
    </tr>
  );
}
