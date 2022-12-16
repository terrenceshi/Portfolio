import Paper from '@mui/material/Paper';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Paper elevation={2} className = "bioPaper">
        <p className = "bio">I'm studying for my Master's Degree in CS at Georgia Tech. On this website, you'll find my portfolios for art, music, and CS. My skills are well suited towards software development, NLP, 3D modeling, graphic design, and digital art.</p>
      </Paper>

    </div>
  );
}

export default Home;
