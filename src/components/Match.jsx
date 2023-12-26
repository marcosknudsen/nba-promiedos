import { FaSquarePlus } from "react-icons/fa6";

export default function Match(props) {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    background: "#e5e5e5",
    height: "75px",
    border: "1px solid rgb(0, 45, 41)",
  };

  const teamStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    width: "200px",
  };

  const teamsStyleImg = {
    width: "100%",
    height: "50px",
  };

  const dateStyle = {
    background: "#155219",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
  };

  const dateStyleFinished = {
    background: "#312d2c",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
  };

  const dateStylePlaying = {
    background: "red",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
  };

  const scoreStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    background: "#fff",
    padding: "0 20px",
    width: "25px",
  };

  const infoStyle = {
    background: "green",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    fontSize: "25px",
    width: "60px",
    cursor: "pointer",
  };
  return (
    <tr style={style}>
      {props.status == "" && (
        <td style={dateStyle}>
          <b>{props.date}</b>
        </td>
      )}
      {props.status == "Finished" && (
        <td style={dateStyleFinished}>
          <b>Fin</b>
        </td>
      )}
      {props.status != "" && props.status != "Finished" && (
        <td style={dateStylePlaying}>
          <b>{props.status}</b>
        </td>
      )}
      <td style={teamStyle}>
        <div>
          <img src={props.team1logo} style={teamsStyleImg}></img>
        </div>
        <div>{props.team1}</div>
      </td>
      <td style={scoreStyle}>{props.team1score}</td>
      <td style={scoreStyle}>{props.team2score}</td>
      <td style={teamStyle}>
        <div>
          <img src={props.team2logo} style={teamsStyleImg}></img>
        </div>
        <div>{props.team2}</div>
      </td>
      <td style={infoStyle}>
        <FaSquarePlus></FaSquarePlus>
      </td>
    </tr>
  );
}
