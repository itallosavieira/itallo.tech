import { Post } from "@/components";
import { getPost } from "@/lib/posts";

const Article = async ({ params }: { params: { slug: string } }) => {
  const postData = await getPost(params.slug)

  return (
    <Post post={postData} />
  )
}

export default Article;