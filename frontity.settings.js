const settings = {
  name: "TusJuegos.io",
  state: {},
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Todos", "/"],
            ["Nuevos", "/tag/nuevos/"],
            ["Mas Populares", "/tag/populares/"],
            ["Disparos", "/tag/disparos/"],
            ["Moomoo", "/tag/moomoo/"]
          ],
          featured: {
            showOnList: false,
            showOnPost: false
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api:
            // "https://public-api.wordpress.com/wp/v2/sites/instajuegos.home.blog/posts/"
            // "https://test.frontity.io/wp-json"
            "http://54.236.189.131/wp-json/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
