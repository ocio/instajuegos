const settings = {
    name: 'TusJuegos.io',
    state: {
        title: 'Tus Juegos IO',
        description:
            'Tus Juegos IO cada dia. Ingresa y juega a los últimos juegos io, puedes buscar en diferentes categorías, suscribite para recibir alertas cuando se publiquen nuevos juegos io, chatea con tus amigos y mucho más. ¡Tenemos la lista más completa y cada día añadimos más juegos, ingresa y divertete! :)'
    },
    packages: [
        {
            name: '@frontity/mars-theme',
            state: {
                theme: {
                    menu: [
                        ['Todos', '/'],
                        ['Nuevos', '/tag/nuevos/'],
                        ['Mas Populares', '/tag/populares/']
                    ],
                    featured: {
                        showOnList: false,
                        showOnPost: false
                    }
                }
            }
        },
        {
            name: '@frontity/wp-source',
            state: {
                source: {
                    api:
                        // "https://public-api.wordpress.com/wp/v2/sites/instajuegos.home.blog/posts/"
                        // "https://test.frontity.io/wp-json"
                        'http://blog.tusjuegos.io/wp-json/',

                    params: {
                        per_page: 50,
                        type: ['post', 'page']
                    }
                }
            }
        },
        '@frontity/tiny-router',
        '@frontity/html2react'
    ]
}

export default settings
