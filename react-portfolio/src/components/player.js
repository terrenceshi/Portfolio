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
    setMute, mute, windowMode}) {

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

    let stackSpace = 16;
    let timeWidth = 400;

    if(windowMode === 1){
        stackSpace = 6;
        timeWidth = 220;
    } else if(windowMode === 2){
        stackSpace = 1
        timeWidth = 150;
    }

    return (
      <div className="Player">

        <div className = "paperPlayer" style = {windowMode === 2 ? {height: 200}: {height: 160}}>
            <p className = "songTitle" style = {windowMode === 2 ? {marginBottom: 24} : {marginBottom: 5}}>
                {songName}
            </p>
            <Stack direction= {windowMode === 2 ? "column" : "row"}
                alignItems="center"
                justifyContent="center"
                spacing = {stackSpace}
            >
                <Stack direction="row"
                    alignItems="center"
                    justifyContent="center"
                    className = "musicButtons"
                    spacing = {windowMode >= 1 ? 3:4}
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

                <Stack direction="row"
                    alignItems="center"
                    justifyContent="center"
                    className = "timeline"
                >
                    <p className = "audioText">{ct}</p>
                    <Slider aria-label="audioLength" 
                        value={percentage}
                        onChange={handleTimeChange}
                        sx={windowMode >= 1 ? { width: timeWidth, margin: 2 } : { width: timeWidth, margin: 2 }}
                    />
                    <p className = "audioText">{maxDuration}</p>
                </Stack>

                <Stack direction="row"
                    className = "volumeSet"
                    alignItems="center"
                    justifyContent="center"
                    spacing = {2}
                    style = {windowMode === 2 ? {display: "none"}: {display: "flex"}}
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
                        sx={windowMode >= 1 ? { width: 100, margin: 0 } : { width: 126, margin: 0 }}
                        onChange = {handleVolumeChange}
                    />
                    <div className = "nothing" />
                </Stack>
            </Stack>

        </div>
  
      </div>
    );
  }
  
  export default Player;
  