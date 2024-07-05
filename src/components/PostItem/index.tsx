import type { IPost } from "@/types"
import Link from "next/link"

const PostItem = ({ post }: { post: IPost }) => {
  return (
    <div>
      <Link
        href={`/blog/${post.id}`}
      >
        <h3 className="text-2xl"> {post.title} </h3>
        <p className="text-[.85rem] font-semibold text-gray-400 mb-[-2rem] mt-0">
          {post.date}
        </p>
        <p className="text-xl">
          {post.description}
        </p>
        <hr className="my-8 h-[2px] bg-gray-300" />
      </Link>

    </div>
  )
}

export default PostItem