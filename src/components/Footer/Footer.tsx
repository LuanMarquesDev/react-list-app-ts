import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #ed145b, #c10e49);
  color: #fff;
  text-align: center;
  padding: 12px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #c10e49, #ed145b);
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
    padding: 10px 0;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Direitos autorais © 2024</p>
    </FooterContainer>
  );
};

export default Footer;
