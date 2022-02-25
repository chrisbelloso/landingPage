import { Navbar, Container, Nav, Offcanvas, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Navbar.css';

const NavBar = () => {
    return (
        <div>
          <Navbar fixed='top' style={{backgroundColor: "rgb(37, 37, 37)"}} expand={false}>
              <Container fluid>
                <Navbar.Brand className='NavTitle'>
                  <Link to="/">
                    CB LANDING PAGE
                  </Link>
                </Navbar.Brand>
                  <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                      id="offcanvasNavbar"
                      aria-labelledby="offcanvasNavbarLabel"
                      placement="end"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">EXPLORE</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className='list'>
                          <Link to="/">Home</Link>
                          <Link to="/about">About</Link>
                          <Link to="/contact">Contact</Link>
                        </Nav>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
          </Navbar>
        </div>
    )
}

export default NavBar;


