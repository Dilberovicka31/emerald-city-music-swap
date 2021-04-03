import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from "mdbreact";
import React from "react";
import "./index.css"

function Footer() {
  return (


//     <footer class="text-center text-white fixed-bottom" style={{backgroundColor: "#21081a"}}>
//   <div class="container p-4"></div>

//   <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
//     © 2020 Copyright:
//     <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
//   </div>
// </footer>
    <MDBFooter className="font-small pt-4 black-text mt-5">
      
          <MDBContainer fluid>
            <MDBRow className="d-flex justify-content-center">
          <MDBCol xs="3" className="icons text-center">
          <a
          style={{ color: "black" }}
          className="mr-3"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/merikettapearl212"
        >
          <MDBIcon
          
            fab
            icon="github-square"
            style={{
              fontSize: "30px",
              color: "#3B3A3C",
              marginRight: "5px",
            }}
          />
         <span id="name"> Meagan James</span>{" "}
        </a>
        </MDBCol>
        <MDBCol xs="3" className="icons text-center">
        <a
          style={{ color: "black" }}
          className=""
          target="_blank"
          rel="noreferrer"
          href="https://github.com/alejo-brand"
        >
          <MDBIcon
 
            fab 
            icon="github-square"
            
            style={{
              fontSize: "30px",
              color: "#3B3A3C",
              marginRight: "5px",
            }}
          />
        
        </a>
        <span id="name" className="mr-2">Alejandro Brand</span>
        </MDBCol>

        
        <MDBCol xs="3" className=" icons text-center">
        <a
          style={{ color: "black" }}
          className="ml-"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Gavin867"
        >
          <MDBIcon
        // className="icons"
            fab
            icon="github-square"
            style={{
              fontSize: "30px",
              color: "#3B3A3C",
              marginRight: "5px",
            }}
          />
         
        </a>
        <span id="name">Gavin Calkins</span>
        </MDBCol>
        <MDBCol xs="3" className=" icons text-center">
        <a
          style={{ color: "black" }}
          className="ml-3 text-black "
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Dilberovicka31"
        >
          <MDBIcon
          
            fab
            icon="github-square"
            style={{
              fontSize: "30px",
              color: "#3B3A3C",
              marginRight: "5px",
            }}
          />
          
        </a>
        <span id="name">Mia Dilberovic</span>
</MDBCol></MDBRow>
        </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:  POD 12 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default Footer;
