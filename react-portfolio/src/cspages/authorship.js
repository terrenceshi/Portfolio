import { useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import './cspage.css';

import rnn from "./../assets/cs_thumbs/rnn.png"
import tkLoss from "./../assets/cs_thumbs/taylorKayneLoss.png"
import tkAcc from "./../assets/cs_thumbs/taylorKayneAcc.png"
import jrLoss from "./../assets/cs_thumbs/jamesRickLoss.png"
import jrAcc from "./../assets/cs_thumbs/jamesRickAcc.png"

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
function Authorship() {
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
      threshold: 0.4,
  })
  const [ ref4, inView4 ] = useInView({
      threshold: 0.2,
  })
  const [ ref5, inView5 ] = useInView({
      threshold: 0.4,
  })
  const [ ref6, inView6 ] = useInView({
      threshold: 0.2,
  })
  const [ ref7, inView7 ] = useInView({
      threshold: 0.4,
  })
  const [ ref8, inView8 ] = useInView({
      threshold: 0.2,
  })

  const [first1, setFirst1] = useState(true)
  const [first2, setFirst2] = useState(true)
  const [first3, setFirst3] = useState(true)
  const [first4, setFirst4] = useState(true)
  const [first5, setFirst5] = useState(true)
  const [first6, setFirst6] = useState(true)
  const [first7, setFirst7] = useState(true)
  const [first8, setFirst8] = useState(true)

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
    if(first6 === true & inView6 === true){
      setFirst6(false)
    }
    if(first7 === true & inView7 === true){
      setFirst7(false)
    }
    if(first8 === true & inView8 === true){
      setFirst8(false)
    }

    window.onscroll = function() {
      if(window.pageYOffset === 0) {
        setFirst1(true)
        setFirst2(true)
        setFirst3(true)
        setFirst4(true)
        setFirst5(true)
        setFirst6(true)
        setFirst7(true)
        setFirst8(true)
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
    <div className="authorship" style = {containerStyle}>
        <h2 className = {inView1 || first1 === false ? "csTitle-zoom":"csTitle"} ref = {ref1}>Authorship Attribution</h2>

        <p className = {inView2 || first2 === false ? "csText-zoom":"csText"} ref = {ref2}>
        Written language plays a significant role in our society. 
        We continuously record information and communicate with others. In today's day and age, 
        the internet provides a veil of anonymity that at times becomes problematic and abused. 
        Various applications such as threats of violence, terrorism, hate speech, or harassment 
        take advantage of this veil.
        <br></br>
        <br></br>
        Thus, being able to identify authors has many practical applications, including being able 
        to identify the author of a patent in a lawsuit or solving historical mysteries.
        <br></br>
        <br></br>
        I started with downloading the 50-50 reuters dataset and gathering data from various other sources. 
        The goal is to be able to create a model that is not only accurate in classifing authors given documents, 
        but flexible in that no matter the form of writing the model can perform. To start, I gathered about 130 
        Taylor Swift song lyrics and 130 Kanye West lyrics, as these artists are drastically different, thus being 
        an easy matchup for the model. The next phase was 100 Rick Riordan excerpts versus 100 James Dashner excerpts, 
        as both are well known for writing popular pre teen fantasy novels.</p>

        <img src = {rnn} alt = "rnn" className = {inView3 || first3 === false ? "csImg-zoom":"csImg"} ref = {ref3}
          style = {windowMode === 3 ? {width: "74vw" } : {width: "70vw"} }/>

        <p className = {inView4 || first4 === false ? "csText-zoom":"csText"} ref = {ref4}>
        For the model, I used an RNN (Recurrent Neural Network), a neural network that takes information from previous inputs, 
        giving it the quality of "memory" and making it effective for NLP related tasks such as this one. Additionally, I used 
        an AdamW Optimizer, as it is typically the most effective optimizer and a learning rate scheduler to reduce the learning 
        rate every few epochs.
        </p>

        <div className = {inView5 || first5 === false ? "csRow-zoom":"csRow"} ref = {ref5}
          style = {windowMode === 3 ? {flexDirection: "column", rowGap: 15}:{columnGap: 30}}
        >
          <img src = {tkLoss} alt = "JR Loss" className = "csImgSmall"
            style = {windowMode === 3 ? {width: "74vw", } : {} }/>
          <img src = {tkAcc} alt = "JR Accuracy" className = "csImgSmall"
            style = {windowMode === 3 ? {width: "74vw", } : {} }/>
        </div>

        <p className = {inView6 || first6 === false ? "csText-zoom":"csText"} ref = {ref6}>
        While the training loss reduced and the validation loss was rather stagnant, the accuracy on the testing data is 73% for 
        both Kanye West and Taylor Swift files. The learning rate was relatively low, as the model would otherwise be relatively 
        unstable.
        </p>

        <div className = {inView7 || first7 === false ? "csRow-zoom":"csRow"} ref = {ref7}
          style = {windowMode === 3 ? {flexDirection: "column", rowGap: 15}:{columnGap: 30}}
        >
          <img src = {jrLoss} alt = "JR Loss" className = "csImgSmall"
            style = {windowMode === 3 ? {width: "74vw", } : {} }/>
          <img src = {jrAcc} alt = "JR Accuracy" className = "csImgSmall"
            style = {windowMode === 3 ? {width: "74vw", } : {} }/>
        </div>

        <p className = {inView8 || first8 === false ? "csText-zoom":"csText"} ref = {ref8}>
        The model performed relatively similarly for James Dashner vs Rick Riordan. However, unexpectedly the model was able to 
        perform better with 73% accuracy for James Dashner and 83% for Rick Riordan.
        <br></br>
        <br></br>
        There are strong ethical implications with an NLP model that can successfully de-anonymize documents. This could be used to 
        troll, doxx, or stalk those that use the internet's anonymity defensively. Worse, Authoritarian Governments can track down 
        anonymous jouranlists. Thus, a solution would be to combine the model with a hate speech classifier so that the model can 
        only be used to track hate speech. As the model becomes popular, it can be expanded to be used for other applications.
        </p>
      
    </div>
    );
  }
  
  export default Authorship;
  