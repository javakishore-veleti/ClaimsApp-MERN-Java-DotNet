import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./AppNavBarBootStrap.css";

const AppNavBarBootStrap = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tickets Application</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="fw-bold fs-1" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold fs-1" href="#features">
              Ticket Search
            </Nav.Link>
            <Nav.Link className="fw-bold fs-1" href="#pricing">
              Ticker Create
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavBarBootStrap;
