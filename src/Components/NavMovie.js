import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'



function NavMovie() {
    return (
  <>
   <Navbar bg="primary" variant="dark">
  <Container>
    <Navbar.Brand href="#home"> NasriMovies </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'> Home </Nav.Link> 
      <Nav.Link as={Link} to='/ListMovies'>List Movies</Nav.Link>
    </Nav>
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
  </Container>
   </Navbar>
   </> )
}
export default NavMovie