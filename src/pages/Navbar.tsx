import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { finalTotal } from "../CartReducer/Slice";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";

export const FoodNavbar = () => {
  const cart = useSelector((state: any) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(finalTotal());
  }, [cart, dispatch]);

  return (
    <>
      <Navbar className="navbar" bg="warning" expand="lg px-3" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <h3>Quick Eats</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar" className="justify-content-lg-end">
            <Nav variant="dark">
              <Nav.Link href="/">
                <h5>Home</h5>
              </Nav.Link>
              <Link className="cart-link" to="/cart-Page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="24"
                  fill="currentColor"
                  className="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <span>{cart.totalQuantity}</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Breadcrumb className="mx-5 my-4" id="breadCrumb">
        <BreadcrumbItem href="/">
          Burger
        </BreadcrumbItem>
        <BreadcrumbItem href="/beverage-Page">
          Beverages
        </BreadcrumbItem>
        <BreadcrumbItem href="shakes-Page">
          Shakes
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};
