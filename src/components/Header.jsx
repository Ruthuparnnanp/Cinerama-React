import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/");
  }

  return (
    <>
      <Navbar style={{backgroundColor:"#111"}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{cursor:"pointer"}} onClick={handleClick}>Cinerama</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={handleClick}>Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
