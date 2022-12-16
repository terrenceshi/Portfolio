import './Music.css';

import Player from "./components/player.js"
import Paper from '@mui/material/Paper';

function Music() {
    return (
      <div className="Music">
        <Player />
        
        <Paper className = "musicPlayer" elevation = {3}>
          <p>
            chads here <br></br>
            hey! <br></br>
            chads here <br></br>
            hey! <br></br>
            chads here <br></br>
            hey! <br></br>
            chads here <br></br>
            hey! <br></br>
            chads here <br></br>
            hey! <br></br>
          </p>
        </Paper>

        <div className = "holder"/>
  
      </div>
    );
  }
  
  export default Music;
  