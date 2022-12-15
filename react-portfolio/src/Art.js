import ArtBox from './components/ArtBox.js';
import './Art.css';

import getOut from "./assets/art/get_out/wip5.png"
import getOutWip from "./assets/art/get_out/wip.gif"

import eren from "./assets/art/eren/yeager.png"
import erenWip from "./assets/art/eren/eren.gif"

import para from "./assets/art/parasyte/para.png"
import paraWip from "./assets/art/parasyte/para.gif"

import hl from "./assets/art/hl/hl.png"
import hlWip from "./assets/art/hl/hlwip.gif"

import ramiGif from "./assets/art/modelface/transformation.gif"
import ramiAngry from "./assets/art/modelface/angry.jpg"
import ramiHappy from "./assets/art/modelface/happy.jpg"
import ramiSad from "./assets/art/modelface/sad.jpg"
import ramiSurprised from "./assets/art/modelface/surprised.jpg"

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
        <div className = "row">
          <ArtBox imageSrc = {[getOut, getOutWip]}/>
          <ArtBox imageSrc = {[para, paraWip]}/>
          <ArtBox imageSrc = {[eren, erenWip]}/>
        </div>

        <div className = "row">
          <ArtBox imageSrc = {[ramiGif, ramiAngry, ramiHappy, ramiSad, ramiSurprised]}/>
          <ArtBox imageSrc = {[hl, hlWip]}/>
          <ArtBox imageSrc = {[bizFront, bizBack, poster]}/>
        </div>

        <div className = "row">
          <ArtBox imageSrc = {[cat]}/>
          <ArtBox imageSrc = {[starlord]}/>
          <ArtBox imageSrc = {[portal]}/>
        </div>

        <div className = "row">
          <ArtBox imageSrc = {[goblin]}/>
          <ArtBox imageSrc = {[hanniSketch]}/>
          <ArtBox imageSrc = {[moira]}/>
        </div>
  
      </div>
    );
  }
  
  export default Art;
  