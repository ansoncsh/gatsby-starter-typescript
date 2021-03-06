module.exports = {
    pathPrefix: "/gatsby-starter-typescript",
    siteMetadata: {
        title: "Gatsby Typescript Starter",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        // Add typescript stack into webpack
        "gatsby-plugin-typescript"
    ],
}
