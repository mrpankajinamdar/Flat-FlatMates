import "./properties.css";
import houses from "./House";
import "./images/bed-solid.svg"

function ShowProperties() {

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
                                    <div class="col-lg-6">
                                        <a href="#" class="btn btn-danger btn-block red btn-sm">Apply For Rent</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="col-lg-4">
                    <div class="section border bg-white rounded p-2">
                        <div class="row">
                            <div class="col-lg-12 img-section">
                                <img src="http://nicesnippets.com/demo/re-image4.jpg" />
                                <span class="badge badge-danger add-sens p-2 rounded-0">NOW</span>
                            </div>
                            <div class="col-lg-12 sectin-title">
                                <h1 class="pt-2">This Is a Nice Palace</h1>
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-2">
                                        <span class="badge badge-success p-2">$ 300</span>
                                    </div>
                                    <div class="col-lg-10 text-right">
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star-half-alt"></i></span><br />
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div class="col-lg-12 section-detail">
                                <p class="ml-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor.</p>
                                <hr />
                            </div>
                            <div class="col-lg-12 pb-2">
                                <div class="row justify-content-center">
                                    <div class="col-lg-6">
                                        <a href="#" class="btn btn-danger btn-block btn-sm">Apply For Rent</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-4">
                    <div class="section border bg-white rounded p-2">
                        <div class="row">
                            <div class="col-lg-12 img-section">
                                <img src="http://nicesnippets.com/demo/re-image5.jpeg" />
                                <span class="badge badge-danger add-sens p-2 rounded-0">NOW</span>
                            </div>
                            <div class="col-lg-12 sectin-title">
                                <h1 class="pt-2">This Is a Nice Palace</h1>
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-2">
                                        <span class="badge badge-success p-2">$ 300</span>
                                    </div>
                                    <div class="col-lg-10 text-right">
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star-half-alt"></i></span><br />
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div class="col-lg-12 section-detail">
                                <p class="ml-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor.</p>
                                <hr />
                            </div>
                            <div class="col-lg-12 pb-2">
                                <div class="row justify-content-center">
                                    <div class="col-lg-6">
                                        <a href="#" class="btn btn-danger btn-block btn-sm">Apply For Rent</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div> 
        </div>
    )
}
export default ShowProperties;