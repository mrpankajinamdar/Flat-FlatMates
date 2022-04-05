import React from "react";

function Contact(){


    return(

    <>
        <div class="w3-container w3-padding-32" id="contact"/>
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Contact Us</h3>
        <h5><p>Get in touch with us</p></h5>
        <form action="/action_page.php" target="_blank"/>
        <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name" style={{maxWidth:"600px"}}/>
        <input class="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email" style={{maxWidth:"600px"}}/>
        <input class="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject" style={{maxWidth:"600px"}}/>
        <input class="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment" style={{maxWidth:"600px"}}/>
        <button class="w3-button w3-black w3-section" type="submit">
            <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
    

      </>
    )
}

export default Contact