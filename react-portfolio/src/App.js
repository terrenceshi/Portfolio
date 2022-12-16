import './App.css';

import { useInView } from 'react-intersection-observer';

import { Route, Routes} from 'react-router-dom';
import Home from "./Home"
import Art from "./Art"
import CS from "./CS"
import Music from "./Music"
import Authorship from "./cspages/authorship.js"
import Compression from "./cspages/compression.js"

function App() {

  const {ref, inView, entry} = useInView({
    threshold: 0.4,
  });

  return (
    <div className="App">

      <div className = 'bannerContainer'>
        <div className = "banner">
          {/* put an image here later */}

          <h1 className = "banner_title">
            Hi. <br></br>
            I'm Terrence.
          </h1>
          
        </div>
      </div>

      <div class="navbar">
          <a href="/">Home</a>
          <a href="/Art">Art</a>
          <a href="/CS">CS</a>
          <a href="/Music">Music</a>
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

    </div>
  );
}

export default App;
