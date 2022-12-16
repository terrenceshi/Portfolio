import ArtBox from './components/ArtBox.js';
import './Art.css';
import Paper from '@mui/material/Paper';

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

function Art() {
    
    return (
      <div className="Art">
        <Paper className = "artPaper">
          <div className = "row">
            <ArtBox imageSrc = {[getOut, getOut1, getOut2, getOut3, getOut4, getOut5]}
                    type = "top"
                    text = {"More facial geometric practice on the main character of Jordan Peele's 'Get Out'. \
                            I wanted to try a style of having sharp edges and clear geometric shapes for this facial study."}/>
            <ArtBox imageSrc = {[para, para1,para2,para3,para4,para5,para6,para7,para9]}
                    type = "top"
                    text = {"After my other projects this summer, I used my acquired skills in facial anatomy and \
                            geometric planes to make this painting from imagination, lighting and everything."}/>
            <ArtBox imageSrc = {[eren, eren1,eren2,eren3,eren4,eren5]}
                    type = "top"
                    text = {"I wanted to make something Attack on Titan related since Season 4 aired. After a few other sketches, I settled on something Eren focused."}/>
          </div>

          <div className = "row">
            <ArtBox imageSrc = {[ramiGif, ramiAngry, ramiHappy, ramiSad, ramiSurprised]}
                    text = {"I needed to get some practice modeling, rigging, and skinning the human face. This additionally helped my knowledge of anatomy. I chose Rami Malek as my base, as I had recently seen 'No Time to Die', and his face looks nice."}/>
            <ArtBox imageSrc = {[hl,hl1,hl2,hl3,hl4,hl5]}
                    text = {"Simple drawing from a frame of the television series, The Boys. Testing out polygonal lasso style drawing trying to capture Anthony Starr's facial expression."}/>
            <ArtBox imageSrc = {[bizFront, bizBack, poster]}
                    text = {"I imagined and designed a fictional pirating software company as a project. Here's my card!"}/>
          </div>

          <div className = "row">
            <ArtBox imageSrc = {[portal]}
                    text = {"Photoshop assignment for graphic design class in 2020."}/>
            <ArtBox imageSrc = {[cat]}
                    text = {"Funny cat drawing I made back in 2017. Used a mouse for the edges surprisingly."}/>
            <ArtBox imageSrc = {[starlord]}
                    text = {"Painting of Starlord back when Guardians of the Galaxy 2 came out back in 2017."}/>
          </div>

          <div className = "row">
            <ArtBox imageSrc = {[goblin]}
                    type = "bot"
                    text = {"Sketch of the green goblin. Made an effort to get his helmet's geometry accurate."}/>
            <ArtBox imageSrc = {[hanniSketch]}
                    type = "bot"
                    text = {"Outline and hatching heavy style drawing of Hannibal Lector."}/>
            <ArtBox imageSrc = {[moira]}
                    type = "bot"
                    text = {"Sketch of the maid from American Horror Story's first season."}/>
          </div>

        </Paper>
        
  
      </div>
    );
  }
  
  export default Art;
  