import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Pagination = ({ state, actions, libraries }) => {
  const { totalPages } = state.source.get(state.router.link);
  const { path, page, query } = libraries.source.parse(state.router.link);

  const isThereNextPage = page < totalPages;
  const isTherePreviousPage = page > 1;

  const nextPageLink = libraries.source.stringify({
    path,
    page: page + 1,
    query
  });

  const prevPageLink = libraries.source.stringify({
    path,
    page: page - 1,
    query
  });

  // Fetch the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (isThereNextPage) actions.source.fetch(nextPageLink);
  }, []);

  return (
    <Container>
      {isThereNextPage && (
        <Link link={nextPageLink}>
          <Text>← Older posts</Text>
        </Link>
      )}
      {isTherePreviousPage && isThereNextPage && " - "}
      {isTherePreviousPage && (
        <Link link={prevPageLink}>
          <Text>Newer posts →</Text>
        </Link>
      )}
    </Container>
  );
};

export default connect(Pagination);

const Container = styled.div`
  clear: left;
`;

const Text = styled.em`
  display: block;
  margin: 10px 15px;
`;
