import React, { useState } from "react";
import CountUp from "react-countup"; // npm install react-countup  // github.com/glennreyes/react-countup

function Counter() {
    const [end, setEnd,] = useState(0);
    function randomNumber(min, max) {return Math.floor(Math.random() * (max - min + 1) ) + min;}
    function addMore() {setEnd(end + randomNumber(2,5))}; // Hver gang man klikker, så stiger tælleren med et tilfældigt tal mellem 2 og 5

    return (
      <div className="Counter">
        <div id="TreesPlanted" onClick={addMore} style={{cursor: 'default'}}>
          <CountUp end={43152134 + end} duration={6} separator="," preserveValue />
        </div>
      </div>
    );
  }
  
  export default Counter