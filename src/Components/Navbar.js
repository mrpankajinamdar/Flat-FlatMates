import React from "react";
function Navbar(){


     return (


<div className="w3-top">
  <div className="w3-bar w3-white w3-wide w3-padding w3-card">
    <h3>
    <a href="#home" className="w3-bar-item w3-button"><b>Flat and Flatmates</b></a>
    </h3>
    <div className="w3-right w3-hide-large">
      <a href="#home" className="w3-bar-item w3-button">Home</a>
      <a href="#search" className="w3-bar-item w3-button">Search For</a>
      <a href="#register" className="w3-bar-item w3-button">Register</a>
      <a href="#login" className="w3-bar-item w3-button">Login</a>
      <a href="#about" className="w3-bar-item w3-button">About us</a>
      <a href="#contact" className="w3-bar-item w3-button">Contact</a>

    </div>
  </div>
</div>
     )
}

export default Navbar