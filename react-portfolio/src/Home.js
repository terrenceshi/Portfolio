import Paper from '@mui/material/Paper';
import './Home.css';
import Skillbar from "./components/skillbar.js"

function Home() {
  return (
    <div className="Home">
      <Paper elevation={2} className = "bioPaper">
        <h2 className = "bioHeader">How Are You?</h2>
        <p className = "bio">
          I'm a CS grad student at Georgia Tech. There, I'm studying Machine Learning and Computer Graphics.
          Hence, I have experience working with Pytorch in projects ranging from Image Classification to 
          Natural Language Processing. 
          <br></br>
          <br></br>
          Like any other CS student, I also have a strong background in software development. In terms of backend,
          I've worked with Django and Flask. React and Angular for frontend. While I'm proficient at both, I'd say
          I'm better at frontend development, as my skills are bolstered by my background in Art and Graphic Design.
        </p>
        <Skillbar percent = {95}/>
      </Paper>

      <Paper elevation={2} className = "bioPaper">
        <h2 className = "bioHeader" >Art</h2>
        <p className = "bio">
          Drawing has always been a strong passion of mine, even when I was making ugly doodles at daycare. I mainly
          draw faces and as of recent, have been experimenting with a new geometric and sharp edge style. With more
          time and practice, I aim to become proficient at many different styles and to then create my own by picking
          and choosing elements from different ones.
        </p>
      </Paper>

      <Paper elevation={2} className = "bioPaper">
        <h2 className = "bioHeader" >Music</h2>
        <p className = "bio">
          You also will find some small mp3's in the music section. Not to brag too much, but I'm a little bit of a devil
          behind the piano keys and guitar fretboard. While I surely don't practice as much as I should, I occasionally produce
          stuff on Fruity Loops Studio. 
        </p>
      </Paper>

      <Paper elevation={2} className = "bioPaper">
        <h2 className = "bioHeader">This is my design.</h2>
        <p className = "bio">
          While many of these skills are very far from each other, they all share a positive correlation with a good plan. Over 
          my adolescence, I learned that what separates an amateur from a virtuoso is their design. Every line of code, element 
          in the composition, or note in the piece is an intentional decision. What I'm saying is that this wide array of skills 
          I've gathered over the years have honed my ability to make a plan and ensure that every aspect of the project is deliberate 
          in working towards my design.
        </p>
        
      </Paper>

      

    </div>
  );
}

export default Home;
