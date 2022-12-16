import './player.css';

import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUp from '@mui/icons-material/VolumeUp';

import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

import VolumeOffIcon from '@mui/icons-material/VolumeOff';

function Player() {
    return (
      <div className="Player">

        <div className = "paperPlayer">
            <Stack direction="row"
                alignItems="center"
                justifyContent="center"
            >
                <Stack direction = "column"
                    className = "mainPlayer"
                >
                    <Stack direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <SkipPreviousIcon
                            className = "musicIcon"
                            sx={{ fontSize: "50px",
                            "& :hover": { color: "#44a8e1" } }}
                        />
                        <PlayArrowIcon
                            className = "musicIcon"
                            sx={{ fontSize: "50px",
                            "& :hover": { color: "#44a8e1" } }}
                        />
                        <SkipNextIcon
                            className = "musicIcon"
                            sx={{ fontSize: "50px",
                            "& :hover": { color: "#44a8e1" } }}
                        />

                    </Stack>

                    <Stack direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <p className = "audioText">0:00</p>
                        <Slider aria-label="audioLength" value={30} 
                            sx={{ width: 400, margin: 2 }}
                        />
                        <p className = "audioText">1:00</p>
                    </Stack>

                </Stack>
                

                <Stack direction="row"
                    className = "volumeSet"
                    alignItems="center"
                    justifyContent="center"
                >
                    <VolumeUp 
                        sx={{ fontSize: "30px" }}
                    />
                    <Slider aria-label="Volume" value={30} 
                        sx={{ width: 125, margin: 2 }}
                    />
                </Stack>
            </Stack>

        </div>
  
      </div>
    );
  }
  
  export default Player;
  