# Admonation Gatsby Theme

> TODO: Create a demo

**admonation** is a Gatsby theme for blogging.

## Features

Out-of-the-box:

-   Fully responsive
-   Highly optimized (Lighthouse score ~400)
-   SEO optimized (with open graph, Twitter Card, JSON-LD, RSS, robots.txt and sitemap)
-   PWA
-   Syntax highlighting
-   Search functionality
-   Multi navigations
-   Static pages
-   Fully typed with TypeScript
-   Tagging
-   Theming
-   Customizable

See [here](https://nehalem.netlify.com/features) for details!

## Installation

> TODO: Create a starter for a quick start!
> TODO: Create a demo

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save @baradm100/gatsby-theme-admonation
    # or
    yarn add @baradm100/gatsby-theme-admonation
    ```

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
        plugins: [
            {
                resolve: `@baradm100/gatsby-theme-admonation`,
                options: {
                    // optional theme options
                    // location to our content
                    contentPath: `content`,
                    // the page manifest
                    manifest: {
                        name: `admonation - A Gatsby theme`,
                        short_name: `admonation`,
                        start_url: `/`,
                        background_color: `#a4cbb8`,
                        theme_color: `#a4cbb8`,
                        display: `minimal-ui`,
                        icon: `${__dirname}/assets/logo.png`,
                    },
                    // if archive pages should be generated automatically
                    loadDefaultPages: true,
                    // posts shown on the front page
                    postsPerPage: 5,
                },
            },
        ],
    };
    ```

Before starting your site make sure that the following requirements are fulfilled:

1. Be sure to have a `content` directory within your Gatsby installation
2. Be sure to have a `tags.yml` file within the `content` directory with _at least_ one tag, e.g.

    ```yaml
    - name: Uncategorized
      color: #000
      icon: null
      featured: false
    ```

3. Be sure for your markdown files to include proper frontmatter content, e.g.:

```markdown
---
title: 'Post title'
path: '/path-to-your-post'
tags: ['Theme']
featuredImage: './cover.jpg'
excerpt: Descriptive description.
created: 2019-07-29
updated: 2019-07-29
---
```

Finally you can start your site with

```sh
gatsby develop
```

## Documentation

TODO

## Author

Developed by [nehalist.io](https://nehalist.io) and modified by [Bar Admoni](https://github.com/baradm100).
