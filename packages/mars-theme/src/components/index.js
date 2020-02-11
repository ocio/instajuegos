import React, { useEffect } from 'react'
import { Global, css, connect, styled, Head } from 'frontity'
import Header from './header'
import List from './list'
import BlogList from './blog-list'
import Post from './post'
import Page404 from './page404.js'
import Loading from './loading'
import Title from './title'

// Theme is the root React component of our theme. The one we will export
// in roots.
const Theme = ({ state }) => {
    useEffect(() => {
        console.log('Loading analytics', 'UA-154433373-1')
        window.dataLayer = window.dataLayer || []
        function gtag() {
            dataLayer.push(arguments)
        }
        gtag('js', new Date())
        gtag('config', 'UA-154433373-1')
    }, [])

    // Get information about the current URL.
    const data = state.source.get(state.router.link)

    let description = state.description
    if (data.isPostType) {
        // Get the data of the post.
        description = state.source[data.type][data.id].short_description
    }

    // console.log(data, state.router.link)

    return (
        <>
            {/* Add some metatags to the <head> of the HTML. */}
            <link
                href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,700"
                rel="stylesheet"
            ></link>
            <script
                type="text/javascript"
                src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5dd5abb2922ec511"
            ></script>
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-154433373-1"
            ></script>
            <Title />
            <Head>
                <meta name="description" content={description} />
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
                    (data.isBlogList && <BlogList />) ||
                    (data.isArchive && <List />) ||
                    (data.isPostType && <Post />) ||
                    (data.is404 && <Page404 />)}
            </Content>
        </>
    )
}

export default connect(Theme)

const globalStyles = css`
    body {
        font-size: 20px;
        background: white;
        color: rgb(51, 51, 51);
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, Helvetica, Meiryo, Arial, sans-serif,
            Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    }
    a,
    a:visited {
        color: #3ae17e;
        text-decoration: underline;
    }
    h2 {
        margin-top: 80px;
        font-family: Merriweather, Georgia, serif;
    }
    hr {
        background-color: #d1d1d1;
        border: 0;
        height: 1px;
        margin: 0 0 1.75em;
    }
`

const Content = styled.div``
