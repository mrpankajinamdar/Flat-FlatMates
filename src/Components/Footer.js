import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,

} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Contact us</Heading>
            <FooterLink href="#">Email</FooterLink>
            <FooterLink href="#">Telephone</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/225px-2021_Facebook_icon.svg.png" width={"30"}></img>
              
            </FooterLink>
            <FooterLink href="https://www.instagram.com/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/225px-Instagram_logo_2016.svg.png" width ="30"></img>
              
            </FooterLink>
            <FooterLink href="https://twitter.com/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/150px-Twitter-logo.svg.png" width="30"></img>
              
            </FooterLink>
            <FooterLink href="https://www.youtube.com/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/375px-YouTube_Logo_2017.svg.png" width="60"></img>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;