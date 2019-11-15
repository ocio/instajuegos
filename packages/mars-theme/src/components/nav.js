import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Nav = ({ state }) => {
  console.log("Nav");
  return (
    <Container>
      {state.theme.menu.map(([name, link]) => (
        <Item key={name} isSelected={state.router.link === link}>
          <Link link={link}>{name}</Link>
        </Item>
      ))}
    </Container>
  );
};

export default connect(Nav);

const Container = styled.nav`
  position: fixed;
  z-index: 1;
  top: 69px;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  overflow-x: auto;
`;

const Item = styled.div`
  outline: none;
  padding: 2px 20px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ isSelected }) => (isSelected ? "#333" : "#8e8e8e")};
  box-sizing: border-box;
  background-color: ${({ isSelected }) =>
    isSelected ? "#eee" : "transparent"};

  & > a {
    outline: none;
    display: inline-block;
    line-height: 2em;
  }

  & > a:hover {
    color: #333;
    text-decoration: underline;
  }
`;
