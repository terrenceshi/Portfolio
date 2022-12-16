import Article from "./components/Article.js"
import b2n from "./assets/cs_thumbs/b2n.png"
import aa from "./assets/cs_thumbs/authorship_comp.jpg"
import monaLisa from "./assets/cs_thumbs/mona_lisa.jpg"

function CS() {
    return (
      <div className="CS">
        <Article imageSrc={b2n}
          link = {"https://books2nooks.ml"}
          title = "Books2Nooks"
          external = "True"
          text = {"Books2Nooks takes a user inputted book and generates a music playlist. \
                  We collected 16k books and 400k songs from various datasets. I cleaned the data by removing \
                  null valued songs, ensuring that all songs were in english, and making sure that each song \
                  could be found on spotify. Next, all book descriptions and song lyrics were converted to \
                  vectors using NLP sentence transformers. We then constructed a matrix where each element is \
                  the cosine similarity between every single book and song. When the user selects a book, we \
                  take the top 15 most similar songs and make it a playlist. However, due to the large size \
                  of the dataset, we need to use matrix factorization to reconstruct the matrix in our \
                  calculations."} />

        <Article imageSrc={aa}
          link = {"/CS/Authorship"}
          title = "Authorship Attribution"
          text = {"Authorship Attribution is the task of guessing the author of an anonymous article. While \
                  there are numerous applications such as unveiling whoever wrote hate speech, harrassment, \
                  or terrorist threats, Authorship Attribution can also be used to identify journalists \
                  reporting against fascist governments. Thus, it is important this technology does not fall \
                  into the wrong hands or has counter measures. We trained our Recurrent Neural Network on \
                  famous datasets, manually selected lyrics from artists such as Kanye West and Taylor \
                  Swift, and passages from young adult authors such as Rick Riordan and James Dashner, as we \
                  wanted our model to be robust. Our testing accuracies range from 70-80%."} />

        <Article imageSrc={monaLisa}
          link = {"/CS/Compression"}
          title = "Image Compression"
          text = {"I perform image compression using Singular Value Decomposition as well as Gaussian Mixture Modeling. \
                  An image is essentially a matrix of pixel values, right? Singular Value Decomposition is the act of reducing \
                  a matrix into three smaller matrices using linear algebraic techniques. We then reconstruct the original \
                  image's matrix using the three smaller matrices but to a smaller size. Gaussian Mixture Modeling groups certain pixels \
                  by clusters. We initialize each cluster randomly and determine the probability each pixel goes to each cluster. \
                  We then update each cluster's statistics with the new pixels we selected. We then repeat the process until we are satisfied \
                  or no more changes are made to the clusters."} />
  
      </div>
    );
  }
  
  export default CS;
  