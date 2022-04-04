import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import {FaHouzz } from 'react-icons/fa';

function Header(){


     return (
     
        <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <div class="navbar-brand" > <FaHouzz  className='logo'/> FlatAndFlatMates</div> 
          </div>

          <span class="nav navbar-nav">
              <ul class="list-inline">
            <li class="active list-inline item"><Link to="/">Home</Link></li>
            <li class="list-inline item"><Link to="/search">Search</Link></li>
            <li class="list-inline item"><Link to="/about">About Us</Link></li>
            <li class="list-inline item"><Link to="/contact">Contact Us</Link></li>
            </ul>
            </span>
          <span class="nav navbar-nav navbar-right">
          <ul class="list-inline">
            <li class="list-inline item"><Link to="/register"><span class="glyphicon glyphicon-user"></span>Register</Link></li>
            <li class="list-inline item"><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
          </ul>
          </span>
        </div>
      </nav>
      
 );
}

export default Header