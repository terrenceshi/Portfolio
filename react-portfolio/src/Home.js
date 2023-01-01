import './Home.css';
import Circlebar from "./components/circlebar.js"

import Stack from '@mui/material/Stack';

import pfp from "./assets/me_test5.jpg"

function Home() {
  return (
    <div className="Home">

      <div className = 'bannerContainer'>
        <div className = "bioBanner">
          <div className = "bannerContent">
            <h1 className = "bioHeader">About Me</h1>

            <Stack direction="row" spacing={2}>
              <p className = "bio">
                I'm a CS grad student at Georgia Tech. There, I'm studying Machine Learning and Computer Graphics.
                Academics are super hard but I still try to find time to work on my own projects and have fun.
                <br></br>
                <br></br>
                Aside from CS, I also make digital art, primarily drawing people and faces. I also dabble in 3D
                modeling objects, with the hardest thing I've modeled being a human head. You'll also find a little 
                bit of music on this website. I haven't done much outside of make a few samples here and there, but 
                eventually I will compose my Magnus Opus.
              </p>

              <img src = {pfp} className = "pfp"/>

            </Stack>

          </div>
          
        </div>
      </div>

      <div className = 'bannerContainer'>
        <div className = "skillsBanner">
          <div className = "bannerContent">
            <h1 className = "bioHeader">Skills</h1>
            
            <div className = "skills">
              <div className = "row">
                <Circlebar percent = {70} skill = {"Machine Learning"}
                  desc = {"I am comfortable using Pytorch and Tensorflow for Image \
                          Classification and NLP projects."}/>
                <Circlebar percent = {90} skill = {"Frontend"}
                  desc = {"With a background in graphic design, I also am \
                          proficient with React and Angular."}/>
                <Circlebar percent = {75} skill = {"Backend"}
                  desc = {"I have experience deploying Flask and Django backends \
                          using AWS."}/>
              </div>

            </div>

          </div>
          
        </div>
      </div>

      

    </div>
  );
}

export default Home;
