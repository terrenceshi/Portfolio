import './track.css';

import Stack from '@mui/material/Stack';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import PauseCircleIcon from '@mui/icons-material/PauseCircle';

const Track = ({ title, clickFn, playing, songName }) => {
    return (
      <div className="Track">
        <Stack direction="row" className = "trackStack">
            

            {playing & (title === songName) ? 
              <PauseCircleIcon
                className = "trackPlayButton"
                onClick = {clickFn}
                sx={{ fontSize: "35px",
                "& :hover": { color: "#44a8e1" } }}
              />
              :
              <PlayCircleIcon
                className = "trackPlayButton"
                onClick = {clickFn}
                sx={{ fontSize: "35px",
                "& :hover": { color: "#44a8e1" } }}
              />
            }

            <p className = "trackTitle">{title}</p>
        </Stack>
        
  
      </div>
    );
  }
  
  export default Track;
  