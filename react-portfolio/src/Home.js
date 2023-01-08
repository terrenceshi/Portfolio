import './Home.css';
import Circlebar from "./components/circlebar.js"

import pfp from "./assets/me_test5.jpg"

import { useState, useEffect} from 'react';

import { useInView } from 'react-intersection-observer';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  if(width >= 955){
    return [0, 890];
  } else if (width < 955 & width > 650) {
    return [1, 655];
  } else if (width <= 650) {
    return [2, 325];
  }

}

function Home() {
  //default width for everything is 905
  //For now, 0 = can handle 905px, 1 = 600px, 2 = mobile

  let brFlexDir;
  let brAlignItems;
  let srFlexDir;
  let homeHeight;

  const [windowMode, setWindowMode] = useState(getWindowDimensions()[0])

  const [bbWidth, setBbWidth] = useState(getWindowDimensions()[1])
 
  const handleResize = () => {
    //console.log(window.innerWidth)
    if (window.innerWidth >= 955){ //give some margin. 
      setWindowMode(0)
      setBbWidth(890)

    } else if (window.innerWidth < 955 & window.innerWidth > 650) {
      setWindowMode(1)
      setBbWidth(655)

    } else if(window.innerWidth <= 650) {
      setWindowMode(2)
      setBbWidth(325)
    } 
  }

  if(windowMode === 0){
    brFlexDir = "row";
    brAlignItems = "start";
    srFlexDir = "row";
    homeHeight = "100vh";
  } else if(windowMode === 1){
    brFlexDir = "row";
    brAlignItems = "start";
    srFlexDir = "row";
    homeHeight = "100vh";
  } else if(windowMode === 2){
    brFlexDir = "column-reverse"
    brAlignItems = "center";
    srFlexDir = "column";
    homeHeight = "100%";
  }

  let th = windowMode !== 2 ? 0.5 : 0.1;

  const { ref, inView } = useInView({
    threshold: th, //percentage that should be visible
  })

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    //console.log(windowMode)
  })

  return (
    <div className= {inView ? "Home-zoom" : "Home"} ref = {ref}>

      <div className = 'homeContainer' style = {{height: homeHeight}}>
        <div className = 'bannerContent'>
          <div className = "bioBox" style = {{width: bbWidth}}>
            <h1 className = "bioHeader">About Me</h1>

            <div className ="bioRow" style = {{flexDirection : brFlexDir, alignItems : brAlignItems}}>
              <p className = "bio">
                I'm a CS grad student at Georgia Tech. There, I'm studying Machine Learning and Computer Graphics.
                Academics are super hard but I still try to find time to work on my own projects and have fun.
                <br></br>
                <br></br>
              </p>

              <img src = {pfp} className = "pfp" id = "pfp"/>

            </div>
          </div>

          <div className = "skillRow" style = {{flexDirection : srFlexDir}}>
            <Circlebar percent = {70} skill = {windowMode === 0 ? "Machine Learning" : "ML"} id = "mlBar"
              desc = {"I'm familiar with Pytorch & Tensorflow."}
              widthInput = {windowMode === 1 ? 190 : 260}
              marginInput = {windowMode === 1 ? 7.5 : 15}
              windowMode = {windowMode} />
            <Circlebar percent = {90} skill = {"Frontend"}
              desc = {"I'm proficient with React & Angular."}
              widthInput = {windowMode === 1 ? 190 : 260}
              marginInput = {windowMode === 1 ? 7.5 : 15}
              windowMode = {windowMode} />
            <Circlebar percent = {75} skill = {"Backend"}
              desc = {"I've deployed Flask, Django BEs on AWS."}
              widthInput = {windowMode === 1 ? 190 : 260}
              marginInput = {windowMode === 1 ? 7.5 : 15}
              windowMode = {windowMode} />
          </div>

        </div>
            

      </div>
      

    </div>
  );
}

export default Home;
