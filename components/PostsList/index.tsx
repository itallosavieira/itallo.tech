import type { IPost } from "@/types"
import Link from "next/link"

interface Props {
  posts: IPost[]
}

const PostsList = ({ posts }: Props) => {
  return (
    <div>
        {posts.map((post, id) => (
          <div key={id}>
            <p>{post.title}</p>
            <p>{post.date}</p>
            <p>{post.category}</p>
            <Link
              href={`/blog/${post.id}`}
              >
              {post.id}
            </Link>
            <br />
            <br />
          </div>
      ))}
    </div>
  )
}

export default PostsList