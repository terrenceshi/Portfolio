import './Music.css';

import Player from "./components/player.js"
import Track from "./components/track.js"

import Paper from '@mui/material/Paper';

function Music() {
    return (
      <div className="Music">
        <Player />
        
        <Paper className = "musicPlayer" elevation = {3}>
          <Track title = "40oz Instrumental Cover"/>
          <Track title = "Dino Sample"/>
          <Track title = "Stacy's Mom Instrumental"/>
          <Track title = "Ultraviolet Sample"/>
        </Paper>

        <div className = "holder"/>
  
      </div>
    );
  }
  
  export default Music;
  