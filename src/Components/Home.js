import Search from "./Search";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Register from "./Register";
import Login from "./Login";
import { useState } from "react";
import FirstPage from "./FirstPage";

function Home() {
//   var path=<div>
//   <Header/>
//   <Contact/>
//   <AboutUs/>
// </div>;

  var [btmComponent,setBtmComponent]=useState(<FirstPage/>)

  return (
    <div className="container-fluid">
      <div>
        <div className="row">
          <div className="col">
            <nav class="navbar navbar-light bg-light">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <span class="navbar-brand mb-3 " className="text-success"><p><em><h1 class="display-4" onClick={() => {setBtmComponent(<FirstPage/>)}}><b>Flat and Flatmates</b></h1></em></p></span>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <nav class="navbar navbar-light bg-light">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <span class="nav-link mb-3 h3 shadow" onClick={() => {setBtmComponent(<FirstPage/>)}}>Home</span>
                </li>
              </ul>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <span class="nav-link mb-3 h3 shadow" onClick={() => {setBtmComponent(<Search/>)}}>Search</span>
                </li>
              </ul>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <span class="nav-link mb-3 h3 shadow" onClick={() => {setBtmComponent(<Register/>)}}>Register</span>
                </li>
              </ul>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <span class="nav-link mb-3 h3 shadow" onClick={() => {setBtmComponent(<Login/>)}}>Login</span>
                </li>
              </ul>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <span class="nav-link mb-3 h3 shadow" onClick={() => {setBtmComponent(<AboutUs/>)}}>About Us</span>
                </li>
              </ul>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <span class="nav-link mb-3 h3 shadow" onClick={() => {setBtmComponent(<Contact/>)}}>Contact</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div>
        {btmComponent}
      </div>

    </div>
  );
}

export default Home;
