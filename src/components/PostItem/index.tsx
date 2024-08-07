import type { IPost } from "@/types"
import Link from "next/link"

const PostItem = ({ post }: { post: IPost }) => {
  return (
      <Link
        href={`/blog/${post.id}`}
        className="transition-all ease-in-out [&>.title]:hover:text-accent"
      >
        <p className="text-[1rem] text-gray-400 mb-1">
          {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })} | #{post.category} 
        </p>
        <p className="title">
          {post.title}
        </p>
      </Link>
  )
}

export default PostItem