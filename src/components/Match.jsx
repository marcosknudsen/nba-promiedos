export default function Match(props) {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    background: "#e5e5e5",
    height:"75px",
  };

  const teamStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    width: "20%",
  };

  const teamsStyleImg = {
    width: "100%",
    height: "50px",
  };

  const dateStyle = {
    background: "#312d2c",
    color: "#fff",
    padding: "20px",
    display: "flex",
    alignItems: "center",
  };

  const scoreStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
  };

  const infoStyle = {
    background: "green",
    color: "white",
    alignItems: "center",
    justifyContent:"center",
    display: "flex",
    padding: "0 15px",
    fontSize: "30px",
    width:"1%",
    cursor:"pointer"
  };
  return (
    <>
      <div style={style}>
        <div style={dateStyle}>
          <div>{props.date}</div>
        </div>
        <div style={teamStyle}>
          <div>
            <img src={props.team1logo} style={teamsStyleImg}></img>
          </div>
          <div>{props.team1}</div>
        </div>
        <div style={scoreStyle}>{props.team1score}</div>
        <div style={scoreStyle}>{props.team2score}</div>
        <div style={teamStyle}>
          <div>
            <img src={props.team2logo} style={teamsStyleImg}></img>
          </div>
          <div>{props.team2}</div>
        </div>
        <div style={infoStyle}>+</div>
      </div>
    </>
  );
}
