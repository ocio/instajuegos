import React from "react";
import { styled } from "frontity";
import Loader from "react-spinners/ScaleLoader";

const Loading = () => (
  <Container>
    <Loader radius={0} margin="3px" width={4} height={24} />
  </Container>
);

export default Loading;

const Container = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin-top: 24px;
  }
`;
