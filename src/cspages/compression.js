import { useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import './cspage.css';

import Stack from '@mui/material/Stack';

import svd1 from "./../assets/cs_thumbs/svd1.png"
import svd2 from "./../assets/cs_thumbs/svd2.png"
import svd5 from "./../assets/cs_thumbs/svd5.png"
import svd10 from "./../assets/cs_thumbs/svd10.png"
import svd20 from "./../assets/cs_thumbs/svd20.png"
import svd40 from "./../assets/cs_thumbs/svd40.png"

import gmm4 from "./../assets/cs_thumbs/gmm4.png"
import gmm8 from "./../assets/cs_thumbs/gmm8.png"
import gmm12 from "./../assets/cs_thumbs/gmm12.png"
import gmm16 from "./../assets/cs_thumbs/gmm16.png"
import gmmOg from "./../assets/cs_thumbs/gmm_original.png"

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

    let monaTh;
    let rowTh;

    if(windowMode === 3){
      monaTh = 0.01;
      rowTh = 0.1;
    } else{
      monaTh = 0.2;
      rowTh = 0.2;
    }

    const [ ref1, inView1 ] = useInView({
          threshold: 0.2,
    })
    const [ ref2, inView2 ] = useInView({
          threshold: 0.2,
    })
    const [ ref3, inView3 ] = useInView({
          threshold: rowTh,
    })
    const [ ref3s, inView3s ] = useInView({
          threshold: rowTh,
    })
    const [ ref4, inView4 ] = useInView({
          threshold: 0.2,
    })
    const [ ref5, inView5 ] = useInView({
          threshold: monaTh,
    })

    const [first1, setFirst1] = useState(true)
    const [first2, setFirst2] = useState(true)
    const [first3, setFirst3] = useState(true)
    const [first3s, setFirst3s] = useState(true)
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
      if(first3s === true & inView3s === true){
        setFirst3s(false)
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
          setFirst3s(true)
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
        and blue values into three matrices and have to perform SVD for each matrix. Note that RV refers 
        "Recovered Variance", and "Number of Components" refers to number of Singular Values, which essentially
        controls the size of the matrices we decompose the original matrix into. Here are the results:
        </p>

        <Stack direction = {windowMode >= 2 ? "column":"row"}
            alignItems="center"
            justifyContent="center"
            spacing = {15/8}
            sx = {{mt:30/8}}
            className = {inView3 || first3 === false ? "csImg-zoom":"csImg"}
            ref = {ref3}
        >
          <Stack direction = "column"
              alignItems="center"
              justifyContent="center"
              spacing = {1}
          >
            <p className = "subText" style = {{margin: "8px 0px"}}>1 component</p>
            <img src = {svd1} alt = "svd1" style = {windowMode === 1 ? {width: 210}:{}}/>
            <p className = "subText">Compression: 0.0025</p>
            <p className = "subText">RV: R: 0.224 G: 0.224 B: 0.224</p>
          </Stack>

          <Stack direction = "column"
              alignItems="center"
              justifyContent="center"
              spacing = {1}
          >
            <p className = "subText" style = {{margin: "8px 0px"}}>2 components</p>
            <img src = {svd2} alt = "svd2" style = {windowMode === 1 ? {width: 210}:{}}/>
            <p className = "subText">Compression: 0.005</p>
            <p className = "subText">RV: R: 0.543 G: 0.543 B: 0.543</p>
          </Stack>

          <Stack direction = "column"
              alignItems="center"
              justifyContent="center"
              spacing = {1}
          >
            <p className = "subText" style = {{margin: "8px 0px"}}>5 components</p>
            <img src = {svd5} alt = "svd5" style = {windowMode === 1 ? {width: 210}:{}}/>
            <p className = "subText">Compression: 0.0125</p>
            <p className = "subText">RV: R: 0.985 G: 0.985 B: 0.985</p>
          </Stack>

        </Stack>

        <Stack direction = {windowMode >= 2 ? "column":"row"}
            alignItems="center"
            justifyContent="center"
            spacing = {15/8}
            sx = {{mt:30/8, mb:30/8}}
            className = {inView3s || first3s === false ? "csImg-zoom":"csImg"}
            ref = {ref3s}
        >
          <Stack direction = "column"
              alignItems="center"
              justifyContent="center"
              spacing = {1}
          >
            <p className = "subText" style = {{margin: "8px 0px"}}>10 components</p>
            <img src = {svd10} alt = "svd10" style = {windowMode === 1 ? {width: 210}:{}}/>
            <p className = "subText">Compression: 0.025</p>
            <p className = "subText">RV: R: 0.988 G: 0.988 B: 0.988</p>
          </Stack>

          <Stack direction = "column"
              alignItems="center"
              justifyContent="center"
              spacing = {1}
          >
            <p className = "subText" style = {{margin: "8px 0px"}}>20 components</p>
            <img src = {svd20} alt = "svd20" style = {windowMode === 1 ? {width: 210}:{}}/>
            <p className = "subText">Compression: 0.05</p>
            <p className = "subText">RV: R: 0.989 G: 0.989 B: 0.989</p>
          </Stack>

          <Stack direction = "column"
              alignItems="center"
              justifyContent="center"
              spacing = {1}
          >
            <p className = "subText" style = {{margin: "8px 0px"}}>40 components</p>
            <img src = {svd40} alt = "svd40" style = {windowMode === 1 ? {width: 210}:{}}/>
            <p className = "subText">Compression: 0.1</p>
            <p className = "subText">RV: R: 0.991 G: 0.991 B: 0.991</p>
          </Stack>

        </Stack>

        <p className = {inView4 || first4 === false ? "csText-zoom":"csText"} ref = {ref4}>
        This next method uses GMM (Gaussian Mixture Modeling). It utilizes clusters and gives each point a probability 
        the point is in each cluster. First, GMM estimates which clusters each point is most likely to be a part of. 
        Afterwards, it figures out which cluster each point belongs to by calculating and maximizing the likelihood a point 
        belongs to a cluster. Here are the results:
        </p>

        <Stack direction = {windowMode >= 2 ? "column":"row"}
            alignItems="center"
            justifyContent="center"
            spacing = {15/8}
            sx = {{mt:30/8}}
            className = {inView5 || first5 === false ? "csImg-zoom":"csImg"}
            ref = {ref5}
        >
          <Stack direction = "column"
              alignItems="center"
              justifyContent="center"
              spacing = {1}
          >
            <p className = "subText" style = {{margin: "8px 0px"}}>4 Clusters</p>
            <img src = {gmm4} alt = "gmm4" style = {windowMode === 1 ? {width: 130}:{width: 180}}/>
          </Stack>

          <Stack direction = "column"
              alignItems="center"
              justifyContent="center"
              spacing = {1}
          >
            <p className = "subText" style = {{margin: "8px 0px"}}>8 Clusters</p>
            <img src = {gmm8} alt = "gmm8" style = {windowMode === 1 ? {width: 130}:{width: 180}}/>
          </Stack>

          <Stack direction = "column"
              alignItems="center"
              justifyContent="center"
              spacing = {1}
          >
            <p className = "subText" style = {{margin: "8px 0px"}}>12 Clusters</p>
            <img src = {gmm12} alt = "gmm12" style = {windowMode === 1 ? {width: 130}:{width: 180}}/>
          </Stack>

          <Stack direction = "column"
              alignItems="center"
              justifyContent="center"
              spacing = {1}
          >
            <p className = "subText" style = {{margin: "8px 0px"}}>16 Clusters</p>
            <img src = {gmm16} alt = "gmm16" style = {windowMode === 1 ? {width: 130}:{width: 180}}/>
          </Stack>

          <Stack direction = "column"
              alignItems="center"
              justifyContent="center"
              spacing = {1}
          >
            <p className = "subText" style = {{margin: "8px 0px"}}>Original</p>
            <img src = {gmmOg} alt = "gmmOg" style = {windowMode === 1 ? {width: 130}:{width: 180}}/>
          </Stack>

        </Stack>

      </div>
    );
  }
  
  export default Compression;
  