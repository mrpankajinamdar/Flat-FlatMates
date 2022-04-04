import React from "react";

function Login() {


    return (

        <div className="row justify-content-center box-height">
            <div className="col-6 align-self-center shadow-lg">
                <div class="w3-container w3-padding-32" id="login" />
                <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Login here</h3>
                <h5><p></p></h5>
                <form action="/search.js" target="_blank" />
                <input class="w3-input w3-border" type="text" placeholder="UserName" required name="UserName" style={{ maxWidth: "600px" }} />
                <input class="w3-input w3-section w3-border" type="text" placeholder="Password" required name="Password" style={{ maxWidth: "600px" }} />
                <button class="w3-button w3-black w3-section" type="submit">
                    <i class="fa fa-paper-plane"></i> Login
                </button>
            </div>
        </div>


    )
}

export default Login