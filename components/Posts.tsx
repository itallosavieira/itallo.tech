import type { IPost } from "@/types"
import Link from "next/link"

interface Props {
  posts: IPost[]
}

const Posts = ({ posts }: Props) => {
  return (
    <div>
        {posts.map((post, id) => (
          <div key={id}>
            <p>{post.title}</p>
            <p>{post.date}</p>
            <p>{post.id}</p>
            <p>{post.category}</p>
            <Link
              href={`/posts/${post.id}`}
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

export default Posts