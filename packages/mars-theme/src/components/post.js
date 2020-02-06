import React, { useEffect } from 'react'
import { connect, styled } from 'frontity'
import Link from './link'
import List from './list'
import FeaturedMedia from './featured-media'

const Post = ({ state, actions, libraries }) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link)
    // Get the data of the post.
    const post = state.source[data.type][data.id]
    // Get the html2react component.
    const Html2React = libraries.html2react.Component

    // Once the post has loaded in the DOM, prefetch both the
    // home posts and the list component so if the user visits
    // the home page, everything is ready and it loads instantly.
    useEffect(() => {
        actions.source.fetch('/')
        List.preload()
    }, [])

    const tag = state.source.tag
    const tags = post.tags.map(id => (
        <Tag>
            <Link link={tag[id].link}>{tag[id].name}</Link>
        </Tag>
    ))

    const Component = post.categories[0] === 1 ? Game : Article

    // Load the post, but only if the data is ready.
    return data.isReady ? (
        <Component
            state={state}
            post={post}
            tags={tags}
            Html2React={Html2React}
        />
    ) : null
}

function Game({ post, tags, Html2React }) {
    return (
        <Container>
            <Iframe
                id="iframe"
                sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"
                allowfullscreen=""
                src={post.url_main}
            />
            <ContentWrap>
                <Content>
                    <Tags>
                        <TagTitle>Categorías</TagTitle>
                        <br />
                        {tags}
                    </Tags>
                    <Title>{post.title.rendered}</Title>
                    <Description>
                        <DescriptionTitle>Descripción</DescriptionTitle>
                        <Html2React html={post.content.rendered} />
                    </Description>
                </Content>
            </ContentWrap>
            <Share>
                <div class="addthis_inline_share_toolbox"></div>
            </Share>
        </Container>
    )
}

var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

function Article({ state, post, tags, Html2React }) {
    // Get the author.
    const author = state.source.author[post.author]
    // Get a date for humans.
    const date = new Date(post.date)
    return (
        <Container>
            <ContentWrap>
                <Content>
                    <Tags>{tags}</Tags>
                    {post.featured_media != null && (
                        <FeaturedMedia id={post.featured_media} />
                    )}
                    <AuthorDate>
                        <Author>
                            Por <b>{author.name}</b>,
                        </Author>
                        <Fecha>
                            {' '}
                            el{' '}
                            <b>{date.toLocaleDateString('es-ES', options)}</b>
                        </Fecha>
                    </AuthorDate>
                    <Title>{post.title.rendered}</Title>
                    <Description>
                        <Html2React html={post.content.rendered} />
                    </Description>
                </Content>
            </ContentWrap>

            <Share>
                <div class="addthis_inline_share_toolbox"></div>
            </Share>
        </Container>
    )
}

export default connect(Post)

const Container = styled.div`
    margin-top: 69px;
    width: 100%;
    height: calc(100vh - 69px);
`

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
    background-color: #000;
`

const ContentWrap = styled.div`
    max-width: 1200px;
    margin: 30px auto;
`

const Content = styled.div`
    margin: 20px;
    /* border: 5px solid #45ff91; */
    border-radius: 10px;
    padding: 20px;
`
const Tags = styled.div`
    text-align: center;
`
const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    color: #3ae17e;
`

const Description = styled.div``
const DescriptionTitle = styled.div`
    font-size: 30px;
    font-weight: 100;
`

const TagTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #3ae17e;
`

const Tag = styled.div`
    margin: 0 5px;
    display: inline-block;
    outline: none;
    padding: 2px 20px;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ isSelected }) => (isSelected ? '#333' : '#8e8e8e')};
    box-sizing: border-box;
    background-color: #eeeeee;

    &:hover {
        color: #000;
        background: #45ff91;
    }

    & > a {
        outline: none;
        display: inline-block;
        line-height: 2em;
    }
`

const Share = styled.div`
    text-align: center;
    margin-bottom: 30px;
`

const AuthorDate = styled.div`
    color: grey;
    font-size: 14px;
    display: inline;
`

const Author = styled.p`
    font-size: 0.9em;
    display: inline;
`

const Fecha = styled.p`
    font-size: 0.9em;
    display: inline;
`
