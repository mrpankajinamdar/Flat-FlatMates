import houses from "./House";
import React from "react";
import { Link } from "react-router-dom";

function MyProperties() {
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
      };
    return (
        <div class="container main-section">
            <div class="row center ">
                <div class="col-lg-4 shadow-lg">
                    <div class="section border bg-white rounded p-2">
                        <div class="row">
                            <div class="col-lg-12 img-section">
                                <img src="http://nicesnippets.com/demo/re-image6.jpg" class="p-0 m-0 res-ponsive" />
                                <span class="badge badge-danger add-sens p-2 rounded-0">NOW</span>
                            </div>
                            <div class="col-lg-12 sectin-title">
                                <h1 class="pt-2 pb-2">{houses[0].title}</h1>
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-2">
                                        <span class="badge badge-success p-2">Rs.{houses[0].price}</span><br />
                                        <span class="glyphicon glyphicon-phone-alt">{houses[0].phone}</span>
                                        <i class="fa-solid fa-bed-front"></i>
                                        <i src="https://img.icons8.com/color/344/bed.png"></i>
                                    </div>
                                    <div class="col-lg-10 text-right">

                                        <span><i class="fas fa-star"> add bed icon + vacancy</i></span>
                                        <span><i class="fas fa-star">gender</i></span>
                                        <span><i class="fas fa-star-half-alt"></i></span><br />
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div class="col-lg-12 section-detail">
                                <p class="ml-2">{houses[0].address}</p>
                                <p class="ml-2">{houses[0].details}</p>
                            </div>
                            <div class="col-lg-12 pb-2">
                                <div class="row justify-content-center" >

                                    <div className="mb-3 text-center ">
                                        <button className="btn btn-primary"> <Link to="/dashboard" style={linkStyle}>Update</Link></button> &nbsp;
                                        <button className="btn btn-danger"> <Link to="/dashboard" style={linkStyle}>Remove</Link></button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default MyProperties;