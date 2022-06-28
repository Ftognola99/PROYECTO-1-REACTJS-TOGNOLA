
import { Navbar,Container,NavDropdown,Nav} from 'react-bootstrap';
import './navbar.css';

function NavBar() {
  return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Contador!!</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Productos</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Sobre nosotros</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Nuestra historia</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Nuestra fabrica</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavBar;

