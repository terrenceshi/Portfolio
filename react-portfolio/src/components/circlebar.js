import './circlebar.css';

import Paper from '@mui/material/Paper';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import VisibilitySensor from "react-visibility-sensor";

function Circlebar({ percent, skill, desc, widthInput, marginInput }) {
  let percentage = 0;
  return (
    <Paper elevation={3} className = "circlePaper"
      sx = {{margin: marginInput/8,
            width: widthInput}}
    >
      <div className="Circlebar">

        <h3 className = "circleTitle">{skill}</h3>

        <div style={{ width: 100, height: 100 }}>
          <VisibilitySensor>
            {({ isVisible }) => {
              
              if(isVisible === true & percentage === 0){
                percentage += percent;
              }
              return (
                <CircularProgressbar
                  value={percentage}
                  text={""}
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
