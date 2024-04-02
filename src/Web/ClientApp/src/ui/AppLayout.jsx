import styled, { css } from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;

  ${(props) =>
    props.isexpanded === 1 &&
    css`
      grid-template-columns: 26rem 1fr;
    `}

  ${(props) =>
    props.isexpanded === 0 &&
    css`
      grid-template-columns: 8rem 1fr;
    `}
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 3.8rem 4.4rem;
  overflow: scroll;
`;

const ContentContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleValueChange = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <LayoutContainer isexpanded={isExpanded ? 1 : 0}>
      <Header />
      <Sidebar expanded={isExpanded} onValueChange={handleValueChange} />
      <Main>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Main>
    </LayoutContainer>
  );
}

export default AppLayout;
