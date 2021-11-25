module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "alumni",
    },
    plugins: [
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `./src/data/`,
            },
        },
    ],
};
