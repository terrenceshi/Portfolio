import Paper from '@mui/material/Paper';
import './cspage.css';

import svd from "./../assets/cs_thumbs/svd_white.png"
import gmm from "./../assets/cs_thumbs/gmm_white.png"

function compression() {
    return (
      <div className="compression">
        <Paper elevation={2} className = "articlePaper">
          <div className = "articleContent">
            <h2 className = "csTitle">Image Compression</h2>

            <p className = "csText">In an older project, I used various techniques I learned from my 
            intro to ML class in order to compress images. None of these methods were implemented with 
            the help of pre-existing implementations from packages such as sklearning.
            <br></br>
            <br></br>
            This first method utilizes SVD (Singular Value Decomposition). An image is essentially a matrix 
            of pixel values. We then decompose the matrix into three different matrices using linear algebra 
            techniques and essentially reduce the size of the matrices. For colored images, you store red, green, 
            and blue values into three matrices and have to perform SVD for each matrix. Here are the results:
            </p>

            <img src = {svd} alt = "svd" className = "csImg"/>

            <p className = "csText">
            This next method uses GMM (Gaussian Mixture Modeling). It utilizes clusters and gives each point a probability 
            the point is in each cluster. First, GMM estimates which clusters each point is most likely to be a part of. 
            Afterwards, it figures out which cluster each point belongs to by calculating and maximizing the likelihood a point 
            belongs to a cluster. Here are the results:
            </p>

            <img src = {gmm} alt = "gmm" className = "csImg"/>

          </div>

        </Paper>
      </div>
    );
  }
  
  export default compression;
  