import { PostItem } from "@/components"
import type { IPost } from "@/types"

interface Props {
  posts: IPost[]
}

const PostsList = ({ posts }: Props) => {
  return (
    <div className="mt-10">
        {posts.map((post, id) => (
          <div key={id}>
            <PostItem post={post} />
          </div>
      ))}
    </div>
  )
}

export default PostsList