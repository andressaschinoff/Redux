import React from "react";
import { Nav, StyledBurger, NavList, StyledLink } from "../styles/NavBar"

interface IProps {
  isLogged?: boolean;
}

const Navbar = ({ isLogged }: IProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Nav>
      <StyledLink to="/" className="logo">
        Todo List
      </StyledLink>
      <React.Fragment>
        <StyledBurger open={open} onClick={() => setOpen(previous => !previous)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <NavList open={open} >
          <li>
            <StyledLink to='/'>Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/login">Login</StyledLink>
          </li>
          <li>
            <StyledLink to="/register">Register</StyledLink>
          </li>
          {isLogged &&
            <li>
              <StyledLink to="/list">List</StyledLink>
            </li>
          }
        </NavList>
      </React.Fragment >
    </Nav >
  );
}

export default Navbar;