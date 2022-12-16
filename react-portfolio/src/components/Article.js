import './Article.css';
import Paper from '@mui/material/Paper';

const Article = ({ imageSrc, link, text, title }) => {

    return (
        <div className = "article">
            <Paper elevation={2} className = "articlePaper">
                <h2 className = "articleTitle">{title}</h2>
                <div className = "row">
                    <p className = "articleText">{text} <br></br><br></br>
                        <a href={link}>Read more</a> 
                    </p>
                    
                    <a href = {link}>
                        <img src = {imageSrc} alt = "pic" className = "article_img"/>
                    </a>
                    
                </div>
            </Paper>
            
            
        </div>
    )
}
export default Article;
