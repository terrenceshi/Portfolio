import './App.css';

import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "./Home"
import Art from "./Art"
import CS from "./CS"
import Music from "./Music"
import Authorship from "./cspages/authorship.js"
import Compression from "./cspages/compression.js"
import Navbar from "./components/Navbar.js"

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';

import { useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';

import bannerSrc from "./assets/citytest21.jpg";

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

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  })

  const location = useLocation();

  let titleStyle 
  if (windowMode === 0){
    titleStyle = {
      fontSize: "8rem"
    }
  } else if(windowMode === 1){
    titleStyle = {
      fontSize: "7rem"
    }
  } else if(windowMode === 2){
    titleStyle = {
      fontSize: "5rem"
    }
  } else if(windowMode === 3){
    titleStyle = {
      fontSize: "4rem"
    }
  }

  return (
    <div className="App">

      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <div className = 'bannerContainer'>
          <img src={bannerSrc} className="banner" />

          <div className = "centerBanner">
            <div className = "centerBox">
              <h1 className = "banner_title" style = {titleStyle}>
                  Hi. <br></br>
                  I'm Terrence.
              </h1>
            </div>
            
          </div>
          
        </div>

        <div className = "navbar" style = {windowMode === 3 ? {paddingLeft: "0em"} : {paddingLeft: "4em"}}>
          <Navbar windowMode = {windowMode}/>
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

      </ThemeProvider>

    </div>
  );
}

export default App;
