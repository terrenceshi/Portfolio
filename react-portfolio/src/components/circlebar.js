import './circlebar.css';
import React, { useEffect } from 'react';

function Circlebar({ percent, skill }) {

  return (
    <div className="Circlebar">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full-2">
              <div className="fill-2"/>
            </div>
            <div className="mask half">
              <div className="fill-2"/>
            </div>
            <div className="inside-circle"/>
          </div>
        </div>

        <p>{skill}</p>
    </div>
  );
}

export default Circlebar;
