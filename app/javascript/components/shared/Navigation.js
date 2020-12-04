import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { FcFilmReel } from 'react-icons/fc'

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">< FcFilmReel/></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/movie-ratings">Ratings</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;