import React from 'react';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';

function Mavbar(){
  return(
    <div className="Navigation">
<Navbar collapseOnSelect expand="lg">
  <Navbar.Brand href="#home">All Posts</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="">Article</Nav.Link>
      <Nav.Link href="">Event</Nav.Link>
      <Nav.Link href="">Education</Nav.Link>
        <Nav.Link href="">Job</Nav.Link>

    </Nav>
  </Navbar.Collapse>
  <div className="post">
  <button title="Write a Post" class="postEditer btn btn-success"><p className="postVisible"><i class="fas fa-pen"></i>Write a Post</p></button>
  </div>
  <button type="button" class="group btn btn-outline-primary">Join Group</button>
  <hr className="line1" />


</Navbar>
</div>
);}

export default Mavbar;