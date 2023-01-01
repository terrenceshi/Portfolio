import './Article.css';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

const Article = ({ imageSrc, link, text, title }) => {

    return (
        <div className = "article">
            <Paper elevation={2} className = "articlePaper">
                <h2 className = "articleTitle">{title}</h2>
                <div className = "row">
                    <p className = "articleText">{text} <br></br><br></br>
                        <Link id = "link1" className = "linkText" to={link}>Read more</Link> 
                    </p>
                    
                    <Link id = "link2" to = {link}>
                        <img src = {imageSrc} alt = "pic" className = "article_img"/>
                    </Link>
                    
                </div>
            </Paper>
            
            
        </div>
    )
}
export default Article;
