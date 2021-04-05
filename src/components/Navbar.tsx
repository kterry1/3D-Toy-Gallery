import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const ToysNavbar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand={false} >
      <Navbar.Brand href="#home">3D Toy Gallery</Navbar.Brand>
      <Nav className="navbar-login">
        <input type="text"placeholder="UserName"/>
            <input type="password"placeholder="Password"/>
            <button type="submit">Login</button>
        </Nav>
    </Navbar>
  );
};

export default ToysNavbar;
