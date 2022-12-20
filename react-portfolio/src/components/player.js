import './player.css';

import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUp from '@mui/icons-material/VolumeUp';
import PauseIcon from '@mui/icons-material/Pause';

import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

import VolumeOffIcon from '@mui/icons-material/VolumeOff';

function Player({playFn, playing, songName, percentage, audioElem, 
    setSongDuration, backFn, nextFn, ct, maxDuration, volume, setVolume, 
    setMute, mute}) {

    const handleTimeChange = (event, newValue) => {
        audioElem.current.currentTime = (newValue / 100) * audioElem.current.duration;
        setSongDuration(newValue);
    };

    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue / 100)
    }

    const handleMuteChange = () => {
        setMute(!mute)
    }

    return (
      <div className="Player">

        <div className = "paperPlayer">
            <Stack direction="row"
                alignItems="center"
                justifyContent="center"
            >
                <Stack direction="row"
                    alignItems="center"
                    justifyContent="center"
                    className = "musicButtons"
                >
                    <SkipPreviousIcon
                        className = "musicIcon"
                        onClick = {backFn}
                        sx={{ fontSize: "50px",
                        "& :hover": { color: "#44a8e1" } }}
                    />
                    
                    {playing ? 
                        <PauseIcon
                            className = "musicIcon"
                            onClick = {playFn}
                            sx={{ fontSize: "50px",
                            "& :hover": { color: "#44a8e1" } }}
                        />
                        :
                        <PlayArrowIcon
                            className = "musicIcon"
                            onClick = {playFn}
                            sx={{ fontSize: "50px",
                            "& :hover": { color: "#44a8e1" } }}
                        />
                    }
                    
                    <SkipNextIcon
                        className = "musicIcon"
                        onClick = {nextFn}
                        sx={{ fontSize: "50px",
                        "& :hover": { color: "#44a8e1" } }}
                    />
                </Stack>

                <p className = "songTitle">{songName}</p>

                <Stack direction="row"
                    alignItems="center"
                    justifyContent="center"
                    className = "timeline"
                >
                    <p className = "audioText">{ct}</p>
                    <Slider aria-label="audioLength" 
                        value={percentage}
                        onChange={handleTimeChange}
                        sx={{ width: 400, margin: 2 }}
                    />
                    <p className = "audioText">{maxDuration}</p>
                </Stack>

                <Stack direction="row"
                    className = "volumeSet"
                    alignItems="center"
                    justifyContent="center"
                >
                    {volume === 0 || mute ? 
                        <VolumeOffIcon
                            className = "volumeIcon"
                            onClick = {handleMuteChange}
                            sx={{ fontSize: "30px",
                                "& :hover": { color: "#44a8e1" }  }}
                        />
                        :
                        <VolumeUp 
                            className = "volumeIcon"
                            onClick = {handleMuteChange}
                            sx={{ fontSize: "30px",
                                "& :hover": { color: "#44a8e1" }  }}
                        />
                    }

                    <Slider aria-label="Volume" value={volume * 100} 
                        sx={{ width: 125, margin: 2 }}
                        onChange = {handleVolumeChange}
                    />
                </Stack>
            </Stack>

        </div>
  
      </div>
    );
  }
  
  export default Player;
  