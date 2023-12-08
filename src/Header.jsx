import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
// import { AppContext } from './App';

function Header() {
  // const{cart}=useContext(AppContext);
  return (
    
    <Navbar  expand="lg" className="bg-body-tertiary p-0">
      <Container >
        <Navbar.Brand href="#home">DiegoFelipe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link to="/our_story"><Nav>Our Story</Nav></Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <NavDropdown title="Collections" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Kids collections</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Round neck T-shirt
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Polo T-shirt</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Active Wear Collections
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Fabric" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cotton</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sustainable Fabric
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Polo T-shirt</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Natural Fabric
              </NavDropdown.Item>
            </NavDropdown>
          <div className='buttons'>
            <a href='' className='btn btn-outline-dark  ms-2'>
            <i class="fa-solid fa-right-to-bracket">Login</i>
            </a>


           <a href=''className='btn btn-outline-dark  ms-2'>
            <i class="fa-solid fa-cart-shopping">cart</i>

            </a>
          </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;