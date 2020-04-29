import { Post } from "../../utils/models"

export interface PostsPageProps {
  pathContext: {
    posts: Post[]
    postsPerPage: number
  }
  location: Location
}
