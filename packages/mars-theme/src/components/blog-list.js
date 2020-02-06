import React from 'react'
import { connect, styled } from 'frontity'
import Item from './blog-list-item'
import Pagination from './list/pagination'

const BlogList = () => {
    // Get the data of the current list.
    const state = window.frontity.state
    const items = Object.keys(state.source.post).map(
        id => state.source.post[id]
    )

    return items ? (
        <Container>
            {items
                .filter(({ type, id }) => {
                    return true
                    const item = state.source[type][id]
                    return item.categories[0] === 2
                })
                .map(({ type, id }) => {
                    const item = state.source[type][id]
                    return <Item key={item.id} item={item} state={state} />
                })}
            <Pagination />
        </Container>
    ) : null
}

export default connect(BlogList)

const Container = styled.ul`
    width: 800px;
    margin: 0;
    padding: 24px;
    list-style: none;
`

const Header = styled.h3`
    font-weight: 300;
    text-transform: capitalize;
    color: rgba(12, 17, 43, 0.9);
`
