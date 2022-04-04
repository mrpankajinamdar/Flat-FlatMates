import React, { useState } from "react";

function Register(){

    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [mobileNo,setMobileNo] = useState("");
    
    var handleSubmit = (event) =>{
        event.preventDefault(); //Stop the form default action that is to submit the data and reload the page
        var register = { //creating JS object of movie data
            userName : event.target.userName.value,
            email : event.target.email.value,
            password : event.target.password.value,
            confirmPassword : event.target.confirmPassword.value,
            mobileNo : event.target.mobileNo.value
        }
        console.log(register);
        console.log(JSON.stringify(register))
    }

    return(
        
        
        //<div className="col-3 shadow-lg">
        //<div className="register"></div>
        <div className="row justify-content-center box-height">
            <div className="col-6 align-self-center shadow-lg">
                <form onSubmit={handleSubmit} style={{backgroundColor:"white"}}>
                    <div className="m-5">
                    <h2><b><p>Register</p></b></h2>
                    <br></br>
                        <div className="mb-3">
                            <label htmlFor="userName" className="text-dark">UserName</label>
                            <input type="text" className="form-control" name="userName" placeholder="Enter user Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="text-dark">Email</label>
                            <input type="text" className="form-control" name="email" placeholder="Enter your email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="text-dark">Password</label>
                            <input type="text" className="form-control" name="password" placeholder="Enter password"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="text-dark">Confirm Password</label>
                            <input type="text" className="form-control" name="confirmPassword" placeholder="Confirm password"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobileNo" className="text-dark">Mobile No</label>
                            <input type="text" className="form-control" name="mobileNo" placeholder="Enter your mobile no"/>
                        </div>
                        <br/>
                        <div className="mb-3 text-center">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>    
            </div>
        </div>

    )
}

export default Register