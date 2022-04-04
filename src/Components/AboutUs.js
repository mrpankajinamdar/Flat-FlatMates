import React from "react";
import pic from "./images/team31.jpg";

function AboutUs(){


     return (

     <>
      <header class="w3-display-container w3-content w3-wide justify-content-center" style={{maxWidth:"1500px"}} id="about">
      <img className="center" src={pic} alt="Team31" style={{width:"90%" , height:"500px"}}/>
      <h2>Who are we ???</h2>
      <div>
        <p/><p/>
        <p></p>
        <h2>We are the team of 6 people who are currently working on this project
        <p>The project is about finding a flat or flatmate in most popular cities in the country</p>    
        </h2>      
        <p></p>
        <p></p>

       </div>
     </header>
    </>

     )
}

export default AboutUs