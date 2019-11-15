import React from "react";
import { connect, styled } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}: {state.source[data.taxonomy][data.id].name}
        </Header>
      )}

      {/* If the list is an author, we render a title. */}
      {data.isAuthor && (
        <Header>Author: {state.source.author[data.id].name}</Header>
      )}

      <Items>
        {/* Iterate over the items of the list. */}
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return <Item key={item.id} item={item} />;
        })}
      </Items>
      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  margin: 0;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
`;

const Items = styled.div``;
