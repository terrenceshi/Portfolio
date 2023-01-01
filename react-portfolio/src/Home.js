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
                Hence, I have experience working with Pytorch in projects ranging from Image Classification to 
                Natural Language Processing. 
                <br></br>
                <br></br>
                Like any other CS student, I also have a strong background in software development. In terms of backend,
                I've worked with Django and Flask. React and Angular for frontend. While I'm proficient at both, I'd say
                I'm better at frontend development, as my skills are bolstered by my background in Art and Graphic Design.
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
