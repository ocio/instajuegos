import Theme from './components'
import image from '@frontity/html2react/processors/image'

const blogListHandler = {
    pattern: '/blog/',
    priority: 5,
    func: async ({ route, params, state, libraries }) => {
        const per_page = 50
        const { api, populate, getTotalPages } = libraries.source
        const response = await api.get({
            endpoint: 'posts',
            params: {
                per_page,
                categories: 2,
                _embed: true,
            },
        })
        const firstItems = await populate({
            response,
            state,
        })
        const pages = getTotalPages(response)
        const requests = []

        for (let page = 2; page <= pages; page++) {
            requests.push(
                api.get({
                    endpoint: 'posts',
                    params: {
                        per_page,
                        categories: 2,
                        page,
                        _embed: true,
                    },
                })
            )
        }
        const responses = await Promise.all(requests)

        const newItems = await Promise.all(
            responses.map((response) => populate({ state, response }))
        )
        const items = firstItems.concat(newItems)

        // 4. add data to source
        const currentPageData = state.source.data['/blog/']
        const newPageData = {
            isBlogList: true,
            items,
        }

        Object.assign(currentPageData, newPageData)
    },
}

const marsTheme = {
    name: '@frontity/mars-theme',
    roots: {
        // In Frontity, any package can add React components to the site.
        // We use roots for that, scoped to the "theme" namespace.
        theme: Theme,
    },
    state: {
        // State is where the packages store their default settings and other
        // relevant state. It is scoped to the "theme" namespace.
        theme: {
            menu: [],
            featured: {
                showOnList: false,
                showOnPost: false,
            },
        },
    },
    // Actions are functions that modify the state or deal with other parts of
    // Frontity like libraries.
    actions: {
        theme: {
            init: ({ libraries }) => {
                libraries.source.handlers.push(blogListHandler)
            },
        },
    },
    libraries: {
        html2react: {
            // Add a processor to html2react so it processes the <img> tags
            // inside the content HTML. You can add your own processors too.
            processors: [image],
        },
    },
}

export default marsTheme
