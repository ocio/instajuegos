import React from 'react'
import { connect, styled } from 'frontity'
import Item from './blog-list-item'
// import Pagination from './list/pagination'

const BlogList = ({ state }) => {
    const items = Object.keys(state.source.post).map(
        id => state.source.post[id]
    )
    const filteredItems = items
        .slice(0)
        // .sort((a, b) => a - b)
        .filter(({ type, id }) => {
            const item = state.source[type][id]
            return item.categories[0] === 2
        })
        .map(({ type, id }) => {
            const item = state.source[type][id]
            return <Item key={item.id} item={item} state={state} />
        })
    console.log(
        'Total items: ' + items.length,
        'Filtered items: ' + filteredItems.length
    )
    return items ? (
        <Container>
            {filteredItems}
            {/* <Pagination /> */}
        </Container>
    ) : null
}

export default connect(BlogList)

const Container = styled.ul`
    max-width: 900px;
    margin: 0;
    padding: 24px;
    margin: 100px auto 0 auto;
`

const Header = styled.h3`
    font-weight: 300;
    text-transform: capitalize;
    color: rgba(12, 17, 43, 0.9);
`
