import './circlebar.css';
import React, { useEffect } from 'react';

function Circlebar({ percent, skill }) {

  return (
    <div className="Circlebar">
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask full-2">
              <div class="fill-2"/>
            </div>
            <div class="mask half">
              <div class="fill-2"/>
            </div>
            <div class="inside-circle"/>
          </div>
        </div>

        <p>{skill}</p>
    </div>
  );
}

export default Circlebar;
