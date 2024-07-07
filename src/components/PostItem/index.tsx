import type { IPost } from "@/types"
import Link from "next/link"

const PostItem = ({ post }: { post: IPost }) => {
  return (
    <div>
      <Link
        href={`/blog/${post.id}`}
      >
        <h3 className="text-2xl"> {post.title} </h3>
        <p className="text-[1rem] text-gray-400">
          {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
        </p>
        <p className="text-xl">
          {post.description}
        </p>
        <hr className="my-8 h-[2px] bg-gray-200 mb-8" />
      </Link>

    </div>
  )
}

export default PostItem