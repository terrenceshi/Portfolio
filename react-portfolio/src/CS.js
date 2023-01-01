import './CS.css';

import Article from "./components/Article.js"
import ExternalArticle from "./components/externalArticle.js"
import b2n from "./assets/cs_thumbs/b2n.png"
import aa from "./assets/cs_thumbs/authorship_comp.jpg"
import monaLisa from "./assets/cs_thumbs/mona_lisa.jpg"

function CS() {
    return (
      <div className="CS">
        <ExternalArticle imageSrc={b2n}
          link = {"https://books2nooks.ml"}
          title = "Books2Nooks"
          text = {"Books2Nooks takes a user inputted book and generates a music playlist. \
                  We collected 16k books and 400k songs from various datasets. I cleaned the data by ensuring \
                  that all songs were in english, and making sure that each song could be found on spotify. Next, \
                  all book descriptions and song lyrics were converted to vectors using NLP sentence transformers. \
                  We then constructed a matrix where each element is the cosine similarity between every single book \
                  and song. When the user selects a book, we take the top 15 most similar songs and make it a playlist."} />

        <Article imageSrc={aa}
          link = {"/CS/Authorship"}
          title = "Authorship Attribution"
          text = {"Authorship Attribution is the task of guessing the author of an anonymous article. We trained our \
                  Recurrent Neural Network on famous datasets and manually selected passages such as lyrics from artists \
                  such as Kanye West and Taylor Swift and passages from young adult authors such as Rick Riordan and James \
                  Dashner, as we wanted our model to be robust. Identifying passages between West and Swift served to be a \
                  hypothetically easier test, while Riordan vs Dashner served to be a more difficult one. Our testing accuracies \
                  range from 70-80%."} />

        <Article imageSrc={monaLisa}
          link = {"/CS/Compression"}
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
  