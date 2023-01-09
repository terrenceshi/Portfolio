import ArtBox from './components/ArtBox.js';
import './Art.css';
import { useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import Skeleton from '@mui/material/Skeleton';

import getOut from "./assets/art/get_out/wip6.png"
import getOut1 from "./assets/art/get_out/wip0.png"
import getOut2 from "./assets/art/get_out/wip1.png"
import getOut3 from "./assets/art/get_out/wip2.png"
import getOut4 from "./assets/art/get_out/wip3.png"
import getOut5 from "./assets/art/get_out/wip4.png"

import para from "./assets/art/parasyte/para.png"
import para1 from "./assets/art/parasyte/para1.png"
import para2 from "./assets/art/parasyte/para2.png"
import para3 from "./assets/art/parasyte/para3.png"
import para4 from "./assets/art/parasyte/para4.png"
import para5 from "./assets/art/parasyte/para5.png"
import para6 from "./assets/art/parasyte/para6.png"
import para7 from "./assets/art/parasyte/para7.png"
import para9 from "./assets/art/parasyte/para9.png"

import eren from "./assets/art/eren/yeager.png"
import eren1 from "./assets/art/eren/wip1.png"
import eren2 from "./assets/art/eren/wip2.png"
import eren3 from "./assets/art/eren/wip3.png"
import eren4 from "./assets/art/eren/wip4.png"
import eren5 from "./assets/art/eren/wip5.png"

import ramiGif from "./assets/art/modelface/transformation.gif"
import ramiAngry from "./assets/art/modelface/angry.jpg"
import ramiHappy from "./assets/art/modelface/happy.jpg"
import ramiSad from "./assets/art/modelface/sad.jpg"
import ramiSurprised from "./assets/art/modelface/surprised.jpg"

import hl from "./assets/art/hl/hl.png"
import hl1 from "./assets/art/hl/wip1.png"
import hl2 from "./assets/art/hl/wip2.png"
import hl3 from "./assets/art/hl/wip3.png"
import hl4 from "./assets/art/hl/wip4.png"
import hl5 from "./assets/art/hl/wip5.png"

import bizFront from "./assets/art/priceheist/bizcard_front.jpg"
import bizBack from "./assets/art/priceheist/bizcard_back_fixed.jpg"
import poster from "./assets/art/priceheist/poster_ferst.jpg"

import cat from "./assets/art/misc/cat.png"
import starlord from "./assets/art/misc/starlord.jpg"
import portal from "./assets/art/misc/portal.jpg"
import goblin from "./assets/art/misc/goblin.jpg"
import hanniSketch from "./assets/art/misc/hanni.jpg"
import moira from "./assets/art/misc/moira.jpg"

function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;

        if(width >= 970){
                return 0;
        } else if (width < 970 & width > 400) {
                return 1;
        } else if (width <= 400) {
                return 2;
        }
}

var load1 = false
var load2 = false
var load3 = false
var load4 = false
var load5 = false
var load6 = false
var load7 = false
var load8 = false
var load9 = false
var load10 = false
var load11 = false
var load12 = false

const setLoad1 = () => {
        load1 = true
}
const setLoad2 = () => {
        load2 = true
}
const setLoad3 = () => {
        load3 = true
}
const setLoad4 = () => {
        load4 = true
}
const setLoad5 = () => {
        load5 = true
}
const setLoad6 = () => {
        load6 = true
}
const setLoad7 = () => {
        load7 = true
}
const setLoad8 = () => {
        load8 = true
}
const setLoad9 = () => {
        load9 = true
}
const setLoad10 = () => {
        load10 = true
}
const setLoad11 = () => {
        load11 = true
}
const setLoad12 = () => {
        load12 = true
}

var firstAll = true;

