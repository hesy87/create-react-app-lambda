import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.scss";
import { useContext } from "react";
import { DataContext } from "./../../context/dataContext";
import { LinkContainer } from "react-router-bootstrap";

function NavbarMenu(props) {
  const ctx = useContext(DataContext);

  return (
    <div className={props.NavBag ? "NavBorderOnScroll" : "NavBorder"}>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={ctx.NavbarData.LogoImage} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" bsPrefix="nav-link2">
                صفحه اصلی
              </Nav.Link>
              <NavDropdown
                bsPrefix="nav-link2"
                title="خدمات"
                id="collasible-nav-dropdown"
              >
                <Nav.Link
                  href="/education"
                  bsPrefix="nav-link2"
                  className="text-end me-2 pb-0"
                >
                  آموزش
                </Nav.Link>
                <Nav.Link
                  href="/strategic"
                  bsPrefix="nav-link2"
                  className="text-end me-2 pb-0"
                >
                  مشاوره استراتژیک
                </Nav.Link>
              </NavDropdown>
              <NavDropdown
                bsPrefix="nav-link2"
                title="آکادمی"
                id="collasible-nav-dropdown"
              >
                <Nav.Link
                  href="/contract"
                  bsPrefix="nav-link2"
                  className="text-end me-2 pb-0"
                >
                  ارتباطات بین فردی در سازمان
                </Nav.Link>
                <Nav.Link
                  href="/virtual"
                  bsPrefix="nav-link2"
                  className="text-end me-2 pb-0"
                >
                  تصویر سازی اطلاعات
                </Nav.Link>
                <Nav.Link
                  href="/decision"
                  bsPrefix="nav-link2"
                  className="text-end me-2 pb-0"
                >
                  تصمیم سازی مدیران
                </Nav.Link>
              </NavDropdown>

              {ctx.NavbarData.NormalMenu.map((items) => (
                <Nav.Link href={items[1]} bsPrefix="nav-link2">
                  {items[0]}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
