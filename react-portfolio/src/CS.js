import './CS.css';
import { useState, useEffect} from 'react';

import Article from "./components/Article.js"
import b2n from "./assets/cs_thumbs/b2n.png"
import aa from "./assets/cs_thumbs/authorship_comp.jpg"
import monaLisa from "./assets/cs_thumbs/mona_lisa.jpg"

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
function CS() {
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

    if(windowMode === 0){

    } else if(windowMode === 1){

    } else if(windowMode === 2){

    }
  })

  return (
    <div className="CS">
      <Article imageSrc={b2n}
        link = {"https://books2nooks.ml"}
        external = {true}
        windowMode = {windowMode}
        title = "Books2Nooks"
        text = {windowMode === 0 ? 
                "Books2Nooks takes a user inputted book and generates a music playlist. \
                We collected 16k books and 400k songs from various datasets. I cleaned the data by ensuring \
                that all songs were in english, and making sure that each song could be found on spotify. Next, \
                all book descriptions and song lyrics were converted to vectors using NLP sentence transformers. \
                We then constructed a matrix where each element is the cosine similarity between every single book \
                and song. When the user selects a book, we take the top 15 most similar songs and make it a playlist."
                :
                "Books2Nooks takes a user inputted book and generates a music playlist. \
                We got thousands of books descriptions and songs lyrics and converted them into vectors using sentence \
                transformers. Then, we constructed a matrix where each element is the cosine similarity between every \
                book and song. The top 15 most similar songs are returned."
              
              } />

      <Article imageSrc={aa}
        link = {"/CS/Authorship"}
        external = {false}
        windowMode = {windowMode}
        title = "Authorship Attribution"
        text = {"Authorship Attribution is the task of guessing the author of an anonymous article. We trained our \
                Recurrent Neural Network on famous datasets and manually selected passages such as lyrics from artists \
                such as Kanye West and Taylor Swift and passages from young adult authors such as Rick Riordan and James \
                Dashner, as we wanted our model to be robust. Identifying passages between West and Swift served to be a \
                hypothetically easier test, while Riordan vs Dashner served to be a more difficult one. Our testing accuracies \
                range from 70-80%."} />

      <Article imageSrc={monaLisa}
        link = {"/CS/Compression"}
        external = {false}
        windowMode = {windowMode}
        title = "Image Compression"
        text = {"I perform image compression using Singular Value Decomposition (SVD) as well as Gaussian Mixture Modeling (GMM). \
                An image is essentially a matrix of pixel values. SVD is the act of reducing a matrix into three smaller matrices \
                using linear algebraic techniques. We then reconstruct the original image's matrix using the three smaller matrices \
                but to a smaller size. GMM groups certain pixels by clusters. We initialize each cluster randomly \
                and determine the probability each pixel goes to each cluster. We then update each cluster's statistics with the new pixels \
                we selected. The process is repeated until we are satisfied."} />

    </div>
  );
}

export default CS;
  