function Art() {
        //refs and inviews for each row
        const [ ref1, inView1, entry1 ] = useInView({
                threshold: 0.2,
        })
        const [ ref2, inView2 ] = useInView({
                threshold: 0.2,
        })
        const [ ref3, inView3 ] = useInView({
                threshold: 0.2,
        })
        const [ ref4, inView4 ] = useInView({
                threshold: 0.2,
        })

        const [ loadRef1, loadInView1 ] = useInView({
                threshold: 0.2,
        })
        const [ loadRef2, loadInView2 ] = useInView({
                threshold: 0.2,
        })

        const [windowMode, setWindowMode] = useState(getWindowDimensions())

        const [first1, setFirst1] = useState(true)
        const [first2, setFirst2] = useState(true)
        const [first3, setFirst3] = useState(true)
        const [first4, setFirst4] = useState(true)

        const [first1L, setFirst1L] = useState(true)
        const [first2L, setFirst2L] = useState(true)

        const [allLoaded, setAllLoaded] = useState(false);

        const handleResize = () => {
                if (window.innerWidth >= 970){
                  setWindowMode(0)
            
                } else if (window.innerWidth < 970 & window.innerWidth > 400) {
                  setWindowMode(1)
            
                } else if(window.innerWidth <= 400) {
                  setWindowMode(2)
                }
        }
        useEffect(() => {
                window.addEventListener("resize", handleResize);

                if(first1 === true & inView1 === true){
                        setFirst1(false)
                }
                if(first2 === true & inView2 === true){
                        setFirst2(false)
                }
                if(first3 === true & inView3 === true){
                        setFirst3(false)
                }
                if(first4 === true & inView4 === true){
                        setFirst4(false)
                }

                if(first1L === true & loadInView1 === true){
                        setFirst1L(false)
                }
                if(first2L === true & loadInView2 === true){
                        setFirst2L(false)
                }

                window.onscroll = function() {
                        if(window.pageYOffset === 0) {
                                setFirst1(true)
                                setFirst2(true)
                                setFirst3(true)
                                setFirst4(true)

                                setFirst1L(true)
                                setFirst2L(true)
                        }
                };
                if(load1 & load2 & load3 & load4 & load5 & load6 & load7 & load8 & load9 & load10 & load11 & load12 & firstAll){
                        setAllLoaded(true)
                        firstAll = false;
                }
                
        })

        return (
        <div className="Art">
                <div style = {windowMode === 2 ? {paddingTop: 30, paddingBottom: 0}:{paddingTop: 60, paddingBottom: 60}}>
                        <div className = {inView1 || first1 === false ? "artRow-zoom":"artRow"} ref = {ref1}>
                                <div style = {allLoaded ? {}:{display: "none"}}>
                                        <ArtBox imageSrc = {[getOut, getOut1, getOut2, getOut3, getOut4, getOut5]}
                                        windowMode = {windowMode} setNumLoaded = {setLoad1} 
                                        title  = "Get Out"
                                        text = {"More facial geometric practice on the main character of Jordan Peele's 'Get Out'. \
                                                I wanted to try a style of having sharp edges and clear geometric shapes for this facial study."}/>
                                </div>

                                <div style = {allLoaded ? {display: "none"}:{}}>
                                        <Skeleton variant="rectangular" width={"25vw"} height={"25vw"} 
                                        style = {windowMode === 2 ? {margin:5}:{margin:15}}/>
                                </div>
                                
                                <div style = {allLoaded ? {}:{display: "none"}}>
                                        <ArtBox imageSrc = {[para, para1,para2,para3,para4,para5,para6,para7,para9]}
                                        windowMode = {windowMode} setNumLoaded = {setLoad2}
                                        title  = "Split Face"
                                        text = {"After my other projects this summer, I used my acquired skills in facial anatomy and \
                                                geometric planes to make this painting from imagination, lighting and everything."} />
                                </div>

                                <div style = {allLoaded ? {display: "none"}:{}}>
                                        <Skeleton variant="rectangular" width={"25vw"} height={"25vw"} 
                                        style = {windowMode === 2 ? {margin:5}:{margin:15}}/>
                                </div>
                                
                                <div style = {allLoaded ? {}:{display: "none"}}>
                                        <ArtBox imageSrc = {[eren, eren1,eren2,eren3,eren4,eren5]}
                                        windowMode = {windowMode} setNumLoaded = {setLoad3}
                                        title  = "Eren Yeager"
                                        text = {"I wanted to make something Attack on Titan related since Season 4 aired. After a few other sketches, I settled on something Eren focused."}/>
                                </div>

                                <div style = {allLoaded ? {display: "none"}:{}}>
                                        <Skeleton variant="rectangular" width={"25vw"} height={"25vw"} 
                                        style = {windowMode === 2 ? {margin:5}:{margin:15}}/>
                                </div>

                        </div>

                        <div className = {inView2 || first2 === false ? "artRow-zoom":"artRow"} ref = {ref2}>
                                <div style = {allLoaded ? {}:{display: "none"}}>
                                        <ArtBox imageSrc = {[ramiGif, ramiAngry, ramiHappy, ramiSad, ramiSurprised]}
                                        windowMode = {windowMode} setNumLoaded = {setLoad4}
                                        title  = "3D Head"
                                        text = {"I needed to get some practice modeling, rigging, and skinning the human face. This additionally helped my knowledge of anatomy. I chose Rami Malek as my base, as I had recently seen 'No Time to Die', and his face looks nice."}/>        
                                </div>

                                <div style = {allLoaded ? {display: "none"}:{}}>
                                        <Skeleton variant="rectangular" width={"25vw"} height={"25vw"} 
                                        style = {windowMode === 2 ? {margin:5}:{margin:15}}/>
                                </div>

                                <div style = {allLoaded ? {}:{display: "none"}}>
                                        <ArtBox imageSrc = {[hl,hl1,hl2,hl3,hl4,hl5]}
                                        windowMode = {windowMode} setNumLoaded = {setLoad5}
                                        title = "Homelander"
                                        text = {"Simple drawing from a frame of the television series, The Boys. Testing out polygonal lasso style drawing trying to capture Anthony Starr's facial expression."}/>
                                </div>

                                <div style = {allLoaded ? {display: "none"}:{}}>
                                        <Skeleton variant="rectangular" width={"25vw"} height={"25vw"} 
                                        style = {windowMode === 2 ? {margin:5}:{margin:15}}/>
                                </div>
                                <div style = {allLoaded ? {}:{display: "none"}}>
                                        <ArtBox imageSrc = {[bizFront, bizBack, poster]}
                                        windowMode = {windowMode} setNumLoaded = {setLoad6}
                                        title = "Price Heist"
                                        text = {"I imagined and designed a fictional pirating software company as a project. Here's my card!"}/>
                                </div>

                                <div style = {allLoaded ? {display: "none"}:{}}>
                                        <Skeleton variant="rectangular" width={"25vw"} height={"25vw"} 
                                        style = {windowMode === 2 ? {margin:5}:{margin:15}}/>
                                </div>
                        </div>

                        <div className = "artToLoad" style = {allLoaded ? {}:{display: "none"}}>
                                <div className = {inView3 || first3 === false ? "artRow-zoom":"artRow"} ref = {ref3}>
                                        <ArtBox imageSrc = {[portal]}
                                                windowMode = {windowMode} setNumLoaded = {setLoad7}
                                                title = "Portal"
                                                text = {"Photoshop assignment for graphic design class in 2020."}/>
                                        <ArtBox imageSrc = {[cat]}
                                                windowMode = {windowMode} setNumLoaded = {setLoad8} 
                                                title = "Inebriated Cat"
                                                text = {"Funny cat drawing I made back in 2017. Used a mouse for the edges surprisingly."}/>
                                        <ArtBox imageSrc = {[starlord]}
                                                windowMode = {windowMode} setNumLoaded = {setLoad9}
                                                title = "Starlord"
                                                text = {"Painting of Starlord back when Guardians of the Galaxy 2 came out back in 2017."}/>
                                </div>

                                <div className = {inView4 || first4 === false ? "artRow-zoom":"artRow"} ref = {ref4}>
                                        <ArtBox imageSrc = {[goblin]}
                                                windowMode = {windowMode} setNumLoaded = {setLoad10}
                                                title = "Green Goblin"
                                                text = {"Sketch of the green goblin. Made an effort to get his helmet's geometry accurate."}/>
                                        <ArtBox imageSrc = {[hanniSketch]}
                                                windowMode = {windowMode} setNumLoaded = {setLoad11}
                                                title = "Hannibal Sketch"
                                                text = {"Outline and hatching heavy style drawing of Hannibal Lector."}/>
                                        <ArtBox imageSrc = {[moira]}
                                                windowMode = {windowMode} setNumLoaded = {setLoad12}
                                                title = "Moira"
                                                text = {"Sketch of the maid from American Horror Story's first season."}/>
                                </div>
                        </div>

                </div>
                
        </div>
        );
  }
  
  export default Art;
  