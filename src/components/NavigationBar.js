import React, {useState} from 'react';
import {Navbar} from "react-bootstrap";
import {Nav, NavDropdown} from "react-bootstrap";
import {Container} from "react-bootstrap";
import pic from "../assets/pic.png"
const NavigationBar = () => {
    return (
        <Navbar id={"topNav"} className={"navbar-color py-4 fixed-top"} collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href={"#home"}>
                    <img id={"pic"} src={pic} className={"navbar-img"}/>
                </Navbar.Brand>
                <Navbar.Brand>
                    <h1 id={"navbar-name"}>Gerald Neo</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={"nav"}>
                        <Nav.Link href="#last-title"><h3 id={"navbar-link"}>Projects</h3></Nav.Link>
                        <Nav.Link href="#last-project" >
                            <h3 id={"navbar-link"}>Skills</h3>
                        </Nav.Link>
                        <Nav.Link href={"#contact"}><h3 id={"navbar-link"}>Contact/Resume</h3></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavigationBar