import Match from "./Match";

export default function League(props) {
  return (
    <div style={{marginBottom:"20px"}}>
    <div style={{background:"#002d29",color:"#fff",display:"flex",justifyContent:"center",fontSize:"20px"}}>{props.matches[0].league.name}</div>
      {props.matches.map((m) => {
        return (
          <>
            <Match
              key={m.id}
              team1={m.teams.away.name}
              team2={m.teams.home.name}
              date={m.time}
              team1score={m.scores.away.total}
              team2score={m.scores.home.total}
              team1logo={m.teams.away.logo}
              team2logo={m.teams.home.logo}
            >{props.matches.length}</Match>
          </>
        );
      })}
    </div>
  );
}
