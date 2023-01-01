import './circlebar.css';

import Paper from '@mui/material/Paper';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import VisibilitySensor from "react-visibility-sensor";

function Circlebar({ percent, skill, desc }) {
  let percentage = 0;
  return (
    <Paper elevation={2} className = "circlePaper">
      <div className="Circlebar">

        <h2 className = "circleTitle">{skill}</h2>

        <div style={{ width: 200, height: 200 }}>
          <VisibilitySensor>
            {({ isVisible }) => {
              
              if(isVisible == true & percentage === 0){
                percentage += percent;
              }
              return (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "white",
                    pathColor: "#90caf9",
                    trailColor: "black",
                    pathTransitionDuration: 1.2
                  })}
                />
              );
            }}
          </VisibilitySensor>
        </div>

        <p className = "skillDesc">{desc}</p>
      </div>
    </Paper>
    
  );
}

export default Circlebar;
