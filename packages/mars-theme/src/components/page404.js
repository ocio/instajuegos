import React from "react";
import { styled } from "frontity";

const Page404 = () => (
  <Container>
    <Title>Oops! 404</Title>
    <Description>
      Esta pagina no existe{" "}
      <span role="img" aria-label="confused face">
        😕
      </span>
    </Description>
  </Container>
);

export default Page404;

const Container = styled.div`
  margin-top: 200px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6em;
  margin: 24px 0;
`;
