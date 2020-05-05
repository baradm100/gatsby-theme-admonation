The `admonation` theme is packed with great features that make it easy to just plug & play and allows you just to focus on creating the content instead of working on adding features.

## Content Table

-   [Dynamic navigation](#dynamic-navigation)
-   [SEO](#seo)
-   [Search](#search)
-   [Highly optimized](#highly-optimized)
-   [Responsive](#responsive)
-   [Theming](#theming)
-   [Tagging](#tagging)
-   [Archives](#archives)
-   [Table of contents](#table-of-contents)
-   [Syntax highlighting](#syntax-highlighting)
-   [Static pages](#static-pages)
-   [Fully typed with TypeScript](#fully-typed-with-TypeScript)
-   [Customizable](#customizable)
-   [Offline Support](#offline-support)
-   [Search engine friendly](#search-engine-friendly)

## Dynamic navigation

We have 2 navigation menus, one in the top and the other is in the footer. The config for the navigation menus will be under `gatsby-config.js`, specific documentation:

-   [Upper menu doc](https://github.com/baradm100/gatsby-theme-admonation#menu)
-   [Footer menu doc](https://github.com/baradm100/gatsby-theme-admonation#footermenu)

## SEO

All pages, posts and archives are SEO optimized - this includes proper open graph meta tags for Facebook, Twitter card tags and even JSON-LD.

Additionally the theme ships with a sitemap (`<domain>/sitemap.xml`) and a RSS feed (`<domain>/rss.xml`).

## Search

Another out-of-the-box feature is the search functionality which is based on [gatsby-plugin-lunr](https://www.gatsbyjs.org/packages/gatsby-plugin-lunr/).

## Highly optimized

Despite being [heavily SEO optimized](#seo) performance and accessibility have also been a major factor when implementing the theme. This
leads to a decent [Lighthouse](https://www.gatsbyjs.org/docs/audit-with-lighthouse/) result:

[]

## Responsive

Optimized for phones, tablets and large desktops!

## Customizable

The theme was built with [component shadowing](<(https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/)>) in mind. There are multiple placeholder components which are ready to be overwritten by you to create your very own version of the theme!

> TODO: Fix the customization link

See [Customization](/customization) for further details.

## Theming

Colors can be customized by shadowing the theme file - see [Customization](/customization) for further details.

## Tagging

> TODO: Fix the customization link

The theme heavily relies on the usage of tags. Tag archives will be automatically generated and can be customized
in terms of color and if they should be shown on the front page - see [Customization](/customization) for further details.

## Archives

Archive pages are available at:

-   `/archive` for all posts
-   `/tag/{tagname}` for all posts belonging to a tag
-   `/tags` for all tags

## Table of contents

Posts are automatically attached by a table of contents (like the one you can see on the left side) as long as they any headings (`h2` or
`h3`). Posts without any headings are centered like you can see in the [Getting Started](/getting-started) post.

> The TOC is toggleable on mobile for a better user experience!

## Syntax highlighting

Code properly formatted is automatically highlighted by [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/).

## Static pages

We differentiates between posts and static pages. All `.md` files within `content/posts` will be handled as posts (and shown on
your front page) while all markdown files within `content/pages` are handled as static pages.

> Static pages are not linked automatically - instead you need to manually create a link to them. A good place to put these links is one
> of the two navigations (main and footer) - see [Dynamic Navigation](#dynamic-navigation) for further details.

## Fully typed with TypeScript

Powered by TypeScript all components are fully typed. Thanks to the `FunctionComponent<T>` interface it's easy to use components without
having to worry too much about what props to pass - your IDE will tell you what you can do.

## Offline Support

A nice feature of the theme is adding offline support service worker out of the box!
This service worker will cache the content (not the images) of `/` and `/archive` to allow for better experiences for the user.

## Search Engine Friendly

The theme is search engine friendly thanks for the robot.txt file and the [SEO](#seo)
