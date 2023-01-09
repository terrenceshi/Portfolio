import './slider.css';

function Slider({sliderArr, x, bannersLoaded, setBannersLoaded}) {
  //const [x, setX] = useState(0)

  /*
  const goLeft = () =>{
    setX(x + 100)
  }
  const goRight = () =>{
    setX(x - 100)
  }
  */

  return (
    <div className = "sliderContainer">
      <div className="slider">
        {
          sliderArr.map((imgItem,index)=>{
            return(
              //x here corresponds to which image you have open in the slider. 0 = first. -100 = second. -200 = third. etc.
              <div key = {index} className = "slide" style = {{transform: `translateX(${x}%)`}}>
                <img src = {imgItem} alt = "slideImg" className = "slideImg" 
                  onLoad={() => setBannersLoaded(bannersLoaded += 1)} 
                />
              </div>
            )
          })
        }
      </div>

      {/* 
        <div className = "testButtons">
          <button onClick = {goLeft} style = {{zIndex: 10}}>test left</button>
          <button onClick = {goRight} style = {{zIndex: 10}}>test right</button>
        </div>
      */}

      
      
    </div>

    
  );
}

export default Slider;
