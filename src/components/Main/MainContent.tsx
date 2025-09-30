import React from "react";
import styled from "styled-components";

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 120px); // considera header e footer
  transition: all 0.3s ease;
`;

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MainContent;
