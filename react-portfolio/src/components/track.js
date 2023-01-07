import './track.css';

import Stack from '@mui/material/Stack';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import PauseCircleIcon from '@mui/icons-material/PauseCircle';

const Track = ({ title, clickFn, playing, songName, windowMode }) => {
    return (
      <div className="Track">
        <Stack direction="row" className = "trackStack">
            
            {playing & (title === songName) ? 
              <PauseCircleIcon
                className = "trackPlayButton"
                onClick = {clickFn}
                sx={windowMode !== 3 ? 
                  { fontSize: "35px", "& :hover": { color: "#90caf9" }, marginLeft: 10 }
                  :
                  { fontSize: "35px", "& :hover": { color: "#90caf9" } }
                }
              />
              :
              <PlayCircleIcon
                className = "trackPlayButton"
                onClick = {clickFn}
                sx={windowMode !== 3 ? 
                  { fontSize: "35px", "& :hover": { color: "#90caf9" }, marginLeft: 10 }
                  :
                  { fontSize: "35px", "& :hover": { color: "#90caf9" } }
                }
              />
            }

            <p className = "trackTitle" style = {playing & (title === songName) ? {color:"#90caf9"}: {color: "white"}}>{title}</p>
        </Stack>
        
      </div>
    );
  }
  
  export default Track;
  