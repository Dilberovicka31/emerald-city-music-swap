import React from "react";
import {  Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useIsAuthenticated, useLogout } from "../../utils/auth";
import mainlogo from "../../images/mainlogo.png";

function NavTabs() {
  const isAuth = useIsAuthenticated();
  const logout = useLogout();
  return (
    <Navbar expand="lg" style={{ maxWidth: "100vw", zIndex: 10 }}>
      <Navbar.Brand className="p-0">
        <img
          src={mainlogo}
          className="img-fluid animated fadeInLeft"
          href="/"
          style={{ width: "12rem", height: "3rem" }}
          alt=""
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end">
        <Nav >
         
         
        {isAuth && (  <Nav.Link href="/" style={{ fontSize: "20px", color: "black" }} onClick={logout}>
              Logout{" "}
            </Nav.Link> )}
            {!isAuth && (
              <Nav.Link href="/signup" style={{ fontSize: "20px", color: "black" }}>Signup</Nav.Link>
            )}
            {!isAuth && (
              <Nav.Link href="/login" style={{ fontSize: "20px", color: "black" }}>Login</Nav.Link>
            )}
         
         {!isAuth && (  <Nav.Link
            className="mr-auto animated fadeInLeft"
            id="name"
            href="/userPage"
            style={{ fontSize: "20px", color: "black" }}
          >
           Posted
          </Nav.Link>)}

          {isAuth && ( <Nav.Link
            className="mr-auto animated fadeInLeft"
            id="name"
            href="/myPosts"
            style={{ fontSize: "20px", color: "black" }}
          >
       My Posts
          </Nav.Link>)}

          {isAuth && ( <Nav.Link
            className="mr-auto animated fadeInLeft"
            id="name"
            href="/browse"
            style={{ fontSize: "20px", color: "black" }}
          >
            Browse
          </Nav.Link>)}
          {isAuth && ( <NavDropdown
            title="Add"
            id="basic-nav-dropdown"
            className="animated fadeInLeft"
            style={{ fontSize: "20px", color: "black" }}
          >
            <NavDropdown.Item href="/createpost">Record</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Cassette</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Disc</NavDropdown.Item>

            <NavDropdown.Item href="#action/3.4">Chart</NavDropdown.Item>
          </NavDropdown>)}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  
  );
}
export default NavTabs;
