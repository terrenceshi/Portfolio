import './track.css';

import Stack from '@mui/material/Stack';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Track = ({ title, audio }) => {
    return (
      <div className="Track">
        <Stack direction="row" className = "trackStack">
            <PlayCircleIcon
                className = "trackPlayButton"
                sx={{ fontSize: "35px",
                "& :hover": { color: "#44a8e1" } }}
            />
            <p className = "trackTitle">{title}</p>
        </Stack>
        
  
      </div>
    );
  }
  
  export default Track;
  