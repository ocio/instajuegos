import React from 'react'
import { connect, styled } from 'frontity'
import Item from './list-item'
import Pagination from './pagination'

const List = ({ state }) => {
    // Get the data of the current list.
    const data = state.source.get(state.router.link)

    return (
        <Container>
            {/* If the list is a taxonomy, we render a title. */}
            {data.isTaxonomy && (
                <Header>
                    <HeaderTop>{data.taxonomy}</HeaderTop>
                    <HeaderBottom>
                        {state.source[data.taxonomy][data.id].name}
                    </HeaderBottom>
                </Header>
            )}

            {/* {data.isAuthor && (
                <Header>Author: {state.source.author[data.id].name}</Header>
            )} */}

            <Items>
                <div>
                    {/* Iterate over the items of the list. */}
                    {data.items
                        .filter(({ type, id }) => {
                            const item = state.source[type][id]
                            return item.categories[0] === 1
                        })
                        .map(({ type, id }) => {
                            const item = state.source[type][id]
                            // Render one Item component for each one.
                            return <Item key={item.id} item={item} />
                        })}
                </div>
            </Items>
            <Pagination />
        </Container>
    )
}

export default connect(List)

const Container = styled.section`
    margin: 125px auto 0 auto;
    width: 1501px;
    @media (max-width: 1517px) {
        width: 1184px;
    }
    @media (max-width: 1201px) {
        width: 888px;
    }
    @media (max-width: 904px) {
        width: 592px;
    }
    @media (max-width: 609px) {
        width: 296px;
    }
`

const Header = styled.div`
    padding: 0 25px;
`

const HeaderTop = styled.div`
    font-weight: 100;
    color: #42f68c;
    text-transform: capitalize;
    line-height: 12px;
`

const HeaderBottom = styled.div`
    font-size: 50px;
    line-height: 53px;
    color: #3ae17e;
    text-transform: capitalize;
`

const Items = styled.div``
