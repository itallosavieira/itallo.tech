import type { ArticleItem } from "@/types"
import Link from "next/link"

interface Props {
  articles: ArticleItem[]
}

const ArticleItemList = ({ articles }: Props) => {
  return (
    <div>
        {articles.map((article, id) => (
            <Link
            href={`/${article.id}`}
            key={id}
          >
            {article.id}
          </Link>
      ))}
    </div>
  )
}

export default ArticleItemList