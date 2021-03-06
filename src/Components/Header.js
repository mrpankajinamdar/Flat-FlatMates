import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import  Button , { ButtonProps } from "@mui/material/Button";
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import { useGithubBtnStyles } from '@mui-treasury/styles/button/github';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import { ContactSupport, Dashboard, DashboardCustomize } from "@mui/icons-material";
// import { styled } from '@mui/material/styles';
import { createTheme , ThemeProvider} from '@mui/material/styles';
import { AppBar, Grid, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import { grey } from '@mui/material/colors';
import logo from "./images/flatandflatmates.png"


import './Header.css';
import Search from "@mui/icons-material/Search";
// import {FaHouzz } from 'react-icons/fa';

function Header(){


const theme = createTheme({
  palette: {
    primary: {
      main:  grey[500],
      contrastText: '#fff',
    },
    secondary: {
      main: grey[50],
      contrastText: '#000',
    },
  },
});

const classes = createTheme({
  box: {
    height: 100,
    display: "flex",
    border: "1px solid black",
    padding: 8
  },
  centerBox: {
    justifyContent: "center",
    alignItems: "center"
  },
  customizeToolbar: {
    minHeight: 30
  }


})

const NavUnlisted = styled.ul`
   text-decoration: none;
 `;

const linkStyle = {
   margin: "1rem",
   textDecoration: "none",
   color: 'white'
 };
  
  const styles = useGradientBtnStyles();
  const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 1 });
     
  return (
     <div className="container-fluid">
       <div class="row">
      <ThemeProvider theme={theme}>
        <AppBar color="primary" position="static" sx={{height:'60px'}}>
          <Toolbar disableGutters>
            <Typography variant="h3">
              <img src={logo} style={{height:"50px" , width : "200px"}}/>
            {/* <FaHouzz  className='logo'/> */}
            </Typography>
          
          <div class="container-fluid">

          <Box  component="div" m={1}  className={`${classes.centerBox} ${classes.box}`}>
          
          <NavUnlisted>
          <Stack  direction="row" spacing={5} >
            <Button variant="outlined" color="secondary" style={{ height: 40 }} size="large" startIcon={<HomeIcon/>} ><Link to="/" style={linkStyle}>Home</Link> </Button>
            <Button variant="outlined" color="secondary" style={{ height: 40 }} size="large" startIcon={<SearchIcon />}> <Link to="/search" style={linkStyle}>Search</Link> </Button>

            {/* <Button variant="outlined" color="secondary" style={{ height: 40 }} size="large" startIcon={<SearchIcon />}> <Link to="/search" style={linkStyle}>Search</Link> </Button> */}
            <Button variant="outlined" color="secondary" style={{ height: 40 }} size="large" startIcon={<InfoIcon />}> <Link to="/about" style={linkStyle}>About Us</Link> </Button>
            <Button variant="outlined" color="secondary" style={{ height: 40 }} size="large" startIcon={<ContactSupport />}> <Link to="/contact" style={linkStyle}>Contact Us</Link> </Button>
            <Button variant="outlined" color="secondary" style={{ height: 40 }} size="large" startIcon={<DashboardCustomize/>}> <Link to="/dashboard" style={linkStyle}>Dashboard</Link> </Button>

            <div className={gutterStyles.parent}>
           
            <Stack direction="row" spacing={10}>
              <Button classes={styles} size="large" style={{ height: 40}}>
                <Link to="/register" style={linkStyle}>Register</Link>
              </Button>
              <Button classes={styles} size="large" style={{ height: 40 }}>
                <Link to="/login" style={linkStyle}>Login</Link>
              </Button>
            </Stack>  
            
          </div> 
          </Stack>
          </NavUnlisted>
         </Box>
          
        </div>
        </Toolbar>
        </AppBar>
        </ThemeProvider>
        </div>
        </div>
      
 );
}

export default Header;