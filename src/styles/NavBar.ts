import styled from "styled-components";
import {Link} from "react-router-dom";

interface IProps {
  open: boolean;
}

const Nav = styled.nav`
  width: 100vh;
  height: 55px;
  border-bottom: 2px solid var(--secondary-color);
  display: flex;
  font-family: Ubuntu;
  font-weight: 500;
  font-size: 1.25rem;
  justify-content: space-between;
  color: var(--primary-color);

  .logo {
    font-size: 2rem;
    padding: 15px 2px;
    font-family: Roboto;
    font-weight: 900;
    color: var(--primary-color);
    background-color: var(--secondary-color);
  }

  @media (min-width: 768px) {
    .logo {
      font-size: 1.5rem;
    }
  }
`;

const StyledBurger = styled.div<IProps>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    background-color: ${({ open }) => open ? 'var(--primary-color)' : 'var(--secondary-color)'};
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    background-color: ${({ open }) => open ? 'var(--secondary-color)' : 'var(--primary-color)'};
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1}
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const NavList = styled.ul<IProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    background-color: ${({ open }) => open ? 'var(--primary-color)' : 'var(--secondary-color)'};

    li {
      background-color: ${({ open }) => open ? 'var(--primary-color)' : 'var(--secondary-color)'};
      color: ${({ open }) => open ? 'var(--secondary-color)' : 'var(--primary-color)'};
    }
  }
  `;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  background-color: var(--secondary-color);

  @media (max-width: 768px) {
    color: var(--secondary-color);
    background-color: var(--primary-color);
  }
`;

export { Nav, NavList, StyledBurger, StyledLink };