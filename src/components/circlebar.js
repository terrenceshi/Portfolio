import './circlebar.css';

import Paper from '@mui/material/Paper';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useInView } from 'react-intersection-observer';

function Circlebar({ percent, skill, desc, widthInput, marginInput, windowMode }) {
  const { ref, inView } = useInView({
    threshold: 0.4, //percentage that should be visible
  })

  return (
    <Paper elevation={3} className = "circlePaper"
      sx = {{margin: marginInput/8,
            width: widthInput}}
    >
      <div className="Circlebar" style = {windowMode === 1 ? {rowGap : 8} : {rowGap : 20}}>

        <h3 className = "circleTitle">{skill}</h3>

        <div style={{ width: 100, height: 100 }} ref = {ref}>
          <CircularProgressbar
            value={inView ? percent : 0}
            text={""}
            styles={buildStyles({
              strokeLinecap: "butt",
              textColor: "white",
              pathColor: "#90caf9",
              trailColor: "black",
              pathTransitionDuration: 1.2
            })}
          />

        </div>

        <p className = "skillDesc">{desc}</p>
      </div>
    </Paper>
    
  );
}

export default Circlebar;
