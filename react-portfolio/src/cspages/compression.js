import { useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import './cspage.css';

import svd from "./../assets/cs_thumbs/svd_white.png"
import gmm from "./../assets/cs_thumbs/gmm_white.png"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  if(width >= 955){
    return 0;
  } else if (width < 955 & width > 700) {
    return 1;
  } else if (width <= 700 & width > 450) {
    return 2;
  } else if (width <= 450){
    return 3;
  }

}
function Compression() {
    const [windowMode, setWindowMode] = useState(getWindowDimensions())

    const handleResize = () => {
      if (window.innerWidth >= 955){ //give some margin. 
        setWindowMode(0)

      } else if (window.innerWidth < 955 & window.innerWidth > 700) {
        setWindowMode(1)

      } else if(window.innerWidth <= 700 & window.innerWidth > 400) {
        setWindowMode(2)
      } else if (window.innerWidth <= 400){
        setWindowMode(3)
      }
    }

    const [ ref1, inView1 ] = useInView({
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
    const [ ref5, inView5 ] = useInView({
          threshold: 0.2,
    })

    const [first1, setFirst1] = useState(true)
    const [first2, setFirst2] = useState(true)
    const [first3, setFirst3] = useState(true)
    const [first4, setFirst4] = useState(true)
    const [first5, setFirst5] = useState(true)
    
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
      if(first5 === true & inView5 === true){
        setFirst5(false)
      }

      window.onscroll = function() {
        if(window.pageYOffset === 0) {
          setFirst1(true)
          setFirst2(true)
          setFirst3(true)
          setFirst4(true)
          setFirst5(true)
        }
      };
    })

    let containerStyle;

    const containerStyle0 = {
      margin: "60px 120px 90px"
    }
    const containerStyleOther = {
      margin: "60px 60px 90px"
    }
    const containerStyle3 = {
      margin: 30
    }

    if(windowMode === 3){
      containerStyle = containerStyle3;
    } else if(windowMode === 0){
      containerStyle = containerStyle0;
    } else{
      containerStyle = containerStyleOther;
    }

    return (
      <div className="compression" style = {containerStyle}>
        <h2 className = {inView1 || first1 === false ? "csTitle-zoom":"csTitle"} ref = {ref1}>Image Compression</h2>

        <p className = {inView2 || first2 === false ? "csText-zoom":"csText"} ref = {ref2}>
        In an older project, I used various techniques I learned from my 
        intro to ML class in order to compress images. None of these methods were implemented with 
        the help of pre-existing implementations from packages such as sklearning.
        <br></br>
        <br></br>
        This first method utilizes SVD (Singular Value Decomposition). An image is essentially a matrix 
        of pixel values. We then decompose the matrix into three different matrices using linear algebra 
        techniques and essentially reduce the size of the matrices. For colored images, you store red, green, 
        and blue values into three matrices and have to perform SVD for each matrix. Here are the results:
        </p>

        <img src = {svd} alt = "svd" className = {inView3 || first3 === false ? "csImg-zoom":"csImg"} ref = {ref3}
          style = {windowMode === 3 ? {width: "82vw" } : {width: "70vw"} }/>

        <p className = {inView4 || first4 === false ? "csText-zoom":"csText"} ref = {ref4}>
        This next method uses GMM (Gaussian Mixture Modeling). It utilizes clusters and gives each point a probability 
        the point is in each cluster. First, GMM estimates which clusters each point is most likely to be a part of. 
        Afterwards, it figures out which cluster each point belongs to by calculating and maximizing the likelihood a point 
        belongs to a cluster. Here are the results:
        </p>

        <img src = {gmm} alt = "gmm" className = {inView5 || first5 === false ? "csImg-zoom":"csImg"} ref = {ref5}
          style = {windowMode === 3 ? {width: "82vw" } : {width: "70vw"} }/>

      </div>
    );
  }
  
  export default Compression;
  