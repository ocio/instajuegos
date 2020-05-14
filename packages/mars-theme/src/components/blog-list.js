import React from 'react'
import { connect, styled } from 'frontity'
import Item from './blog-list-item'
import Pagination from './blog-pagination'

// const BlogList = ({ state, libraries }) => {
//     const items = Object.keys(state.source.post).map(
//         (id) => state.source.post[id]
//     )
//     const filteredItems = items
//         .slice(0)
//         // .sort((a, b) => a - b)
//         .filter(({ type, id }) => {
//             const item = state.source[type][id]
//             return item.categories[0] === 2
//         })
//         .map(({ type, id }) => {
//             const item = state.source[type][id]
//             return <Item key={item.id} item={item} state={state} />
//         })
//     console.log(
//         'Total items: ' + items.length,
//         'Filtered items: ' + filteredItems.length
//     )
//     ;(async () => {
//         // const response = await libraries.source.api.get({
//         //     endpoint: 'posts',
//         //     params: {
//         //         per_page: 100
//         //     }
//         // })
//         // const pages = libraries.source.getTotalPages(response)
//         // console.log(pages)
//         // await libraries.source.populate({ state, response })
//         // const requests = []
//         // for (let page = 2; page <= pages; page++) {
//         //     requests.push(
//         //         libraries.source.api.get({
//         //             enpoint: 'posts',
//         //             params: {
//         //                 per_page: 100,
//         //                 page
//         //             }
//         //         })
//         //     )
//         // }
//         // const responses = await Promise.all(requests)
//         // const result = await Promise.all(
//         //     responses.map(response =>
//         //         libraries.source.populate({ state, response })
//         //     )
//         // )
//         // console.log({ result, responses })
//     })()

//     return items ? (
//         <Container>
//             {filteredItems}
//             <Pagination />
//         </Container>
//     ) : null
// }

const BlogList = ({ state }) => {
    const data = state.source.get(state.router.link)
    // console.log('BlogList', data.items.length)
    return (
        <Container>
            {data.items.map(({ type, id }) => {
                const item = state.source[type][id]
                return <Item key={item.id} item={item} state={state} />
            })}
        </Container>
    )
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
