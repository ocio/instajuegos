import React from 'react'
import { connect, styled } from 'frontity'
import * as frontity from 'frontity'
import Link from './link'
import FeaturedMedia from './featured-media'

const Item = ({ state, item }) => {
    const author = state.source.author[item.author]
    const date = new Date(item.date)

    return (
        <Container>
            <Link link={item.link}>
                <Title
                    dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                />
            </Link>
            <Author>
                By <b>{author.name}</b>
            </Author>
            <Fecha>
                {' '}
                on <b>{date.toDateString()}</b>
            </Fecha>
            {state.theme.featured.showOnList && (
                <FeaturedMedia id={item.featured_media} />
            )}
            <Excerpt
                dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
            />
        </Container>
    )
}

export default connect(Item)

const Container = styled.div`
    margin-bottom: 100px;
`

const Title = styled.h1`
    margin: 0;
    margin-top: 24px;
    margin-bottom: 8px;

    display: block;
    font-size: 40px;
    font-weight: bold;
`

const Author = styled.p`
    color: rgba(12, 17, 43, 0.9);
    font-size: 0.9em;
    display: inline;
`

const Fecha = styled.p`
    color: rgba(12, 17, 43, 0.9);
    font-size: 0.9em;
    display: inline;
`

const Excerpt = styled.div`
    line-height: 1.6em;
    color: rgba(12, 17, 43, 0.8);
`
