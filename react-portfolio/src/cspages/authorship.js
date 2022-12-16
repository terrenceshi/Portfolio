import Paper from '@mui/material/Paper';
import './cspage.css';

import rnn from "./../assets/cs_thumbs/rnn.png"
import tkLoss from "./../assets/cs_thumbs/taylorKayneLoss.png"
import tkAcc from "./../assets/cs_thumbs/taylorKayneAcc.png"
import jrLoss from "./../assets/cs_thumbs/jamesRickLoss.png"
import jrAcc from "./../assets/cs_thumbs/jamesRickAcc.png"

function authorship() {
    return (
      <div className="authorship">
        <Paper elevation={2} className = "articlePaper">
          <h2 className = "csTitle">Authorship Attribution</h2>

          <p className = "csText">Written language plays a significant role in our society. 
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

          <img src = {rnn} alt = "rnn" className = "csImg"/>

          <p className = "csText">
          For the model, I used an RNN (Recurrent Neural Network), a neural network that takes information from previous inputs, 
          giving it the quality of "memory" and making it effective for NLP related tasks such as this one. Additionally, I used 
          an AdamW Optimizer, as it is typically the most effective optimizer and a learning rate scheduler to reduce the learning 
          rate every few epochs.
          </p>

          <div className = "csRow">
            <img src = {tkLoss} alt = "Taylor Kanye Loss" className = "csImgSmall"/>
            <img src = {tkAcc} alt = "Taylor Kanye Accuracy" className = "csImgSmall"/>
          </div>

          <p className = "csText">
          While the training loss reduced and the validation loss was rather stagnant, the accuracy on the testing data is 73% for 
          both Kanye West and Taylor Swift files. The learning rate was relatively low, as the model would otherwise be relatively 
          unstable.
          </p>

          <div className = "csRow">
            <img src = {jrLoss} alt = "Taylor Kanye Loss" className = "csImgSmall"/>
            <img src = {jrAcc} alt = "Taylor Kanye Accuracy" className = "csImgSmall"/>
          </div>

          <p className = "csText">
          The model performed relatively similarly for James Dashner vs Rick Riordan. However, unexpectedly the model was able to 
          perform better with 73% accuracy for James Dashner and 83% for Rick Riordan.
          <br></br>
          <br></br>
          There are strong ethical implications with an NLP model that can successfully de-anonymize documents. This could be used to 
          troll, doxx, or stalk those that use the internet's anonymity defensively. Worse, Authoritarian Governments can track down 
          anonymous jouranlists. Thus, a solution would be to combine the model with a hate speech classifier so that the model can 
          only be used to track hate speech. As the model becomes popular, it can be expanded to be used for other applications.
          </p>

        </Paper>
        
      </div>
    );
  }
  
  export default authorship;
  