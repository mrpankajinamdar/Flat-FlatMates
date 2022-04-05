import "./dashboard.css";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import  Button , { ButtonProps } from "@mui/material/Button";
import { height } from "@mui/material/node_modules/@mui/system";
function Dashboard() {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
      };
      
      

    return (
        <div id="div1" className="row justify-content-center box-height">
            <div className="col-6 align-self-center shadow-lg">
                <form>
                    <div className="m-5">
                    <h4><b><p>User Profile</p></b></h4>
                        <div className="mb-3">
                            <label htmlFor="userName" className="text-dark">UserName</label>
                            <input type="text" className="form-control" name="userName" placeholder="Enter user Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="text-dark">Email</label>
                            <input type="text" className="form-control" name="email" placeholder="Enter your email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobileNo" className="text-dark">Mobile No</label>
                            <input type="text" className="form-control" name="mobileNo" placeholder="Enter your mobile no"/>
                        </div>
                        <br/>
                        <div className="row">
                        <div className="mb-3 text-center ">
                            <button className="btn btn-primary"> <Link to="/" style={linkStyle}>Update</Link></button> &nbsp;
                            <button className="btn btn-danger"> <Link to="/" style={linkStyle}>Delete Account</Link></button>
                        </div>
                        </div>
                        <div className="row">
                        <div className="mb-3 text-center">
                            <button className="btn btn-primary ms-10"> <Link to="/addproperty" style={linkStyle}>Add a property</Link></button> &nbsp;
                            <button className="btn btn-primary"> <Link to="/myproperties" style={linkStyle}>Show my properties</Link></button>
                        </div>
                        </div>
                    </div>
                </form>    
            </div>
        </div>
    )
}
export default Dashboard;