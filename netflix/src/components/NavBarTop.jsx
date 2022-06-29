import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';


function NavBarTop() {
  const SearchPage = () => {
    useNavigate('/Search')
  }
  return (
    <Navbar style={{ backgroundColor: 'black' }} expand="lg">
      <Container style={{ color: 'white' }} fluid>
        <Navbar.Brand href="#" style={{ color: 'white' }} >Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/'style={{ color: 'white' }} href="#action1">Home</Link>
            <Link to='/TvShows'style={{ color: 'white' }} href="#action2">Tv Shows</Link>

            <Nav.Link style={{ color: 'white' }} href="#" disabled>
              Last seen
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{ color: 'white' }} onClick={SearchPage} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ color: 'white' }}>
            Signed in as: Agris
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarTop;