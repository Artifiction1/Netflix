import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar style={{backgroundColor:'black'}}>
        <Navbar.Brand href="#"><img src='https://lndr-landorcom-assets-prd.s3-us-west-2.amazonaws.com/app/uploads/2016/11/09134903/Netflix-logos-side-by-side.jpg?w=760&fit=max' height='60px'/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{color:'white'}}>
            Signed in as: Agris
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;