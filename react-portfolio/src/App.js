import './App.css';

import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "./Home"
import Art from "./Art"
import CS from "./CS"
import Music from "./Music"
import Authorship from "./cspages/authorship.js"
import Compression from "./cspages/compression.js"
import Navbar from "./components/Navbar.js"
import Slider from "./components/Slider.js"

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

import { useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';

import banImg1 from "./assets/citytest21.jpg";
import banImg2 from "./assets/citytest17s.jpg";
import banImg3 from "./assets/citytest13s.jpg";
import banImg4 from "./assets/citytest2s.jpg";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
});

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  if(width >= 955){
    return 0;
  } else if (width < 955 & width > 750) {
    return 1;
  } else if (width <= 750 & width > 550) {
    return 2;
  } else if (width <= 550){
    return 3;
  }

}

function App() {
  const [windowMode, setWindowMode] = useState(getWindowDimensions())

  const { ref, inView } = useInView({
    threshold: 0.3,
  })
 
  const handleResize = () => {
    //console.log(window.innerHeight)

    if (window.innerWidth >= 955){ //give some margin. 
      setWindowMode(0)

    } else if ((window.innerWidth < 955 & window.innerWidth > 750)) {
      setWindowMode(1)

    } else if((window.innerWidth <= 750 & window.innerWidth > 550)) {
      setWindowMode(2)
    } else if (window.innerWidth <= 550){
      setWindowMode(3)
    }
  }

  const location = useLocation();
  const [x, setX] = useState(0)

  const sliderArr = [banImg1, banImg2, banImg3, banImg4]
  const [bannersLoaded, setBannersLoaded] = useState(0)

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if((location['pathname'] === '/' || location['pathname'] === '/Home')& x !== 0){
      setX(0)
    }
    if(location['pathname'] === '/Art' & x !== -100){
      setX(-100)
    }
    if((location['pathname'] === '/CS' || location['pathname'] === '/CS/Authorship' || location['pathname'] === '/CS/Compression') & x !== -200){
      setX(-200)
    }
    if(location['pathname'] === '/Music' & x !== -300){
      setX(-300)
    }
  })

  let titleStyle
  let hiStyle
  let imStyle
  if (windowMode === 0){
    titleStyle = {
      fontSize: "8rem"
    }
    hiStyle = {
      fontSize: "8rem",
      width: 160.014
    }
    imStyle = {
      fontSize: "8rem",
      width: 784.139
    }
  } else if(windowMode === 1){
    titleStyle = {
      fontSize: "7rem"
    }
    hiStyle = {
      fontSize: "7rem",
      width: 143.569
    }
    imStyle = {
      fontSize: "7rem",
      width: 686.375
    }
  } else if(windowMode === 2){
    titleStyle = {
      fontSize: "5rem"
    }
    hiStyle = {
      fontSize: "5rem",
      width: 102.681
    }
    imStyle = {
      fontSize: "5rem",
      width: 490.819
    }
  } else if(windowMode === 3){
    titleStyle = {
      fontSize: "4rem"
    }
    hiStyle = {
      fontSize: "4rem",
      width: 82.238
    }
    imStyle = {
      fontSize: "4rem",
      width: 303.6
    }
  }

  return (
    <div className="App">

      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <div className = "loadingApp" style = {bannersLoaded === sliderArr.length ? {display: "none"}:{}}>
          <div className = 'bannerContainer'>
                <div className = "centerBox">
                  <div style = {{textAlign: "left"}}>
                    <Skeleton variant="text" style = {hiStyle}/>
                    {windowMode === 3 ? <Skeleton variant="text" sx = {{fontSize: "4rem", width: 90.363}}/> : <div/>}
                    <Skeleton variant="text" style = {imStyle}/>
                  </div>
                </div>
          </div>
        </div>

        <div className = "loadedApp" style = {bannersLoaded === sliderArr.length ? {}:{display: "none"}}>
          <div className = 'bannerContainer'>
            <Slider sliderArr = {sliderArr} x = {x} 
              bannersLoaded = {bannersLoaded} setBannersLoaded = {setBannersLoaded}
            />

              <div className = "centerBox">
                <h1 className = "banner_title" style = {titleStyle}>
                    Hi. <br></br>
                    I'm Terrence.
                </h1>
              </div>
            
          </div>

          <div className = "navbar" style = {windowMode === 3 ? {paddingLeft: "0em"} : {paddingLeft: "4em"}}>
            <Navbar windowMode = {windowMode} x = {x} setX = {setX}/>
          </div>
          
          <div className = "content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Art" element={<Art />} />
              <Route path="/CS" element={<CS />} />
              <Route path="/Music" element={<Music />} />
              <Route path="/CS/Authorship" element={<Authorship />} />
              <Route path="/CS/Compression" element={<Compression />} />
            </Routes>
            
          </div>

          <div className = {inView ? "footer-view" : "footer"} ref = {ref}>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

            <Stack direction = "row"
                alignItems="center"
                justifyContent="center"
                spacing = {8}
                sx = {{mt: 10, mb: 10}}
            >
              <a href="https://github.com/terrenceshi/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github fa-4x icon-3d" style = {windowMode === 3 ? {fontSize : 50} : {fontSize : 80}}></i>
              </a>
              <a href="https://www.instagram.com/tshi_xd/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram fa-4x icon-3d" style = {windowMode === 3 ? {fontSize : 50} : {fontSize : 80}}></i>
              </a>
              <a href="https://www.linkedin.com/in/tshi/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin fa-4x icon-3d" style = {windowMode === 3 ? {fontSize : 50} : {fontSize : 80}}></i>
              </a>
              
            </Stack>
          </div>
        </div>
        

      </ThemeProvider>

    </div>
  );
}

export default App;
