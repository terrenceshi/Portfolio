import './skillbar.css';
import { useRef, useState, useEffect } from 'react';

function SkillsBar ({percent, title}) {
    useEffect(() => {
        const skillRef = document.getElementById("bar-"+title)

        skillRef.style.width = percent + "%"
    })

    return (
        <div className="container">

            <div className="skill-box">
                <p>{title}</p>
                <div className="skill-bar">
                    <span className="skill-per css" id = {`bar-${title}`}>
                    </span>
                </div>
            </div>
            
        </div>
    )
 }

 export default SkillsBar;