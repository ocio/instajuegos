import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Loading from "./loading";
import Title from "./title";

// Theme is the root React component of our theme. The one we will export
// in roots.
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,700"
        rel="stylesheet"
      ></link>
      <Title />
      <Head>
        <meta name="description" content={state.description} />
        <html lang="es" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <Header />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Content>
        {(data.isFetching && <Loading />) ||
          (data.isArchive && <List />) ||
          (data.isPostType && <Post />) ||
          (data.is404 && <Page404 />)}
      </Content>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    background: white;
    color: rgb(51, 51, 51);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      Helvetica, Meiryo, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
      Segoe UI Symbol;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const Content = styled.div``;
