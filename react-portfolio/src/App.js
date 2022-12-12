import './App.css';
import testImg from "./assets/test.jpg"

import { useInView } from 'react-intersection-observer';

function App() {

  const {ref, inView, entry} = useInView({
    threshold: 0.4,
  });

  return (
    <div className="App">
      <div className = 'bannerContainer'>
        <div className = "banner">
          {/* put an image here later */}

          <h1 className = "banner_title">
            Hi. <br></br>
            I'm Terrence.
          </h1>
          
        </div>
      </div>
      
      <div className = "bio">
        <p>hi my name is terrence i like bimm uh text</p>
      </div>

    </div>
  );
}

export default App;
