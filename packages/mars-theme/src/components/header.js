import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";

const Header = ({ state }) => (
  <>
    <Container>
      <StyledLink link="/">
        <Title>InstaJuegos.io</Title>
      </StyledLink>
    </Container>
    {/* <Nav /> */}
  </>
);

export default connect(Header);

const Container = styled.div`
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
