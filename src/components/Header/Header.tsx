import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ed145b;
  color: white;
  padding: 15px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 5px 10px;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/completed">Tarefas Concluídas</StyledLink>
        <StyledLink to="/pending">Tarefas Pendentes</StyledLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
