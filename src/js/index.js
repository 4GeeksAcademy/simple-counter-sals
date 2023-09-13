//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';


// include your styles into the webpack bundle
import "../styles/index.css";

// //import your own components
// import Home from "./component/home.jsx";

function SimpleCounter(props) {
    return (<div className="ContadorGrande">
        <div className="calendario">
            {/* <i class="fa-solid fa-clock"></i> */}
        </div>
        <div className="cuatro">{props.digitFour % 10}</div>
        <div className="tres">{props.digitThree % 10}</div>
        <div className="dos">{props.digitTwo % 10}</div>
        <div className="uno">{props.digitOne % 10}</div>
    </div>);
}

SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter = 0;
setInterval(function(){
    const four = Math.floor (counter/1000);
    const three = Math.floor (counter/100);
    const two = Math.floor (counter/10);
    const one = Math.floor (counter/1);
    counter++;

    
    ReactDOM.render(<SimpleCounter digitOne= {one} digitTwo= {two} digitThree= {three} digitFour= {four}/>, 
    document.querySelector("#app")
    );
},1000)
