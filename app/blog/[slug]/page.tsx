import { getPost } from "@/lib/posts"

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getPost(params.slug)

  return (
    <article
      className="article"
      dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
    />
  )
}

export default Article