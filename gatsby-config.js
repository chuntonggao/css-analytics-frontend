/* eslint-disable camelcase */
module.exports = {
    siteMetadata: {
        title: 'CSS Analytics',
        description: 'CSS Analytics'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: [ 'Futura', 'monospace' ]
                }
            }
        },
        'gatsby-plugin-theme-ui',
        {
            resolve: 'gatsby-plugin-typescript',
            options: {
                isTSX: true,
                jsxPragma: 'React',
                allExtensions: true
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages/`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`
                    }
                ]
            }
        },
        'gatsby-plugin-mdx'
    ]
};
