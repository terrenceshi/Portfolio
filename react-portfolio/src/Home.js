import './Home.css';
import Circlebar from "./components/circlebar.js"

import Stack from '@mui/material/Stack';

import pfp from "./assets/me_test5.jpg"

function Home() {
  return (
    <div className="Home">

      <div className = 'bannerContainer'>

        <div className = 'bannerContent'>
          <div className = "bioBox">
            <h1 className = "bioHeader">About Me</h1>

            <div className ="bioRow" >
              <p className = "bio">
                I'm a CS grad student at Georgia Tech. There, I'm studying Machine Learning and Computer Graphics.
                Academics are super hard but I still try to find time to work on my own projects and have fun.
                <br></br>
                <br></br>
              </p>

              <img src = {pfp} className = "pfp"/>

            </div>
          </div>
          

          <div className = "skills">
            <div className = "row">
              <Circlebar percent = {70} skill = {"Machine Learning"}
                desc = {"I'm experienced in using Pytorch and Tensorflow."}/>
              <Circlebar percent = {90} skill = {"Frontend"}
                desc = {"I'm very comfortable with React and Angular."}/>
              <Circlebar percent = {75} skill = {"Backend"}
                desc = {"I've deployed Flask and Django BEs with AWS."}/>
            </div>

          </div>
        </div>
            

      </div>
      

    </div>
  );
}

export default Home;
