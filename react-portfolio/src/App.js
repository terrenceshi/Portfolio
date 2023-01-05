import './App.css';

import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./Home"
import Art from "./Art"
import CS from "./CS"
import Music from "./Music"
import Authorship from "./cspages/authorship.js"
import Compression from "./cspages/compression.js"

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import bannerSrc from "./assets/citytest21.jpg";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const location = useLocation();

  return (
    <div className="App">

      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <div className = 'bannerContainer'>
          <img src={bannerSrc} className="banner" />

          <div className = "centerBanner">
            <h1 className = "banner_title">
                Hi. <br></br>
                I'm Terrence.
            </h1>
          </div>
          
        </div>

        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/Art">Art</Link>
            <Link to="/CS">CS</Link>
            <Link to="/Music">Music</Link>
        </div>

        <div className = "content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Art" element={<Art />} />
            <Route path="/CS" element={<CS />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/CS/Authorship" element={<Authorship />} />
            <Route path="/CS/Compression" element={<Compression />} />
          </Routes>
          
        </div>

        <div className = "footer">
          <div className = "row">
          </div>
        </div>

      </ThemeProvider>


      

    </div>
  );
}

export default App;
