import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({ textListener, searchText }) => (
  <Navbar bg="dark" expand="lg" style={{ width: '100%', position: 'fixed', zIndex: '10000' }}>
    <Container fluid style={{ color: 'black' }}>
      <Navbar.Brand href="#home">Watch-hub</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchText}
            onChange={(e) => {
              textListener(e.target.value);
            }}
          />
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
