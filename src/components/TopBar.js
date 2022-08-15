import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";

function TopBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
        <img
          src="https://www.instacart.com/image-server/240x48/www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png"
          alt="InstaCart"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav
          style={{
            padding: "24px 40px 20px 40px",
            fontSize: "18px",
            lineHeight: "26px",
            fontWeight: "bolder",
            display: "flex",
          }}
        >
          <Nav.Link
            style={{
              color: "#343538",
            }}
            href="#LogIn"
          >
            Log In
          </Nav.Link>
          <Button variant="success" style={{ fontSize: "18px" }}>
            {" "}
            Sign Up
          </Button>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;
