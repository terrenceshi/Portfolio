import './Article.css';
import Paper from '@mui/material/Paper';

const ExternalArticle = ({ imageSrc, link, text, title }) => {

    return (
        <div className = "article">
            <Paper elevation={2} className = "articlePaper">
                <h2 className = "articleTitle">{title}</h2>
                <div className = "row">
                    <p className = "articleText">{text} <br></br><br></br>
                        <a id = "link1" className = "linkText" href={link}  target="_blank" rel="noopener noreferrer">Read more</a> 
                    </p>
                    
                    <a id = "link2" href = {link} target="_blank" rel="noopener noreferrer">
                        <img src = {imageSrc} alt = "pic" className = "article_img"/>
                    </a>
                    
                </div>
            </Paper>
            
            
        </div>
    )
}
export default ExternalArticle;
