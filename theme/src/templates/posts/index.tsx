import React, { FunctionComponent } from "react"
import Layout from "../../components/layout"
import { Card } from "../../components/card"
import TagList from "../../components/tag-list"
import SidebarContent from "../../components/sidebar-content"
import SEO from "../../components/seo"
import calculateReadTime from "../../utils/calculateReadTime"
import { PostsPageProps } from "./interfaces"
import {
  HomeContainer,
  PostsContainer,
  Sidebar,
  ArchiveLinkWrapper,
  ArchiveLink,
} from "./styledComponents"

const PostsPage: FunctionComponent<PostsPageProps> = ({
  pathContext,
  location,
}) => {
  const showFeaturedTags = pathContext.showFeaturedTags
  const posts = pathContext.posts
    .slice(0, pathContext.postsPerPage)
    .map((p) => ({ ...p, readTime: calculateReadTime(p) }))

  return (
    <Layout>
      <SEO location={location} type={`WebSite`} />
      <HomeContainer>
        <PostsContainer>
          {posts.map((post, index) => (
            <Card
              title={post.frontmatter.title}
              path={post.frontmatter.path}
              featuredImage={
                post.frontmatter.featuredImage
                  ? post.frontmatter.featuredImage.childImageSharp
                  : null
              }
              content={post.frontmatter.excerpt}
              key={index}
              meta={{
                time: post.frontmatter.created,
                timePretty: post.frontmatter.createdPretty,
                readTime: post.readTime,
                tag:
                  post.frontmatter.tags.length > 0
                    ? post.frontmatter.tags[0]
                    : null,
              }}
              style={{ gridArea: index === 0 ? "latest" : undefined }}
              halfImage={index === 0}
            />
          ))}
          <ArchiveLinkWrapper>
            <ArchiveLink to={`/archive`}>More posts</ArchiveLink>
          </ArchiveLinkWrapper>
        </PostsContainer>
        <Sidebar>
          <SidebarContent />
        </Sidebar>
      </HomeContainer>
      {showFeaturedTags && <TagList />}
    </Layout>
  )
}

export default PostsPage
