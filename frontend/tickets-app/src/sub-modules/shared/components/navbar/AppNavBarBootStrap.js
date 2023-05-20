import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./AppNavBarBootStrap.css";

const AppNavBarBootStrap = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Tickets Application</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="fw-bold fs-1" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold fs-1" href="/tickets-search">
              Tickets Search
            </Nav.Link>
            <Nav.Link className="fw-bold fs-1" href="/ticket-create">
              Ticket Create
            </Nav.Link>
            <Nav.Link className="fw-bold fs-1" href="/tickets-list">
              Tickets List
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavBarBootStrap;
