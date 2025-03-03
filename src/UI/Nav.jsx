import { Navbar, Nav, Container, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import "./Nav.css";

const CustomNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom px-3">
      <Container fluid>
        <Navbar.Brand href="#" className="text-primary fw-bold">Coursera</Navbar.Brand>

        <Nav className="me-auto">
          <Dropdown>
            <Dropdown.Toggle variant="light" className="fw-semibold">Explore</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Courses</Dropdown.Item>
              <Dropdown.Item href="#">Specializations</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

        <Form className="d-flex mx-auto" style={{ maxWidth: "400px" }}>
          <FormControl type="search" placeholder="What do you want to learn?" className="me-2" />
          <Button variant="primary">🔍</Button>
        </Form>

        <Nav className="ms-auto">
          {/* <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">My Learning</Nav.Link>
          <Nav.Link href="#">Online Degrees</Nav.Link>
          <Nav.Link href="#">Careers</Nav.Link> */}

          <Dropdown align="end">
            <Dropdown.Toggle variant="light">🌍 English</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">French</Dropdown.Item>
              <Dropdown.Item href="#">Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link href="#">🔔</Nav.Link>

          <Dropdown align="end">
            <Dropdown.Toggle variant="dark">S</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Profile</Dropdown.Item>
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
