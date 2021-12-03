import {
  Navbar,
  Nav,
  Button,
  Container,
  Row,
  Col,
  FormControl,
  Form,
  NavDropdown,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getForCastAction } from "../../actions";
import MyModal from "./Modal/MyModal";

const MyNavBar = ({ brand }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  /* useEffect(() => {
    dispatch(getForCastAction(input));
  }, [input]);
 */
  const handleSubmit = () => {
    <MyModal />;
    dispatch(getForCastAction(input));
  };

  return (
    <>
      <div className="myNavbarDiv">
        <Navbar
          onClick={() => navigate("/home")}
          expand="lg"
          className="myNavbar"
          style={{ position: "sticky-top" }}
        >
          <Navbar.Brand className="font-weight-bolder">{brand}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto myNav">
              <Form inline>
                <FormControl
                  value={input}
                  type="text"
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success" onClick={handleSubmit}>
                  Search
                </Button>
              </Form>
              <Nav.Link
                href="#link1"
                onClick={() => setSelected(selected)}
                className={selected ? "active" : ""}
              >
                Guide
              </Nav.Link>
              <Nav.Link
                href="#link2"
                onClick={() => setSelected(selected)}
                className={selected ? "active" : ""}
              >
                Api
              </Nav.Link>

              <Nav.Link
                href="#link3"
                onClick={() => setSelected(selected)}
                className={selected ? "active" : ""}
              >
                Maps
              </Nav.Link>
              <Nav.Link
                href="#link3"
                onClick={() => setSelected(selected)}
                className={selected ? "active" : ""}
              >
                Our Initiatives
              </Nav.Link>
              <Nav.Link
                href="#link3"
                onClick={() => setSelected(selected)}
                className={selected ? "active" : ""}
              >
                Partners
              </Nav.Link>
              <Nav.Link
                href="#link3"
                onClick={() => setSelected(selected)}
                className={selected ? "active" : ""}
              >
                Blog
              </Nav.Link>

              <Nav.Link
                href="#link4"
                onClick={() => setSelected(selected)}
                className={selected ? "active" : ""}
              >
                Ask a question
              </Nav.Link>
              <Nav.Link
                href="#link4"
                onClick={() => setSelected(selected)}
                className={selected ? "active" : ""}
              >
                Marketplace
              </Nav.Link>
            </Nav>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
                onClick={() => navigate("/login")}
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
            </div>
            <div className="sign-in">
              <Nav className="mr-auto">
                <Button variant="">Logout</Button>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};
export default MyNavBar;
