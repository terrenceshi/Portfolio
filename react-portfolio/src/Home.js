import './Home.css';
import Circlebar from "./components/circlebar.js"

import pfp from "./assets/me_test5.jpg"

import { useState, useEffect} from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  if(width >= 955){
    return 0;
  } else if (width < 955 & width > 650) {
    return 1;
  } else if (width <= 650) {
    return 2;
  }

}

function Home() {
  //default width for everything is 905
  //For now, 0 = can handle 905px, 1 = 600px, 2 = mobile

  const [windowMode, setWindowMode] = useState(getWindowDimensions())
 
  const handleResize = () => {
    if (window.innerWidth >= 955){ //give some margin. 
      setWindowMode(0)

    } else if (window.innerWidth < 955 & window.innerWidth > 650) {
      setWindowMode(1)

    } else if(window.innerWidth <= 650) {
      setWindowMode(2)
    } 
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    const skillRow = document.getElementById("skillRow");
    const bioBox = document.getElementById("bioBox");
    const bioRow = document.getElementById("bioRow");
    const homeContainer = document.getElementById("homeContainer");

    if(windowMode === 0){
      bioBox.style.width = "890px";
      bioRow.style.flexDirection = "row";
      bioRow.style.alignItems = "start";
      skillRow.style.flexDirection = "row";
      homeContainer.style.height = "100vh";
    } else if(windowMode === 1){
      bioBox.style.width = "655px";
      bioRow.style.flexDirection = "row";
      bioRow.style.alignItems = "start";
      skillRow.style.flexDirection = "row";
      homeContainer.style.height = "100vh";
    } else if(windowMode === 2){
      bioBox.style.width = "325px";
      bioRow.style.flexDirection = "column-reverse";
      bioRow.style.alignItems = "center";
      skillRow.style.flexDirection = "column";
      homeContainer.style.height = "100%";
    }
  })

  return (
    <div className="Home">

      <div className = 'homeContainer' id = "homeContainer">
        <div className = 'bannerContent'>
          <div className = "bioBox" id = "bioBox">
            <h1 className = "bioHeader">About Me</h1>

            <div className ="bioRow" id = "bioRow">
              <p className = "bio">
                I'm a CS grad student at Georgia Tech. There, I'm studying Machine Learning and Computer Graphics.
                Academics are super hard but I still try to find time to work on my own projects and have fun.
                <br></br>
                <br></br>
              </p>

              <img src = {pfp} className = "pfp" id = "pfp"/>

            </div>
          </div>

          <div className = "skillRow" id = "skillRow">
            <Circlebar percent = {70} skill = {windowMode === 0 ? "Machine Learning" : "ML"} id = "mlBar"
              desc = {"I'm familiar with Pytorch & Tensorflow."}
              widthInput = {windowMode === 1 ? 190 : 260}
              marginInput = {windowMode === 1 ? 7.5 : 15} />
            <Circlebar percent = {90} skill = {"Frontend"}
              desc = {"I'm proficient with React & Angular."}
              widthInput = {windowMode === 1 ? 190 : 260}
              marginInput = {windowMode === 1 ? 7.5 : 15} />
            <Circlebar percent = {75} skill = {"Backend"}
              desc = {"I've deployed Flask, Django BEs on AWS."}
              widthInput = {windowMode === 1 ? 190 : 260}
              marginInput = {windowMode === 1 ? 7.5 : 15} />
          </div>

        </div>
            

      </div>
      

    </div>
  );
}

export default Home;
