import type { IPost } from "@/types"
import Link from "next/link"

const PostItem = ({ post }: { post: IPost }) => {
  return (
    <div>
      <Link
        href={`/blog/${post.id}`}
      >
        <h3> {post.title} </h3>
        <p className="text-[1.25rem] mb-[-2rem] mt-[1rem]">
          {post.date}
        </p>
        <p>
          {post.description}
        </p>
        <hr className="my-8 h-[2px] bg-gray-700" />
      </Link>

    </div>
  )
}

export default PostItem