import './skillbar.css';

function SkillsBar ({percent}) {
    return (
        <div className="container">

            <div className="skill-box">
                <h3>CSS</h3>
                <div className="skill-bar">
                    <span className="skill-per css" width = "10%">
                    </span>
                </div>
            </div>
            
        </div>
    )
 }

 export default SkillsBar;