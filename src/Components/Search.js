import React from "react";
import pic1 from "./images/flat1.jpg";
import pic2 from "./images/flat2.jpeg";

function Search(){
return(


    
        

    <div class="container-fluid">
        <div className="row">
        <h2 class="center w3-border-bottom w3-border-light-grey w3-padding-16">What are you searching for ??</h2>
   
            <div className="col-lg text-center">
                <img src={pic1} alt="flat" style={{width:"100%",height:"550px"}}/>
                <button class="btn btn-primary" type="submit">Flat</button>    
            </div>
            <div className="col-lg text-center">
                <img src={pic2} alt="flatmate" style={{width:"100%",height:"550px"}}/>
                <button class="btn btn-primary" type="submit">Flatmates</button>    
            </div>
            <div>
                <h2/><h2/><h2/><h1/>
            </div>
            <div>
                <h2/><h2/><h2/><h1/>
            </div>
        </div>
    </div>

)


}


export default Search