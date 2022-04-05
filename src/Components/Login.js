import React, { useState } from "react";

function Login(){

    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    
    var handleSubmit = (event) =>{
        event.preventDefault(); //Stop the form default action that is to submit the data and reload the page
        var login = { //creating JS object of movie data
            userName : event.target.userName.value,
            password : event.target.password.value,
        }
        console.log(login);
        console.log(JSON.stringify(login))
    }

    return(
        
        <div className="row justify-content-center box-height">
            <div className="col-6 align-self-center shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="m-5">
                    <h4><b><p>Login..</p></b></h4>
                        <div className="mb-3">
                            <label htmlFor="name" className="text-dark">UserName</label>
                            <input type="text" className="form-control" name="name" placeholder="Enter your Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="text-dark">Password</label>
                            <input type="text" className="form-control" name="password" placeholder="Enter password"/>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <br/>
                        <div className="mb-3 text-center">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>    
            </div>
        </div>

    )
}

export default Login